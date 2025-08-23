
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-products');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured-products" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-600/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-responsive relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center space-y-6 mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
            ✨ Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Premium <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Design Templates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium web and UI design templates,
            <span className="text-blue-600 font-semibold"> meticulously crafted</span> for exceptional quality and modern aesthetics.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300/50 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                transitionDelay: `${index * 0.1}s`
              }}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/product/${product.id}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/product/${product.id}`);
                }
              }}
            >
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Hover overlay with actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Premium badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 shadow-lg">
                    PREMIUM
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm font-semibold text-gray-700 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurrency(product.price)}
                    </p>
                    <p className="text-xs text-green-600 font-medium flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Lifetime updates
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" className="border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors" aria-label={`View details for ${product.name}`}>
                        Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <Link to="/products">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105" aria-label="View all templates">
              <span className="relative z-10 flex items-center">
                Explore All Templates
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
