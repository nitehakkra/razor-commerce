import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Zap, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="btn-hero">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-responsive">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </nav>

          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Gallery Placeholder */}
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg border-2 border-transparent hover:border-accent transition-colors cursor-pointer">
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary">{product.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-accent fill-current' : 'text-muted-foreground'}`} />
                    ))}
                    <span className="text-sm font-medium ml-2">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-4xl font-bold text-foreground">
                  {formatCurrency(product.price)}
                </p>
                <p className="text-muted-foreground">Free shipping on orders above ₹500</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Actions */}
              <div className="flex space-x-4">
                <Button
                  className="btn-hero flex-1"
                  onClick={() => addItem(product)}
                >
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="p-3">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="p-3">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">Protected by Razorpay</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Instant Delivery</p>
                    <p className="text-xs text-muted-foreground">Download immediately</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Quality Assured</p>
                    <p className="text-xs text-muted-foreground">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="space-y-8">
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Product Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Availability</span>
                      <Badge variant={product.inStock ? "default" : "destructive"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Warranty</span>
                      <span className="font-medium">1 Year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Brand</span>
                      <span className="font-medium">Premium Brand</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Shipping & Returns</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Delivery Information</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Instant download after purchase</li>
                        <li>• No shipping required - digital delivery</li>
                        <li>• Lifetime access to downloads</li>
                        <li>• Real-time order tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Return Policy</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• 30-day return policy</li>
                        <li>• Free returns on defective items</li>
                        <li>• Original packaging required</li>
                        <li>• Hassle-free exchange process</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
            <div className="grid gap-6">
              {product.reviews.slice(0, Math.min(9, product.reviews.length)).map((review) => (
                <Card key={review.id} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-accent">
                            {review.userName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{review.userName}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                            {review.verified && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;