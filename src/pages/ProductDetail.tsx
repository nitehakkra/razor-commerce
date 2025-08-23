import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, ShoppingCart, Eye, Check, Package, Download, FileText, Users, Globe, Award, Truck, Plus, ShoppingBag, Heart, Share2, Shield, Zap, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = id ? getProductById(id) : null;
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'changelog'>('description');
  const [selectedLicense, setSelectedLicense] = useState<'standard' | 'multisite' | 'extended'>('standard');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const selectedPrice = product?.licenseOptions ? product.licenseOptions[selectedLicense] : product?.price || 0;

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

  const getCurrentPrice = () => {
    if (!product.licenseOptions) return product.price;
    return product.licenseOptions[selectedLicense];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FreshCart Style Product Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details - FreshCart Style */}
            <div className="space-y-6">
              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating}/5 ({product.reviewCount} reviews)</span>
              </div>
              
              {/* License Options - FreshCart Style */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-base font-semibold mb-4">License Options</h3>
                <div className="space-y-3">
                  {product.licenseOptions && (
                    <>
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedLicense === 'standard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedLicense('standard')}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Standard</h4>
                            <p className="text-sm text-gray-600">Single Site</p>
                          </div>
                          <span className="text-lg font-bold">{formatCurrency(product.licenseOptions.standard)}</span>
                        </div>
                      </div>
                      
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedLicense === 'multisite' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedLicense('multisite')}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Multisite</h4>
                            <p className="text-sm text-gray-600">Unlimited sites</p>
                          </div>
                          <span className="text-lg font-bold">{formatCurrency(product.licenseOptions.multisite)}</span>
                        </div>
                      </div>
                      
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedLicense === 'extended' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedLicense('extended')}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Extended</h4>
                            <p className="text-sm text-gray-600">For paying users</p>
                          </div>
                          <span className="text-lg font-bold">{formatCurrency(product.licenseOptions.extended)}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100 shadow-lg">
                <div className="space-y-3">
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(selectedPrice)}
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-500 text-white border-0 shadow-sm font-medium px-3 py-1 rounded-full text-sm">
                      <Truck className="w-3 h-3 mr-1 inline" />
                      Free Shipping
                    </span>
                    <span className="text-slate-600 text-sm">on orders above ₹500</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg">
                <p className="text-base text-slate-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons - FreshCart Style */}
              <div className="flex space-x-3">
                <Button
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium"
                  onClick={() => {
                    addItem(product);
                    setIsAddedToCart(true);
                    setTimeout(() => setIsAddedToCart(false), 2000);
                  }}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to cart
                    </>
                  )}
                </Button>
                
                {product.livePreviewUrl && (
                  <Button
                    variant="outline"
                    className="px-8 py-3 rounded-lg font-medium border-gray-300"
                    asChild
                  >
                    <a href={product.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-5 w-5" />
                      Live preview
                    </a>
                  </Button>
                )}
              </div>

              {/* Premium Trust Indicators */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200/60 shadow-lg">
                <h3 className="text-base font-bold text-slate-900 mb-6 text-center">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-bold text-slate-900 mb-1">Secure Payment</p>
                    <p className="text-sm text-slate-600">Protected by Razorpay</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-bold text-slate-900 mb-1">Instant Delivery</p>
                    <p className="text-sm text-slate-600">Download immediately</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <RotateCcw className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-bold text-slate-900 mb-1">Quality Assured</p>
                    <p className="text-sm text-slate-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Product Details Section */}
          <div className="space-y-12 mt-20">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Product Details
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Product Specifications</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-slate-200/60">
                    <span className="text-slate-600 font-medium">Category</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full text-sm">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-slate-200/60">
                    <span className="text-slate-600 font-medium">Availability</span>
                    <span className={`font-bold px-4 py-2 rounded-full text-sm ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-slate-200/60">
                    <span className="text-slate-600 font-medium">Warranty</span>
                    <span className="font-bold text-slate-900 bg-amber-100 px-3 py-1 rounded-full text-sm">1 Year</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-slate-600 font-medium">Brand</span>
                    <span className="font-bold text-slate-900 bg-blue-100 px-3 py-1 rounded-full text-sm">Premium Brand</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Shipping & Returns</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-blue-600" />
                      Delivery Information
                    </h4>
                    <ul className="text-slate-700 space-y-3">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        Instant download after purchase
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        No shipping required - digital delivery
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        Lifetime access to downloads
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        Real-time order tracking
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <RotateCcw className="w-4 h-4 mr-2 text-purple-600" />
                      Return Policy
                    </h4>
                    <ul className="text-slate-700 space-y-3">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        30-day return policy
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        Free returns on defective items
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        Original packaging required
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                        Hassle-free exchange process
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;