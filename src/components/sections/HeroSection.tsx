
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Zap, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingButton } from '@/components/ui/loading';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigation = (path: string) => {
    setLoading(path);
    setTimeout(() => {
      navigate(path);
      setLoading(null);
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Interactive Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_70%)]" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full animate-pulse" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 md:py-20">
          <div className={`space-y-6 md:space-y-8 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge with enhanced animation */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 group">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current animate-pulse" />
              <span className="text-sm md:text-base font-medium text-white group-hover:text-yellow-200 transition-colors">Premium Design Templates</span>
            </div>

            {/* Enhanced Heading with Typewriter Effect */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block animate-fade-in-up">Crafting</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Digital Excellence</span>
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Since 2020</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Transform your vision into stunning reality with our premium collection of 
                <span className="text-blue-300 font-semibold"> modern, responsive web design templates</span>. 
                Built for performance, designed for conversion.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <LoadingButton
                loading={loading === '/products'}
                onClick={() => handleNavigation('/products')}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Explore Templates
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </LoadingButton>
              
              <LoadingButton
                loading={loading === '/contact'}
                onClick={() => handleNavigation('/contact')}
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </LoadingButton>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-4 justify-center lg:justify-start group">
                <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base">Bank-Level Security</p>
                  <p className="text-white/70 text-xs md:text-sm">SSL & PCI Compliant</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center lg:justify-start group">
                <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base">Lightning Fast</p>
                  <p className="text-white/70 text-xs md:text-sm">Instant downloads</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center lg:justify-start group">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base">Premium Quality</p>
                  <p className="text-white/70 text-xs md:text-sm">5-star rated designs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right side - Interactive Stats */}
          <div className={`hidden lg:flex flex-col justify-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</h3>
                <p className="text-white/90 text-sm md:text-base font-medium">Premium Templates</p>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50k+</h3>
                <p className="text-white/90 text-sm md:text-base font-medium">Happy Customers</p>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">4.9★</h3>
                <p className="text-white/90 text-sm md:text-base font-medium">Customer Rating</p>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</h3>
                <p className="text-white/90 text-sm md:text-base font-medium">Expert Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-pulse" />
          </div>
          <ChevronDown className="h-6 w-6 text-white/60 mx-auto mt-2 group-hover:text-white/80 transition-colors animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
