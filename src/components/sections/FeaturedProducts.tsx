
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
        <div className={`text-center space-y-8 mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Badge className="mb-4 bg-slate-100 text-slate-700 px-5 py-2 text-sm font-medium border border-slate-200">
            Featured Collection
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Premium <span className="text-gray-700">Design Templates</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium web and UI design templates,
            <span className="font-semibold text-gray-800"> meticulously crafted</span> for exceptional quality and modern aesthetics.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
                  <Badge className="bg-slate-900 text-white text-xs font-medium px-2 py-1">
                    PREMIUM
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gray-100 text-gray-600 text-xs font-normal px-2 py-1 rounded">
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
                  <h3 className="font-bold text-lg leading-tight text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-gray-900">
                      {formatCurrency(product.price)}
                    </p>
                    <p className="text-xs text-gray-600 font-medium flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-1.5"></span>
                      Instant download
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" className="border-gray-300 hover:border-gray-400 hover:text-gray-700 transition-colors" aria-label={`View details for ${product.name}`}>
                        Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="bg-slate-800 hover:bg-slate-900 text-white transition-colors duration-200"
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
            <Button className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" aria-label="View all templates">
              <span className="flex items-center">
                Explore All Templates
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
