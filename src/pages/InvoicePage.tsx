import React from 'react';
import InvoiceGenerator from '@/components/invoice/InvoiceGenerator';

const InvoicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <InvoiceGenerator />
    </div>
  );
};

export default InvoicePage;
