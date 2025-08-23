
import React from 'react';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';
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

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Premium <span className="text-gradient">Templates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium web and UI design templates,
            crafted for exceptional quality and modern aesthetics.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="card-elegant group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              <div className="relative aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-accent">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">
                      {formatCurrency(product.price)}
                    </p>
                    <p className="text-xs text-muted-foreground">Free updates included</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" aria-label={`View details for ${product.name}`}>
                        View Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="h-9 px-3 bg-accent text-accent-foreground hover:bg-accent-glow shadow-md hover:shadow-lg transition-shadow"
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

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button className="btn-hero group" aria-label="View all templates">
              View All Templates
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
