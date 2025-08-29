import { Resend } from 'resend';
import { OrderDetails, generateInvoicePDF } from './pdf-generator';
import { COMPANY_DETAILS } from './invoice-utils';

// Initialize Resend with API key
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// Simple email function for testing
export const sendSimpleTestEmail = async (email: string, orderDetails: EmailOrderDetails): Promise<boolean> => {
  console.log('🔍 DEBUG: Starting email send process');
  console.log('🔍 DEBUG: Target email:', email);
  console.log('🔍 DEBUG: Order details:', orderDetails);
  
  try {
    const apiKey = import.meta.env.VITE_RESEND_API_KEY;
    console.log('🔍 DEBUG: Environment check - API key exists:', !!apiKey);
    console.log('🔍 DEBUG: API key first 10 chars:', apiKey ? apiKey.substring(0, 10) : 'undefined');
    
    if (!apiKey) {
      console.error('❌ VITE_RESEND_API_KEY is missing from .env file');
      console.error('❌ Make sure you have VITE_RESEND_API_KEY=your_key in your .env file');
      console.error('❌ And restart your dev server after adding it');
      return false;
    }

    console.log('✅ API Key found, creating Resend instance...');
    
    // Create a new Resend instance to ensure fresh API key
    const testResend = new Resend(apiKey);
    
    console.log('🔄 Preparing email data...');
    const emailData = {
      from: 'Razor Commerce <onboarding@resend.dev>',
      to: [email],
      subject: `🎉 Order Confirmation - ${orderDetails.orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">Order Confirmed!</h2>
          <p>Hi ${orderDetails.customerName},</p>
          <p>Your order <strong>${orderDetails.orderId}</strong> has been confirmed.</p>
          <p><strong>Total:</strong> ₹${orderDetails.total}</p>
          <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
          <p>Thank you for your purchase!</p>
          <hr>
          <p style="color: #666; font-size: 12px;">This is a test email from Razor Commerce</p>
        </div>
      `,
    };
    
    console.log('🔄 Email data prepared:', emailData);
    console.log('🔄 Making API call to Resend...');
    
    const { data, error } = await testResend.emails.send(emailData);

    if (error) {
      console.error('❌ Resend API Error Details:', error);
      console.error('❌ Error type:', typeof error);
      console.error('❌ Error message:', error.message || 'Unknown error');
      return false;
    }

    console.log('✅ Email sent successfully!');
    console.log('✅ Response data:', data);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed with exception:');
    console.error('❌ Error type:', typeof error);
    console.error('❌ Error message:', error instanceof Error ? error.message : String(error));
    console.error('❌ Full error:', error);
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return false;
  }
};

export interface EmailOrderDetails extends OrderDetails {
  customerName: string;
  customerEmail: string;
}

