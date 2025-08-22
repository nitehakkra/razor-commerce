import React from 'react';
import { Minus, Plus, X, ArrowLeft, ShoppingBag, CreditCard, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  // Razorpay integration will be added here
  const handleCheckout = () => {
    // For now, show a placeholder message
    alert('Razorpay integration requires backend setup. Please connect to Supabase to enable secure payments.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-responsive">
            <div className="max-w-2xl mx-auto text-center space-y-8 py-16">
              <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-display font-bold">Your Cart is Empty</h1>
                <p className="text-muted-foreground">
                  Looks like you haven't added any items to your cart yet. 
                  Start shopping to build your order!
                </p>
              </div>

              <Link to="/products">
                <Button className="btn-hero">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-responsive">
          {/* Page Header */}
          <div className="mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl md:text-4xl font-display font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground">Review your items and proceed to checkout</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="card-elegant">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 md:w-32 aspect-square overflow-hidden rounded-lg bg-muted flex-shrink-0">
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
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                            <Link to={`/product/${item.id}`}>
                              <h3 className="font-semibold text-base md:text-lg hover:text-accent transition-colors line-clamp-2">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive shrink-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center justify-between sm:justify-start sm:space-x-3">
                            <span className="text-sm text-muted-foreground">Quantity:</span>
                            <div className="flex items-center border border-border rounded-md">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>

                          <div className="text-right sm:text-left">
                            <p className="text-lg md:text-xl font-bold">
                              {formatCurrency(item.price * item.quantity)}
                            </p>
                            <p className="text-sm text-muted-foreground">
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
              <div className="flex justify-end pt-4">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="text-destructive hover:text-destructive hover:border-destructive"
                >
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-4 md:space-y-6">
              <Card className="card-elegant lg:sticky lg:top-24">
                <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-semibold">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>
                        {shippingCost === 0 ? (
                          <Badge variant="secondary" className="text-xs">Free</Badge>
                        ) : (
                          formatCurrency(shippingCost)
                        )}
                      </span>
                    </div>
                    {total < 500 && (
                      <p className="text-xs text-muted-foreground">
                        Add {formatCurrency(500 - total)} more for free shipping
                      </p>
                    )}
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{formatCurrency(finalTotal)}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-hero h-12"
                    onClick={handleCheckout}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>

                  {/* Trust Indicators */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="text-center text-xs text-muted-foreground">
                      Secure checkout powered by Razorpay
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        256-bit SSL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PCI DSS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Secure
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Info */}
              <Card className="card-elegant">
                <CardContent className="p-4 md:p-6">
                  <h4 className="font-semibold mb-3">Delivery Information</h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• Instant download after purchase</p>
                    <p>• No shipping required - digital delivery</p>
                    <p>• Lifetime access to downloads</p>
                    <p>• Real-time order tracking</p>
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