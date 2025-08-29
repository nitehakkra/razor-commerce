import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import InvoiceTemplate from './InvoiceTemplate';

const InvoiceGenerator: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState({
    sellerInfo: {
      companyName: 'Your Company Name',
      streetAddress: '123 Business St',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India',
      phoneNumber: '+91 9876543210',
      emailAddress: 'hello@yourcompany.com',
      website: 'www.yourcompany.com',
      logoUrl: ''
    },
    clientInfo: {
      clientName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'India'
    },
    invoiceDetails: {
      invoiceNumber: 'INV-001',
      invoiceDate: new Date().toLocaleDateString('en-IN'),
      paymentDueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    },
    paymentInfo: {
      bankName: '',
      accountHolderName: '',
      accountNumber: '',
      routingCode: '',
      swiftCode: '',
      otherPaymentInstructions: 'Pay via UPI: yourcompany@paytm'
    },
    items: [
      {
        description: 'Website Design',
        quantity: 1,
        unitPrice: 25000,
        currency: '₹'
      }
    ],
    notesAndTerms: {
      thankYouNote: 'Thank you for your business!',
      paymentTerms: 'Net 15 days',
      lateFeePolicy: '2% per month on overdue amounts'
    },
    tax: {
      taxRate: 18,
      applyToTotal: true
    }
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Invoice Generator</h1>
        <div className="flex gap-4">
          <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
            Print Invoice
          </Button>
        </div>
      </div>
      
      <InvoiceTemplate invoiceData={invoiceData} />
    </div>
  );
};

export default InvoiceGenerator;
