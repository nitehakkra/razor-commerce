import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { addItem } = useCart();

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-responsive">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Explore our complete collection of premium products, 
              carefully curated for quality and innovation.
            </p>
          </div>

          {/* Filters */}
          <div className="space-y-4 mb-8">
            {/* Search and View Toggle Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 h-10"
                />
              </div>

              {/* View Mode Toggle - Hidden on mobile, shown on larger screens */}
              <div className="hidden sm:flex gap-2 shrink-0">
                <Button
                  variant={viewMode === 'grid' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-10 px-3"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-10 px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`h-9 px-3 text-xs sm:text-sm ${selectedCategory === category ? "bg-accent text-accent-foreground" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 md:mb-8">
            <p className="text-sm md:text-base text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="card-elegant group cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardContent className="p-3 md:p-4 space-y-3">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold text-sm md:text-base leading-tight group-hover:text-accent transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
                      <p className="text-lg md:text-xl font-bold text-foreground">
                        {formatCurrency(product.price)}
                      </p>
                      <Button
                        size="sm"
                        onClick={() => addItem(product)}
                        className="bg-accent text-accent-foreground hover:bg-accent-glow w-full sm:w-auto h-9 text-xs md:text-sm"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="card-elegant group cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      <div className="w-full md:w-48 aspect-square overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex-1 space-y-3 md:space-y-4">
                        <div className="space-y-2">
                          <Badge variant="secondary" className="text-xs">
                            {product.category}
                          </Badge>
                          <Link to={`/product/${product.id}`}>
                            <h3 className="text-lg md:text-xl font-semibold group-hover:text-accent transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-sm md:text-base text-muted-foreground">
                            {product.description}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <p className="text-xl md:text-2xl font-bold text-foreground">
                            {formatCurrency(product.price)}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
                            <Link to={`/product/${product.id}`} className="w-full sm:w-auto">
                              <Button variant="outline" size="sm" className="w-full sm:w-auto h-9">
                                View Details
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              onClick={() => addItem(product)}
                              className="bg-accent text-accent-foreground hover:bg-accent-glow w-full sm:w-auto h-9"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 md:py-16 px-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">No products found</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="h-10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;