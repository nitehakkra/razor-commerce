
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Loading } from '@/components/ui/loading';
import brandLogo from '@/assets/brand-logo.png';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    setLoading(path);
    setTimeout(() => {
      navigate(path);
      setMobileMenuOpen(false);
      setLoading(null);
    }, 300);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo Only */}
          <Link to="/" className="flex items-center">
            <img 
              src={brandLogo} 
              alt="Design Studio" 
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-sm lg:text-base font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                isActiveRoute('/') ? 'text-accent' : 'text-foreground'
              }`}
              disabled={loading === '/'}
            >
              {loading === '/' && <Loading size="sm" />}
              Home
            </button>
            <button
              onClick={() => handleNavigation('/products')}
              className={`text-sm lg:text-base font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                isActiveRoute('/products') ? 'text-accent' : 'text-foreground'
              }`}
              disabled={loading === '/products'}
            >
              {loading === '/products' && <Loading size="sm" />}
              Templates
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`text-sm lg:text-base font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                isActiveRoute('/contact') ? 'text-accent' : 'text-foreground'
              }`}
              disabled={loading === '/contact'}
            >
              {loading === '/contact' && <Loading size="sm" />}
              Contact
            </button>
          </nav>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-2 max-w-sm w-full">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                className="pl-10 bg-muted/50 border-border focus:bg-background"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <Search className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            {/* Cart */}
            <button
              onClick={() => handleNavigation('/cart')}
              className="relative p-2 hover:bg-accent/10 rounded-lg transition-colors"
              disabled={loading === '/cart'}
            >
              {loading === '/cart' ? (
                <Loading size="sm" />
              ) : (
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              )}
              {itemCount > 0 && (
                <Badge
                  variant="default"
                  className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground"
                >
                  {itemCount}
                </Badge>
              )}
            </button>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleNavigation('/')}
                  className={`text-sm font-medium transition-colors hover:text-accent px-4 py-3 rounded-md flex items-center gap-2 ${
                    isActiveRoute('/') ? 'text-accent bg-accent/10' : 'text-foreground'
                  }`}
                  disabled={loading === '/'}
                >
                  {loading === '/' && <Loading size="sm" />}
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('/products')}
                  className={`text-sm font-medium transition-colors hover:text-accent px-4 py-3 rounded-md flex items-center gap-2 ${
                    isActiveRoute('/products') ? 'text-accent bg-accent/10' : 'text-foreground'
                  }`}
                  disabled={loading === '/products'}
                >
                  {loading === '/products' && <Loading size="sm" />}
                  Templates
                </button>
                <button
                  onClick={() => handleNavigation('/contact')}
                  className={`text-sm font-medium transition-colors hover:text-accent px-4 py-3 rounded-md flex items-center gap-2 ${
                    isActiveRoute('/contact') ? 'text-accent bg-accent/10' : 'text-foreground'
                  }`}
                  disabled={loading === '/contact'}
                >
                  {loading === '/contact' && <Loading size="sm" />}
                  Contact
                </button>
                
                {/* Mobile Search */}
                <div className="px-4 pt-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search templates..."
                      className="pl-10 bg-muted/50 border-border focus:bg-background"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
