import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, FileText, ArrowLeft, Package, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { formatCurrency } from '@/lib/utils';
import { COMPANY_DETAILS } from '@/lib/invoice-utils';

interface OrderSummary {
  orderId: string;
  invoiceId: string;
  total: number;
  paymentId: string;
  customerEmail: string;
  customerName: string;
  paymentMethod?: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  orderDate: string;
  emailSent: boolean;
}

const OrderConfirmation: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderData, setOrderData] = useState<OrderSummary | null>(null);
  const [loading, setLoading] = useState(true);

  // Get order details from URL parameters (in real app, this would come from API/database)
  useEffect(() => {
    const orderId = searchParams.get('orderId');
    const paymentId = searchParams.get('paymentId');
    const paymentMethod = searchParams.get('paymentMethod');
    const total = searchParams.get('total');
    const customerEmail = searchParams.get('email');
    const customerName = searchParams.get('name') || 'Valued Customer';

    if (orderId && total && (paymentId || paymentMethod === 'manual')) {
      // In production, you'd fetch real order data from your backend
      setOrderData({
        orderId,
        invoiceId: `INV-${orderId}`,
        total: parseFloat(total),
        paymentId: paymentId || `MANUAL_${orderId}`,
        customerEmail: customerEmail || '',
        customerName,
        paymentMethod: paymentMethod || 'card',
        items: [
          { name: 'Premium UI Template Bundle', quantity: 1, price: parseFloat(total) }
        ], // This would come from actual order data
        orderDate: new Date().toISOString(),
        emailSent: true
      });
    }
    
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Processing your order...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header />
        <main className="py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-600 text-4xl">⚠</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the order details. Please check your email for confirmation.</p>
            <Link to="/products">
              <Button className="btn-hero">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="py-8 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-green-600 to-slate-900 bg-clip-text text-transparent leading-tight mb-4">
              {orderData.paymentMethod === 'manual' ? 'Order Placed!' : 'Order Confirmed!'}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              {orderData.paymentMethod === 'manual' ? 
                `Thank you ${orderData.customerName}! Your order has been placed. Please check your email to complete the payment manually.` :
                `Thank you ${orderData.customerName}! Your payment has been processed successfully and your order is being prepared.`
              }
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Order Summary Card */}
              <Card className="bg-white rounded-3xl shadow-2xl border border-gray-200/50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                      Confirmed
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Order ID</p>
                        <p className="font-mono text-gray-900">{orderData.orderId}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Invoice ID</p>
                        <p className="font-mono text-gray-900">{orderData.invoiceId}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Order Date</p>
                        <p className="text-gray-900">{new Date(orderData.orderDate).toLocaleDateString('en-IN')}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Payment ID</p>
                        <p className="font-mono text-gray-900">{orderData.paymentId}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Customer Email</p>
                        <p className="text-gray-900">{orderData.customerEmail}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Amount</p>
                        <p className="text-2xl font-bold text-green-600">{formatCurrency(orderData.total)}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Items */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Items Purchased</h3>
                    {orderData.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <Package className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">{formatCurrency(item.price)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What's Next */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl border border-blue-200/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What happens next?</h2>
                  
                  {orderData.paymentMethod === 'manual' ? (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Check Your Email</h3>
                          <p className="text-gray-600">We've sent you an invoice with payment instructions and bank details to complete your payment.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Complete Payment</h3>
                          <p className="text-gray-600">Make the payment using bank transfer, UPI, or other methods mentioned in the invoice.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Order Processing</h3>
                          <p className="text-gray-600">Once we confirm your payment, your order will be processed and download links will be shared.</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-center text-amber-800 mb-2">
                          <Mail className="mr-2 h-4 w-4" />
                          <span className="font-medium">Payment Pending</span>
                        </div>
                        <p className="text-amber-700 text-sm">Please complete your payment using the instructions sent to your email. Contact support if you need assistance.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Order Processing</h3>
                          <p className="text-gray-600">Your order is being processed and digital products are being prepared for download.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Email Confirmation</h3>
                          <p className="text-gray-600">
                            {orderData.emailSent ? 
                              'Confirmation email with invoice has been sent to your email address.' :
                              'Confirmation email with invoice will be sent shortly to your email address.'
                            }
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Download Access</h3>
                          <p className="text-gray-600">You'll receive download links and access instructions for your purchased templates.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-6">
              
              {/* Quick Actions */}
              <Card className="bg-white rounded-3xl shadow-2xl border border-gray-200/50">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  
                  <Button className="w-full btn-hero" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Download Files
                    <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-800">Soon</Badge>
                  </Button>
                  
                  <Button variant="outline" className="w-full" disabled>
                    <FileText className="mr-2 h-4 w-4" />
                    View Invoice
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Support Info */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl border border-purple-200/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-purple-600" />
                    Need Help?
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600">
                      <strong>Email:</strong> <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-purple-600 hover:underline">{COMPANY_DETAILS.contact.email}</a>
                    </p>
                    <p className="text-gray-600">
                      <strong>Phone:</strong> <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="text-purple-600 hover:underline">{COMPANY_DETAILS.contact.phone}</a>
                    </p>
                    <p className="text-gray-600">
                      <strong>Support Hours:</strong> Mon-Fri, 9 AM - 6 PM IST
                    </p>
                  </div>

                  <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                    <div className="flex items-center text-purple-800">
                      <Clock className="mr-2 h-4 w-4" />
                      <span className="font-medium">Average Response Time: 2-4 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Continue Shopping */}
              <Card className="bg-white rounded-3xl shadow-2xl border border-gray-200/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Continue Shopping</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore more premium templates and UI kits to build amazing projects.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Browse Templates
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
