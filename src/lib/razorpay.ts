
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

  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!key) {
    throw new Error('Missing Razorpay Key ID. Please set VITE_RAZORPAY_KEY_ID.');
  }

  const options = {
    key,
    amount: amountInPaise,
    currency,
    name,
    description,
    prefill: {
      name: customer?.name || '',
      email: customer?.email || '',
      contact: customer?.contact || '',
    },
    notes,
    handler: (response: any) => {
      // For production, implement proper payment verification on backend
      console.log('Payment successful:', response);
      onSuccess?.(response);
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

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};
