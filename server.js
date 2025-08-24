
import express from 'express';
import Razorpay from 'razorpay';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from dist directory
app.use(express.static('dist'));

// Lightweight healthcheck endpoints for platform probes
app.get('/healthz', (_req, res) => {
  res.status(200).type('text').send('ok');
});
app.head('/healthz', (_req, res) => {
  res.status(200).end();
});
// Optional: silence favicon requests in logs
app.get('/favicon.ico', (_req, res) => res.status(204).end());

// Initialize Razorpay
if (!process.env.VITE_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('Missing Razorpay environment variables!');
  console.log('VITE_RAZORPAY_KEY_ID:', process.env.VITE_RAZORPAY_KEY_ID ? 'Set' : 'Missing');
  console.log('RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET ? 'Set' : 'Missing');
}

const razorpay = new Razorpay({
  key_id: process.env.VITE_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Razorpay Commerce Server is running',
    timestamp: new Date().toISOString(),
    env_check: {
      razorpay_key_id: process.env.VITE_RAZORPAY_KEY_ID ? 'Set' : 'Missing',
      razorpay_secret: process.env.RAZORPAY_KEY_SECRET ? 'Set' : 'Missing',
    },
  });
});

// Create order endpoint
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid amount provided',
      });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise (smallest currency unit)
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
      payment_capture: 1, // Auto capture payment when successful
    };

    console.log('Creating Razorpay order with options:', options);

    // Using initialized Razorpay client
    const order = await razorpay.orders.create(options);
    console.log('Order created successfully:', order.id);
    
    res.json({
      success: true,
      order,
      key_id: process.env.VITE_RAZORPAY_KEY_ID, // Frontend needs this
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error && (error.details || error.message) ? { message: error.message, details: error.details } : error);
    // Ensure we always return valid JSON
    return res.status(500).json({
      success: false,
      error: 'Failed to create order',
      details: (error && error.message) ? error.message : String(error),
      env: error && error.details ? error.details : undefined,
    });
  }
});

// Verify payment endpoint
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({
        success: false,
        error: 'Server not configured: missing RAZORPAY_KEY_SECRET',
      });
    }
    
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');

    if (generated_signature === razorpay_signature) {
      res.json({
        success: true,
        message: 'Payment verified successfully',
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment verification failed',
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to verify payment',
      details: (error && error.message) ? error.message : String(error),
    });
  }
});

// Catch-all handler: serve React app for any non-API routes
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Healthcheck: GET /healthz');
});
