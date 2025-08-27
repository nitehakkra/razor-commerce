import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import brandLogo from '@/assets/brand-logo.png';

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
                alt="DesignCraft" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-xl text-accent">
                DesignCraft
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium web design templates and UI/UX solutions. 
              We deliver modern, responsive designs for your digital success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/designcraftin" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://twitter.com/designcraftin" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.instagram.com/desi.gncraftin/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/designcraftin" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
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
                All Templates
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Terms & Conditions
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
              Subscribe to get new templates, design tips, and exclusive deals.
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

        {/* Payment Methods Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="text-center space-y-6">
            <p className="text-sm text-primary-foreground/80 font-medium">
              Secure payments powered by trusted providers
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {/* Visa */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group w-20 h-12 flex items-center justify-center">
                <img 
                  src="https://www.freepnglogos.com/uploads/verified-by-visa-logo-png-0.png" 
                  alt="Visa" 
                  className="max-h-6 max-w-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
              
              {/* Mastercard */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group w-20 h-12 flex items-center justify-center">
                <img 
                  src="https://www.pngall.com/wp-content/uploads/13/Mastercard-Logo-No-Background.png" 
                  alt="Mastercard" 
                  className="max-h-6 max-w-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
              
              {/* American Express */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group w-20 h-12 flex items-center justify-center">
                <img 
                  src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color-500x281.png" 
                  alt="American Express" 
                  className="max-h-6 max-w-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
              
              {/* Discover */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group w-20 h-12 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" 
                  alt="Discover" 
                  className="max-h-6 max-w-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
              
              {/* RuPay */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group w-20 h-12 flex items-center justify-center">
                <img 
                  src="https://iconape.com/wp-content/png_logo_vector/rupay-logo.png" 
                  alt="RuPay" 
                  className="max-h-6 max-w-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
              
              {/* Razorpay */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group w-20 h-12 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" 
                  alt="Razorpay" 
                  className="max-h-6 max-w-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              2024 DesignCraft. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
              <span> SSL Secured</span>
              <span>•</span>
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;