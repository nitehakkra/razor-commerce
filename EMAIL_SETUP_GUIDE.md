# 📧 Email & Invoice Setup Guide - Razor Commerce

## Overview
Complete automated email system with PDF invoice generation for order confirmations. This system will automatically send professional emails with PDF invoices attached when customers complete their payments.

## Features Implemented ✨

### ✅ **Automated Email Notifications**
- Professional HTML email templates
- Order confirmation emails sent immediately after payment
- Customer order details and purchase summary
- Company branding and contact information

### ✅ **PDF Invoice Generation**
- Professional PDF invoices with company branding
- Complete order details, customer information, payment method
- GST calculations (CGST/SGST breakdown)
- Alphanumeric invoice ID generation
- Company logo, address, and business details
- Terms & conditions and support information

### ✅ **Payment Integration**
- Seamless Razorpay payment flow integration
- Automatic order processing upon successful payment
- Order confirmation page with tracking details
- Error handling and fallback notifications

## Required Environment Variables 🔧

Add these to your `.env` file:

```env
# Razorpay Configuration (Required)
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id_here

# Resend Email Service (Required for automated emails)
VITE_RESEND_API_KEY=re_xxxxxxxx_your_resend_api_key
```

## Setup Instructions 🚀

### 1. **Razorpay Setup**
   - Already configured in your existing `.env` file
   - No additional changes needed

### 2. **Resend Email Service Setup**
   1. Go to [Resend.com](https://resend.com) and create an account
   2. Verify your domain (or use their test domain for development)
   3. Generate an API key from the dashboard
   4. Add `VITE_RESEND_API_KEY=your_api_key` to your `.env` file

### 3. **Domain Configuration**
   Update the email sender in `src/lib/email-service.ts`:
   ```typescript
   from: `${COMPANY_DETAILS.name} <orders@yourdomain.com>`, // Replace with your verified domain
   ```

### 4. **Company Details Customization**
   Update company information in `src/lib/invoice-utils.ts`:
   ```typescript
   export const COMPANY_DETAILS = {
     name: 'Your Company Name',
     tagline: 'Your Company Tagline',
     address: {
       line1: 'Your Address Line 1',
       line2: 'Your Address Line 2',
       city: 'Your City',
       state: 'Your State',
       pincode: 'Your PIN Code',
       country: 'India'
     },
     contact: {
       email: 'support@yourdomain.com',
       phone: '+91 XXXXXXXXXX',
       website: 'www.yourdomain.com'
     },
     gst: 'YOUR_GST_NUMBER', // Replace with actual GST
     pan: 'YOUR_PAN_NUMBER'  // Replace with actual PAN
   };
   ```

## How It Works 🔄

### Payment Flow:
1. **Customer adds items to cart** → Proceeds to checkout
2. **Razorpay payment initiated** → Customer completes payment
3. **Payment successful** → System generates order and invoice IDs
4. **Email processing starts** → PDF invoice generated automatically
5. **Email sent** → Professional confirmation email with PDF attachment
6. **Customer redirected** → Order confirmation page with details

### Email Content:
- ✅ Order confirmation with success message
- ✅ Complete order details (items, quantities, prices)
- ✅ Payment information (payment ID, method, status)
- ✅ Customer support contact information
- ✅ Professional HTML design matching your brand
- ✅ PDF invoice attachment with all legal details

### PDF Invoice Includes:
- ✅ Company logo and branding
- ✅ Invoice ID (alphanumeric)
- ✅ Order ID and payment details
- ✅ Customer billing information
- ✅ Itemized list of purchased products
- ✅ GST breakdown (CGST 9% + SGST 9% = 18% total)
- ✅ Payment method with last 4 digits
- ✅ Company address and contact details
- ✅ Terms & conditions
- ✅ Professional formatting and layout

## Testing 🧪

### Test the Complete Flow:
1. Add items to cart on your website
2. Proceed to checkout with Razorpay
3. Complete test payment (use Razorpay test cards)
4. Check that:
   - Payment processes successfully
   - Customer is redirected to order confirmation page
   - Email is sent to the customer's email address
   - PDF invoice is attached to the email
   - All order details are correct

### Test Cards (Razorpay):
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002

## File Structure 📁

```
src/
├── lib/
│   ├── invoice-utils.ts      # Invoice ID generation & company details
│   ├── pdf-generator.ts      # PDF invoice creation logic
│   ├── email-service.ts      # Email sending with Resend
│   └── razorpay.ts          # Payment processing (existing)
├── pages/
│   ├── Cart.tsx             # Updated with email integration
│   └── OrderConfirmation.tsx # Success page after payment
```

## Troubleshooting 🔧

### Common Issues:
1. **Email not sending**: Check VITE_RESEND_API_KEY in .env file
2. **Domain not verified**: Verify your domain in Resend dashboard
3. **PDF generation fails**: Check browser console for errors
4. **Payment not triggering email**: Check Razorpay onSuccess callback

### Support:
- Check browser console for error messages
- Verify environment variables are set correctly
- Test with Razorpay test mode first
- Contact Resend support for email delivery issues

## Production Deployment 🚀

### Before Going Live:
1. ✅ Replace test Razorpay key with live key
2. ✅ Verify your email domain with Resend
3. ✅ Update company details with real information
4. ✅ Test the complete flow with real email addresses
5. ✅ Set up monitoring for email delivery failures

### Security Notes:
- Never expose API keys in frontend code
- Use environment variables for all sensitive data
- Monitor email sending rates and costs
- Implement proper error handling and logging

---

**🎉 Your automated email and invoice system is now ready to use!**

The system will automatically handle all order confirmations, send professional emails, and generate detailed PDF invoices for every successful purchase on your Razor Commerce website.
