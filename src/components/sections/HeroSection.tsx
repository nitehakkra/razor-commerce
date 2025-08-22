import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium products showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="text-sm font-medium text-primary-foreground">Premium Quality Guaranteed</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                Discover
                <span className="block text-gradient">Premium Products</span>
                <span className="block">at Unbeatable Prices</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                Experience luxury and quality with our curated collection of premium electronics, 
                gadgets, and lifestyle products. Fast shipping, secure payments, and exceptional service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button className="btn-hero group">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20">
                View Collection
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="bg-accent/20 rounded-full p-2">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">Secure Payments</p>
                  <p className="text-primary-foreground/60 text-xs">Protected by Razorpay</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="bg-accent/20 rounded-full p-2">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">Fast Delivery</p>
                  <p className="text-primary-foreground/60 text-xs">2-5 business days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="bg-accent/20 rounded-full p-2">
                  <Star className="h-5 w-5 text-accent fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">Premium Quality</p>
                  <p className="text-primary-foreground/60 text-xs">Guaranteed satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Additional visual element or stats */}
          <div className="hidden lg:flex flex-col justify-center space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-accent">500+</h3>
                <p className="text-primary-foreground/80">Premium Products</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-accent">50k+</h3>
                <p className="text-primary-foreground/80">Happy Customers</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-accent">4.9★</h3>
                <p className="text-primary-foreground/80">Customer Rating</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-accent">24/7</h3>
                <p className="text-primary-foreground/80">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;