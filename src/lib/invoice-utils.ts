import { v4 as uuidv4 } from 'uuid';

// Generate alphanumeric invoice ID
export const generateInvoiceId = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `INV-${timestamp.toUpperCase()}-${random.toUpperCase()}`;
};

// Generate order number
export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return `ORD-${timestamp.toUpperCase()}-${random.toUpperCase()}`;
};

// Format date for invoice
export const formatInvoiceDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

// Company details for invoice
export const COMPANY_DETAILS = {
  name: 'Razor Commerce',
  tagline: 'Premium Web Design Templates',
  address: {
    line1: 'Digital Commerce Hub',
    line2: 'Tech Valley, Electronic City',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560100',
    country: 'India'
  },
  contact: {
    email: 'support@razorcommerce.com',
    phone: '+91 8370030184',
    website: 'www.razorcommerce.com'
  },
  gst: 'GST123456789', // Replace with actual GST number
  pan: 'ABCDE1234F' // Replace with actual PAN
};

// Extract last 4 digits of payment method
export const maskPaymentMethod = (paymentId: string): string => {
  if (!paymentId || paymentId.length < 4) return '****';
  return `****${paymentId.slice(-4)}`;
};

// Calculate GST (18% for digital services in India)
export const calculateGST = (amount: number): { cgst: number; sgst: number; igst: number; total: number } => {
  const gstRate = 0.18;
  const baseAmount = amount / (1 + gstRate);
  const totalGST = amount - baseAmount;
  
  return {
    cgst: totalGST / 2,
    sgst: totalGST / 2,
    igst: totalGST,
    total: totalGST
  };
};
