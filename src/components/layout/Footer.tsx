import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import brandLogo from '@/assets/brand-logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={brandLogo} 
                alt="Premium Store" 
                className="w-8 h-8 object-contain brightness-0 invert"
              />
              <span className="font-display font-bold text-xl text-accent">
                PremiumStore
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium products and luxury electronics. 
              We deliver quality, excellence, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                All Products
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:maklesurrahaman39@outlook.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors block">
                    maklesurrahaman39@outlook.com
                  </a>
                  <a href="mailto:alexbotix@outlook.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors block">
                    alexbotix@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+918370030184" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 8370030184
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Available 24/7 for Support
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to get special offers, updates, and exclusive deals.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 PremiumStore. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>Secure payments powered by</span>
              <span className="font-semibold text-accent">Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;