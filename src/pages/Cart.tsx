
import React from 'react';
import { Minus, Plus, X, ArrowLeft, ShoppingBag, CreditCard, Zap, Shield, Clock, Gift, Truck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { openRazorpayCheckout } from '@/lib/razorpay';
import { toast } from 'sonner';
import { generateInvoiceId, generateOrderNumber } from '@/lib/invoice-utils';
import { sendOrderConfirmationEmail, EmailOrderDetails } from '@/lib/email-service';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (items.length === 0) return;

    // Amount is in INR; Razorpay expects paise
    const shippingCost = total >= 500 ? 0 : 50;
    const finalTotal = total + shippingCost;
    const amountInPaise = Math.round(finalTotal * 100);

    try {
      await openRazorpayCheckout({
        amountInPaise,
        currency: 'INR',
        name: 'Razor Commerce - Design Templates',
        description: `Payment for ${items.reduce((sum, i) => sum + i.quantity, 0)} item(s)`,
        notes: {
          cart_summary: items.map(i => `${i.name} x${i.quantity}`).join(', ').slice(0, 250),
        },
        onSuccess: async (response) => {
          console.log('Razorpay success:', response);
          toast.success('Payment successful! Processing your order...');

          try {
            // Generate order and invoice IDs
            const orderId = generateOrderNumber();
            const invoiceId = generateInvoiceId();
            const orderDate = new Date();

            // Prepare order details for email
            const orderDetails: EmailOrderDetails = {
              orderId,
              invoiceId,
              orderDate,
              items: items.map(item => ({
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                category: item.category
              })),
              subtotal: total,
              shipping: shippingCost,
              total: finalTotal,
              paymentId: response.razorpay_payment_id,
              paymentMethod: 'Razorpay',
              customerName: response.prefill?.name || 'Valued Customer',
              customerEmail: response.prefill?.email || 'customer@example.com',
              customer: {
                name: response.prefill?.name || 'Valued Customer',
                email: response.prefill?.email || 'customer@example.com',
                phone: response.prefill?.contact,
                address: {
                  line1: 'Customer Address',
                  city: 'City',
                  state: 'State',
                  pincode: '000000',
                  country: 'India'
                }
              }
            };

            // Send order confirmation email with invoice
            const emailSent = await sendOrderConfirmationEmail(orderDetails);

            if (emailSent) {
              toast.success('Order confirmation email sent successfully!');
            } else {
              toast.warning('Order processed but email failed. Contact support if needed.');
            }

            // Clear cart
            clearCart();

            // Navigate to order confirmation page with order details
            navigate(`/order-confirmation?orderId=${orderId}&paymentId=${response.razorpay_payment_id}&total=${finalTotal}&email=${orderDetails.customerEmail}&name=${orderDetails.customerName}`);

          } catch (emailError) {
            console.error('Email sending failed:', emailError);
            toast.warning('Payment successful but email failed. Contact support if needed.');
            clearCart();
          }
        },
        onDismiss: () => {
          toast.message('Checkout closed');
        },
      });
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || 'Unable to start checkout');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header />
        
        <main className="py-8 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 py-12">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Your Cart is Empty
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                  Discover our premium collection of web design templates and UI kits. 
                  Start building something amazing today!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link to="/products">
                  <Button className="btn-hero px-6 py-2">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Browse Templates
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="px-6 py-2 hover:bg-slate-50">
                    <Heart className="mr-2 h-4 w-4" />
                    View Bestsellers
                  </Button>
                </Link>
              </div>

              {/* Quick Features */}
              <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Instant Download</h3>
                  <p className="text-gray-600 text-xs">Get your templates immediately after purchase</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Lifetime Updates</h3>
                  <p className="text-gray-600 text-xs">Free updates and improvements forever</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Premium Support</h3>
                  <p className="text-gray-600 text-xs">Get help from our expert team</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const shippingCost = total >= 500 ? 0 : 50;
  const finalTotal = total + shippingCost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <Link 
              to="/products" 
              className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors mb-6 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                Shopping Cart
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Review your selected templates and proceed to secure checkout
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <Card key={item.id} className="bg-white rounded-xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 md:w-32 aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div className="space-y-1 min-w-0 flex-1">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs font-medium">
                              {item.category}
                            </Badge>
                            <Link to={`/product/${item.id}`}>
                              <h3 className="font-semibold text-base md:text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 hover:bg-red-50 shrink-0 w-8 h-8 rounded-full transition-all duration-200"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">Quantity:</span>
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="px-3 py-1 text-sm font-semibold min-w-[2.5rem] text-center bg-white border-x border-gray-200">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-lg md:text-xl font-bold text-gray-900 leading-none">
                              {formatCurrency(item.price * item.quantity)}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {formatCurrency(item.price)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-between items-center pt-6">
                <div className="text-sm text-gray-600">
                  {items.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
                </div>
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 hover:border-red-300 hover:bg-red-50 border-2 px-6 py-2 font-medium"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-white rounded-xl shadow-lg border border-gray-200/50 lg:sticky lg:top-24">
                <CardContent className="p-4 md:p-6 space-y-4">
                  <div className="text-center pb-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Summary</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span className="text-base font-semibold text-gray-900">{formatCurrency(total)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Shipping</span>
                      <span className="text-sm font-medium">
                        {shippingCost === 0 ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs px-2 py-1">Free</Badge>
                        ) : (
                          <span className="text-gray-900">{formatCurrency(shippingCost)}</span>
                        )}
                      </span>
                    </div>
                    {total < 500 && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-xs text-blue-800 font-medium text-center">
                          Add {formatCurrency(500 - total)} more for free shipping
                        </p>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-semibold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">{formatCurrency(finalTotal)}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={handleCheckout}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>

                  {/* Trust Indicators */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <img 
                          src="https://razorpay.com/assets/razorpay-logo.svg" 
                          alt="Razorpay" 
                          className="h-5"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <span className="text-xs font-medium text-gray-700">Powered by Razorpay</span>
                      </div>
                      
                      {/* Security Badges */}
                      <div className="flex flex-wrap justify-center gap-2 mb-3">
                        <div className="flex items-center gap-1 bg-green-50 border border-green-200 rounded-md px-2 py-1">
                          <Shield className="w-3 h-3 text-green-600" />
                          <span className="text-xs font-medium text-green-800">256-bit SSL</span>
                        </div>
                        <div className="flex items-center gap-1 bg-blue-50 border border-blue-200 rounded-md px-2 py-1">
                          <Shield className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-medium text-blue-800">PCI DSS</span>
                        </div>
                        <div className="flex items-center gap-1 bg-purple-50 border border-purple-200 rounded-md px-2 py-1">
                          <Shield className="w-3 h-3 text-purple-600" />
                          <span className="text-xs font-medium text-purple-800">Secure</span>
                        </div>
                      </div>

                      {/* Payment Methods */}
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-2">Accepted Payment Methods</p>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                          {/* Visa */}
                          <div className="bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center">
                            <svg className="h-4 w-6" viewBox="0 0 24 16" fill="none">
                              <rect width="24" height="16" fill="white" rx="2"/>
                              <path d="M8.5 3L6.8 13h-1.6L6.9 3h1.6zm4.8 0l-1.2 6.8c-.1.4-.4.7-.8.7s-.7-.3-.6-.7L11.9 3h1.4zm4.2 0c.4 0 .8.3.8.7L17.1 13h-1.4l.8-4.5c.1-.4.4-.7.8-.7h1.2zm-8.4 0L7.9 13H6.5l1.2-10h1.4z" fill="#1A1F71"/>
                            </svg>
                          </div>
                          {/* Mastercard */}
                          <div className="bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center">
                            <svg className="h-4 w-6" viewBox="0 0 24 16" fill="none">
                              <rect width="24" height="16" fill="white" rx="2"/>
                              <circle cx="9" cy="8" r="4" fill="#EB001B"/>
                              <circle cx="15" cy="8" r="4" fill="#F79E1B"/>
                              <path d="M12 4.5c1.5 1.2 2.5 3 2.5 5s-1 3.8-2.5 5c-1.5-1.2-2.5-3-2.5-5s1-3.8 2.5-5z" fill="#FF5F00"/>
                            </svg>
                          </div>
                          {/* RuPay */}
                          <div className="bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center">
                            <svg className="h-4 w-6" viewBox="0 0 24 16" fill="none">
                              <rect width="24" height="16" fill="white" rx="2"/>
                              <path d="M3 6h6v4H3V6zm12 0h6v4h-6V6z" fill="#097939"/>
                              <path d="M10.5 6h3v4h-3V6z" fill="#FF6600"/>
                            </svg>
                          </div>
                          {/* UPI */}
                          <div className="bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center">
                            <span className="text-xs font-bold text-orange-600">UPI</span>
                          </div>
                          {/* Net Banking */}
                          <div className="bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center">
                            <span className="text-xs font-medium text-blue-600">Net Banking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200/50 shadow-md">
                <CardContent className="p-4 md:p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">What You Get</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Instant download after purchase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Clock className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Lifetime access & updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Shield className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Premium support included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                        <Gift className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Commercial usage rights</span>
                    </div>
                  </div>
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

export default Cart;