// Generate HTML email template
const generateOrderConfirmationEmail = (orderDetails: EmailOrderDetails): string => {
  const itemsList = orderDetails.items.map(item => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px 0; font-weight: 600; color: #111827;">${item.name}</td>
      <td style="padding: 12px 0; text-align: center; color: #6b7280;">${item.quantity}</td>
      <td style="padding: 12px 0; text-align: right; color: #111827;">₹${item.price.toFixed(2)}</td>
      <td style="padding: 12px 0; text-align: right; font-weight: 600; color: #111827;">₹${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation - Razor Commerce</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">${COMPANY_DETAILS.name}</h1>
                <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">${COMPANY_DETAILS.tagline}</p>
            </div>
            
            <!-- Success Message -->
            <div style="padding: 40px 30px; text-align: center; border-bottom: 3px solid #10b981;">
                <div style="width: 80px; height: 80px; background-color: #10b981; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 40px;">✓</span>
                </div>
                <h2 style="margin: 0 0 10px; color: #111827; font-size: 24px;">Order Confirmed!</h2>
                <p style="margin: 0; color: #6b7280; font-size: 16px;">Thank you for your purchase, ${orderDetails.customerName}</p>
            </div>
            
            <!-- Order Details -->
            <div style="padding: 30px;">
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h3 style="margin: 0 0 10px; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Order Information</h3>
                            <p style="margin: 5px 0; color: #111827;"><strong>Order ID:</strong> ${orderDetails.orderId}</p>
                            <p style="margin: 5px 0; color: #111827;"><strong>Invoice ID:</strong> ${orderDetails.invoiceId}</p>
                            <p style="margin: 5px 0; color: #111827;"><strong>Date:</strong> ${orderDetails.orderDate.toLocaleDateString('en-IN')}</p>
                        </div>
                        <div>
                            <h3 style="margin: 0 0 10px; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Payment Details</h3>
                            <p style="margin: 5px 0; color: #111827;"><strong>Payment ID:</strong> ${orderDetails.paymentId}</p>
                            <p style="margin: 5px 0; color: #111827;"><strong>Method:</strong> ${orderDetails.paymentMethod}</p>
                            <p style="margin: 5px 0; color: #111827;"><strong>Status:</strong> <span style="color: #10b981; font-weight: 600;">Paid</span></p>
                        </div>
                    </div>
                </div>
                
                <!-- Order Items -->
                <h3 style="margin: 0 0 20px; color: #111827; font-size: 18px;">Order Items</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <thead>
                        <tr style="background-color: #f8fafc;">
                            <th style="padding: 12px 0; text-align: left; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Item</th>
                            <th style="padding: 12px 0; text-align: center; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Qty</th>
                            <th style="padding: 12px 0; text-align: right; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Price</th>
                            <th style="padding: 12px 0; text-align: right; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsList}
                    </tbody>
                </table>
                
                <!-- Order Summary -->
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #6b7280;">Subtotal:</span>
                        <span style="color: #111827;">₹${orderDetails.subtotal.toFixed(2)}</span>
                    </div>
                    ${orderDetails.shipping > 0 ? `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #6b7280;">Shipping:</span>
                        <span style="color: #111827;">₹${orderDetails.shipping.toFixed(2)}</span>
                    </div>
                    ` : ''}
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #6b7280;">Tax (GST):</span>
                        <span style="color: #111827;">₹${(orderDetails.total - orderDetails.subtotal - orderDetails.shipping).toFixed(2)}</span>
                    </div>
                    <hr style="border: none; border-top: 1px solid #d1d5db; margin: 12px 0;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #111827; font-weight: 600; font-size: 18px;">Total:</span>
                        <span style="color: #111827; font-weight: 700; font-size: 18px;">₹${orderDetails.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            
            <!-- Download Instructions -->
            <div style="padding: 0 30px 30px;">
                <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <h3 style="margin: 0 0 10px; font-size: 18px;">🎉 Your Templates Are Ready!</h3>
                    <p style="margin: 0 0 15px; opacity: 0.9;">Your purchase is complete and your design templates are ready for download.</p>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Check your account dashboard or contact support for download links.</p>
                </div>
            </div>
            
            <!-- Support Section -->
            <div style="padding: 30px; background-color: #f8fafc; border-top: 1px solid #e5e7eb;">
                <h3 style="margin: 0 0 15px; color: #111827; font-size: 16px; text-align: center;">Need Help?</h3>
                <div style="text-align: center; color: #6b7280; font-size: 14px;">
                    <p style="margin: 5px 0;">📧 Email: <a href="mailto:${COMPANY_DETAILS.contact.email}" style="color: #2563eb; text-decoration: none;">${COMPANY_DETAILS.contact.email}</a></p>
                    <p style="margin: 5px 0;">📞 Phone: <a href="tel:${COMPANY_DETAILS.contact.phone}" style="color: #2563eb; text-decoration: none;">${COMPANY_DETAILS.contact.phone}</a></p>
                    <p style="margin: 5px 0;">🌐 Website: <a href="https://${COMPANY_DETAILS.contact.website}" style="color: #2563eb; text-decoration: none;">${COMPANY_DETAILS.contact.website}</a></p>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="padding: 20px; text-align: center; background-color: #111827; color: #9ca3af; font-size: 12px;">
                <p style="margin: 0 0 5px;">© 2024 ${COMPANY_DETAILS.name}. All rights reserved.</p>
                <p style="margin: 0;">${COMPANY_DETAILS.address.city}, ${COMPANY_DETAILS.address.state}, ${COMPANY_DETAILS.address.country}</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send order confirmation email with PDF invoice
export const sendOrderConfirmationEmail = async (orderDetails: EmailOrderDetails): Promise<boolean> => {
  try {
    console.log('Starting email send process for:', orderDetails.customerEmail);
    
    // Check if API key exists
    const apiKey = import.meta.env.VITE_RESEND_API_KEY;
    if (!apiKey) {
      console.error('VITE_RESEND_API_KEY is not set in environment variables');
      return false;
    }
    console.log('API key found:', apiKey.substring(0, 10) + '...');

    // Generate PDF invoice
    const pdfBytes = await generateInvoicePDF(orderDetails);
    const base64Pdf = btoa(String.fromCharCode(...pdfBytes));

    const { data, error } = await resend.emails.send({
      from: 'Razor Commerce <onboarding@resend.dev>', // Using Resend's default from address for testing
      to: [orderDetails.customerEmail],
      subject: `Order Confirmation - ${orderDetails.orderId} | ${COMPANY_DETAILS.name}`,
      html: generateOrderConfirmationEmail(orderDetails),
      attachments: [
        {
          filename: `invoice-${orderDetails.invoiceId}.pdf`,
          content: base64Pdf,
          contentType: 'application/pdf',
        },
      ],
    });

    if (error) {
      console.error('Resend API error:', error);
      return false;
    }

    console.log('Order confirmation email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    console.error('Error details:', error);
    return false;
  }
};

// Fallback email service using EmailJS (if Resend fails)
export const sendEmailWithEmailJS = async (orderDetails: EmailOrderDetails): Promise<boolean> => {
  // Implementation for EmailJS fallback
  // This can be implemented if needed as a backup service
  try {
    // EmailJS implementation would go here
    console.log('EmailJS fallback would be implemented here');
    return true;
  } catch (error) {
    console.error('EmailJS fallback failed:', error);
    return false;
  }
};
