import React from 'react';

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  currency: string;
}

interface InvoiceData {
  // Seller Information
  sellerInfo: {
    companyName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phoneNumber: string;
    emailAddress: string;
    website?: string;
    logoUrl?: string;
  };
  
  // Client Information
  clientInfo: {
    clientName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  
  // Invoice Details
  invoiceDetails: {
    invoiceNumber: string;
    invoiceDate: string;
    paymentDueDate: string;
  };
  
  // Payment Information
  paymentInfo: {
    bankName?: string;
    accountHolderName?: string;
    accountNumber?: string;
    routingCode?: string;
    swiftCode?: string;
    otherPaymentInstructions?: string;
  };
  
  // Items
  items: InvoiceItem[];
  
  // Notes & Terms
  notesAndTerms: {
    thankYouNote?: string;
    paymentTerms?: string;
    lateFeePolicy?: string;
  };
  
  // Tax
  tax: {
    taxRate: number;
    applyToTotal: boolean;
  };
}

interface InvoiceTemplateProps {
  invoiceData: InvoiceData;
}

const InvoiceTemplate: React.FC<InvoiceTemplateProps> = ({ invoiceData }) => {
  const calculateSubtotal = () => {
    return invoiceData.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * invoiceData.tax.taxRate) / 100;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxAmount = calculateTax();
    return subtotal + taxAmount;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            {invoiceData.sellerInfo.logoUrl && (
              <img 
                src={invoiceData.sellerInfo.logoUrl} 
                alt="Company Logo" 
                className="h-12 mb-4"
              />
            )}
            <h1 className="text-3xl font-bold">INVOICE</h1>
            <p className="text-blue-100">#{invoiceData.invoiceDetails.invoiceNumber}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">{invoiceData.sellerInfo.companyName}</h2>
            <p className="text-blue-100 mt-2">
              {invoiceData.sellerInfo.streetAddress}<br/>
              {invoiceData.sellerInfo.city}, {invoiceData.sellerInfo.state} {invoiceData.sellerInfo.zipCode}<br/>
              {invoiceData.sellerInfo.country}
            </p>
          </div>
        </div>
      </div>

      {/* Invoice Info & Client Details */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Invoice Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice Details</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Invoice Date:</span> {invoiceData.invoiceDetails.invoiceDate}</p>
              <p><span className="font-medium">Due Date:</span> {invoiceData.invoiceDetails.paymentDueDate}</p>
            </div>
          </div>

          {/* Client Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bill To</h3>
            <div className="text-gray-700">
              <p className="font-medium">{invoiceData.clientInfo.clientName}</p>
              <p>{invoiceData.clientInfo.streetAddress}</p>
              <p>{invoiceData.clientInfo.city}, {invoiceData.clientInfo.state} {invoiceData.clientInfo.zipCode}</p>
              <p>{invoiceData.clientInfo.country}</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Phone:</span> {invoiceData.sellerInfo.phoneNumber}</p>
              <p><span className="font-medium">Email:</span> {invoiceData.sellerInfo.emailAddress}</p>
              {invoiceData.sellerInfo.website && (
                <p><span className="font-medium">Website:</span> {invoiceData.sellerInfo.website}</p>
              )}
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
            <div className="space-y-2 text-sm">
              {invoiceData.paymentInfo.bankName && (
                <>
                  <p><span className="font-medium">Bank:</span> {invoiceData.paymentInfo.bankName}</p>
                  <p><span className="font-medium">Account Holder:</span> {invoiceData.paymentInfo.accountHolderName}</p>
                  <p><span className="font-medium">Account Number:</span> {invoiceData.paymentInfo.accountNumber}</p>
                  {invoiceData.paymentInfo.routingCode && (
                    <p><span className="font-medium">Routing Code:</span> {invoiceData.paymentInfo.routingCode}</p>
                  )}
                  {invoiceData.paymentInfo.swiftCode && (
                    <p><span className="font-medium">SWIFT/BIC:</span> {invoiceData.paymentInfo.swiftCode}</p>
                  )}
                </>
              )}
              {invoiceData.paymentInfo.otherPaymentInstructions && (
                <p>{invoiceData.paymentInfo.otherPaymentInstructions}</p>
              )}
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Items</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Qty</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Unit Price</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {item.currency} {item.unitPrice.toLocaleString('en-IN')}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {item.currency} {(item.quantity * item.unitPrice).toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-full max-w-xs">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{calculateSubtotal().toLocaleString('en-IN')}</span>
              </div>
              {invoiceData.tax.taxRate > 0 && (
                <div className="flex justify-between">
                  <span>Tax ({invoiceData.tax.taxRate}%):</span>
                  <span>₹{calculateTax().toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>₹{calculateTotal().toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        <div className="border-t pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {invoiceData.notesAndTerms.thankYouNote && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Thank You Note</h4>
                  <p className="text-gray-700">{invoiceData.notesAndTerms.thankYouNote}</p>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Terms & Conditions</h4>
              <div className="space-y-2 text-sm text-gray-700">
                {invoiceData.notesAndTerms.paymentTerms && (
                  <p><span className="font-medium">Payment Terms:</span> {invoiceData.notesAndTerms.paymentTerms}</p>
                )}
                {invoiceData.notesAndTerms.lateFeePolicy && (
                  <p><span className="font-medium">Late Fee Policy:</span> {invoiceData.notesAndTerms.lateFeePolicy}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
