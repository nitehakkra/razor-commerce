import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Star, Heart, Eye, ShoppingCart, SlidersHorizontal } from 'lucide-react';
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
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [isVisible, setIsVisible] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-600/5 rounded-full blur-3xl" />
      </div>
      
      <main className="section-padding relative z-10">
        <div className="container-responsive">
          {/* Enhanced Page Header */}
          <div className={`text-center space-y-4 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-3 bg-slate-100 text-slate-700 px-4 py-1.5 text-xs font-medium border border-slate-200">
              Premium Collection
            </Badge>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Design <span className="text-slate-700">Templates</span>
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Explore our complete collection of premium design templates, 
              carefully curated for quality and modern aesthetics.
            </p>
          </div>

          {/* Enhanced Filters */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 space-y-6 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Search and Controls Row */}
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-white/90 border-gray-200 rounded-xl shadow-sm focus:shadow-md transition-shadow"
                />
              </div>

              {/* Sort and View Controls */}
              <div className="flex gap-3 shrink-0">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
                  className="h-12 px-4 bg-white/90 border border-gray-200 rounded-xl shadow-sm focus:shadow-md transition-shadow text-sm font-medium"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>
                
                <div className="hidden sm:flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="h-12 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Grid className="h-5 w-5" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="h-12 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <List className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`h-9 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category 
                      ? "bg-slate-800 text-white hover:bg-slate-700" 
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Results Count */}
          <div className={`mb-6 flex items-center justify-between transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <p className="text-sm font-medium text-gray-600">
              Showing <span className="text-gray-900 font-semibold">{filteredProducts.length}</span> of <span className="text-gray-900 font-semibold">{products.length}</span> templates
            </p>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Advanced filters</span>
            </div>
          </div>

          {/* Products Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className={`group cursor-pointer overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${0.6 + index * 0.05}s`
                  }}
                  onClick={() => window.location.href = `/product/${product.id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Premium badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded">
                        PREMIUM
                      </Badge>
                    </div>
                    
                    {/* Star rating overlay */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-semibold text-gray-700">{product.rating || '4.5'}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-5 space-y-4">
                    <div className="space-y-2">
                      <Badge className="bg-gray-100 text-gray-600 text-xs font-normal px-2 py-1 rounded">
                        {product.category}
                      </Badge>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-bold text-base leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          {formatCurrency(product.price)}
                        </p>
                        <p className="text-xs text-green-600 font-medium flex items-center mt-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                          Instant download
                        </p>
                      </div>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          addItem(product);
                        }}
                        className="bg-slate-800 hover:bg-slate-900 text-white rounded px-3 py-1.5 text-sm font-medium transition-colors duration-200"
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
            <div className="text-center py-20 px-4">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No templates found</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We couldn't find any templates matching your criteria.
                  <br />Try adjusting your search or filter settings.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded font-medium transition-colors duration-200"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;