import jsPDF from 'jspdf';
import { 
  generateInvoiceId, 
  formatInvoiceDate, 
  COMPANY_DETAILS, 
  maskPaymentMethod,
  calculateGST 
} from './invoice-utils';

export interface OrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
}

export interface OrderDetails {
  orderId: string;
  invoiceId: string;
  orderDate: Date;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentId: string;
  paymentMethod: string;
  customer: CustomerDetails;
}

export const generateInvoicePDF = async (orderDetails: OrderDetails): Promise<Uint8Array> => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 20;
  let yPosition = 30;

  // Set font
  pdf.setFont('helvetica');

  // Header - Company Logo & Name
  pdf.setFontSize(24);
  pdf.setTextColor(37, 99, 235); // Blue color
  pdf.text('RAZOR COMMERCE', margin, yPosition);
  
  pdf.setFontSize(12);
  pdf.setTextColor(100, 100, 100);
  pdf.text(COMPANY_DETAILS.tagline, margin, yPosition + 8);
  
  // Invoice Title
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0);
  pdf.text('INVOICE', pageWidth - margin - 40, yPosition);

  yPosition += 25;

  // Invoice Details Box
  pdf.setFillColor(248, 250, 252);
  pdf.rect(margin, yPosition, pageWidth - 2 * margin, 35, 'F');
  
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  
  // Left column - Invoice details
  pdf.text(`Invoice ID: ${orderDetails.invoiceId}`, margin + 5, yPosition + 10);
  pdf.text(`Order ID: ${orderDetails.orderId}`, margin + 5, yPosition + 18);
  pdf.text(`Date: ${formatInvoiceDate(orderDetails.orderDate)}`, margin + 5, yPosition + 26);
  
  // Right column - Payment details
  pdf.text(`Payment ID: ${orderDetails.paymentId}`, pageWidth - margin - 80, yPosition + 10);
  pdf.text(`Payment Method: ${orderDetails.paymentMethod}`, pageWidth - margin - 80, yPosition + 18);
  pdf.text(`Last 4 digits: ${maskPaymentMethod(orderDetails.paymentId)}`, pageWidth - margin - 80, yPosition + 26);

  yPosition += 50;

  // Company Details
  pdf.setFontSize(12);
  pdf.setTextColor(0, 0, 0);
  pdf.text('FROM:', margin, yPosition);
  
  pdf.setFontSize(10);
  pdf.text(COMPANY_DETAILS.name, margin, yPosition + 12);
  pdf.text(COMPANY_DETAILS.address.line1, margin, yPosition + 20);
  pdf.text(COMPANY_DETAILS.address.line2, margin, yPosition + 28);
  pdf.text(`${COMPANY_DETAILS.address.city}, ${COMPANY_DETAILS.address.state} ${COMPANY_DETAILS.address.pincode}`, margin, yPosition + 36);
  pdf.text(COMPANY_DETAILS.address.country, margin, yPosition + 44);
  pdf.text(`Email: ${COMPANY_DETAILS.contact.email}`, margin, yPosition + 52);
  pdf.text(`Phone: ${COMPANY_DETAILS.contact.phone}`, margin, yPosition + 60);

  // Customer Details
  pdf.setFontSize(12);
  pdf.text('BILL TO:', pageWidth - margin - 80, yPosition);
  
  pdf.setFontSize(10);
  pdf.text(orderDetails.customer.name, pageWidth - margin - 80, yPosition + 12);
  pdf.text(orderDetails.customer.email, pageWidth - margin - 80, yPosition + 20);
  
  if (orderDetails.customer.phone) {
    pdf.text(orderDetails.customer.phone, pageWidth - margin - 80, yPosition + 28);
  }
  
  if (orderDetails.customer.address) {
    const addr = orderDetails.customer.address;
    pdf.text(addr.line1, pageWidth - margin - 80, yPosition + 36);
    if (addr.line2) pdf.text(addr.line2, pageWidth - margin - 80, yPosition + 44);
    pdf.text(`${addr.city}, ${addr.state} ${addr.pincode}`, pageWidth - margin - 80, yPosition + 52);
    pdf.text(addr.country, pageWidth - margin - 80, yPosition + 60);
  }

  yPosition += 85;

  // Items Table Header
  pdf.setFillColor(37, 99, 235);
  pdf.rect(margin, yPosition, pageWidth - 2 * margin, 12, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(10);
  pdf.text('ITEM', margin + 5, yPosition + 8);
  pdf.text('QTY', pageWidth - margin - 80, yPosition + 8);
  pdf.text('RATE', pageWidth - margin - 60, yPosition + 8);
  pdf.text('AMOUNT', pageWidth - margin - 30, yPosition + 8);

  yPosition += 12;

  // Items Table Body
  pdf.setTextColor(0, 0, 0);
  orderDetails.items.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    
    // Alternate row background
    if (index % 2 === 0) {
      pdf.setFillColor(248, 250, 252);
      pdf.rect(margin, yPosition, pageWidth - 2 * margin, 20, 'F');
    }
    
    pdf.setFontSize(10);
    pdf.text(item.name, margin + 5, yPosition + 8);
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text(item.description.substring(0, 50) + '...', margin + 5, yPosition + 14);
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(item.quantity.toString(), pageWidth - margin - 80, yPosition + 8);
    pdf.text(`₹${item.price.toFixed(2)}`, pageWidth - margin - 60, yPosition + 8);
    pdf.text(`₹${itemTotal.toFixed(2)}`, pageWidth - margin - 30, yPosition + 8);
    
    yPosition += 20;
  });

  yPosition += 10;

  // Totals Section
  const gstDetails = calculateGST(orderDetails.total);
  const baseAmount = orderDetails.total / 1.18;

  // Subtotal
  pdf.text('Subtotal:', pageWidth - margin - 80, yPosition);
  pdf.text(`₹${baseAmount.toFixed(2)}`, pageWidth - margin - 30, yPosition);
  yPosition += 8;

  // Shipping
  if (orderDetails.shipping > 0) {
    pdf.text('Shipping:', pageWidth - margin - 80, yPosition);
    pdf.text(`₹${orderDetails.shipping.toFixed(2)}`, pageWidth - margin - 30, yPosition);
    yPosition += 8;
  }

  // GST
  pdf.text('CGST (9%):', pageWidth - margin - 80, yPosition);
  pdf.text(`₹${gstDetails.cgst.toFixed(2)}`, pageWidth - margin - 30, yPosition);
  yPosition += 8;

  pdf.text('SGST (9%):', pageWidth - margin - 80, yPosition);
  pdf.text(`₹${gstDetails.sgst.toFixed(2)}`, pageWidth - margin - 30, yPosition);
  yPosition += 8;

  // Total
  pdf.setDrawColor(0, 0, 0);
  pdf.line(pageWidth - margin - 90, yPosition + 2, pageWidth - margin, yPosition + 2);
  yPosition += 10;

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('TOTAL:', pageWidth - margin - 80, yPosition);
  pdf.text(`₹${orderDetails.total.toFixed(2)}`, pageWidth - margin - 30, yPosition);

  yPosition += 25;

  // Footer
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(100, 100, 100);
  
  pdf.text('Thank you for your business!', margin, yPosition);
  pdf.text(`GST No: ${COMPANY_DETAILS.gst} | PAN: ${COMPANY_DETAILS.pan}`, margin, yPosition + 8);
  pdf.text(`Website: ${COMPANY_DETAILS.contact.website} | Support: ${COMPANY_DETAILS.contact.email}`, margin, yPosition + 16);
  
  // Terms & Conditions
  yPosition += 30;
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.text('Terms & Conditions:', margin, yPosition);
  
  pdf.setFontSize(8);
  pdf.setTextColor(100, 100, 100);
  pdf.text('• Digital products - No refunds after download', margin, yPosition + 8);
  pdf.text('• For support, contact us within 30 days of purchase', margin, yPosition + 16);
  pdf.text('• Licensed for commercial use as per our license terms', margin, yPosition + 24);

  // Return PDF as Uint8Array
  return new Uint8Array(pdf.output('arraybuffer'));
};
