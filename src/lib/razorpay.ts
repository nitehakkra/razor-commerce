
/**
 * Lightweight Razorpay loader and opener.
 * Set your publishable key in VITE_RAZORPAY_KEY_ID.
 */

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  if (window.Razorpay) return Promise.resolve(true);

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

type OpenCheckoutParams = {
  amountInPaise: number;
  currency?: string;
  name?: string;
  description?: string;
  customer?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  onSuccess?: (response: any) => void;
  onDismiss?: () => void;
};

export const openRazorpayCheckout = async ({
  amountInPaise,
  currency = 'INR',
  name = 'Checkout',
  description = 'Secure payment',
  customer,
  notes,
  onSuccess,
  onDismiss,
}: OpenCheckoutParams) => {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    throw new Error('Failed to load Razorpay script');
  }

  try {
    // Create order on backend using Orders API (REQUIRED for payment capture)
    console.log('Creating order with amount:', amountInPaise / 100);

    // Prefer explicitly configured API URL, then same-origin fallback.
    const explicitApi = import.meta.env.VITE_API_URL && String(import.meta.env.VITE_API_URL).trim();
    const sameOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const apiUrl = explicitApi || sameOrigin;

    const orderResponse = await fetch(`${apiUrl}/api/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amountInPaise / 100, // Convert back to rupees for backend
        currency,
        receipt: `receipt_${Date.now()}`,
        notes: notes || {},
      }),
    });

    if (!orderResponse.ok) {
      let errorData: any = {};
      try {
        errorData = await orderResponse.json();
      } catch {
        // noop
      }
      throw new Error(`Failed to create order: ${errorData.error || 'Unknown error'}`);
    }

    const { order, key_id } = await orderResponse.json();
    console.log('Order created successfully:', order.id);

    const options = {
      key: key_id,
      amount: order.amount,
      currency: order.currency,
      name,
      description,
      order_id: order.id, // CRITICAL: This ensures proper Orders API usage
      prefill: {
        name: customer?.name || '',
        email: customer?.email || '',
        contact: customer?.contact || '',
      },
      notes: order.notes,
      handler: async (response: any) => {
        try {
          console.log('Payment response:', response);
          
          // Verify payment on backend
          const verifyResponse = await fetch(`${apiUrl}/api/verify-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          if (verifyResponse.ok) {
            console.log('Payment verified successfully');
            onSuccess?.(response);
          } else {
            const errorData = await verifyResponse.json();
            throw new Error(`Payment verification failed: ${errorData.message}`);
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          throw error;
        }
      },
      modal: {
        ondismiss: () => {
          onDismiss?.();
        },
      },
      theme: {
        color: '#3B82F6', // blue-500
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error('Error in Razorpay checkout:', error);
    throw error;
  }
};

