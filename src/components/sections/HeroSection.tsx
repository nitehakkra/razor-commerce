import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingButton } from '@/components/ui/loading';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = (path: string) => {
    setLoading(path);
    setTimeout(() => {
      navigate(path);
      setLoading(null);
    }, 300);
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-white">
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-8 text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 border border-blue-100">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Premium Design Templates</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                <span className="block">Crafting Digital</span>
                <span className="block text-blue-600">Excellence</span>
                <span className="block">Since 2020</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Transform your vision into stunning reality with our premium collection of 
                <span className="font-semibold"> modern, responsive web design templates</span>. 
                Built for performance, designed for conversion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <LoadingButton
                loading={loading === '/products'}
                onClick={() => handleNavigation('/products')}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300"
              >
                <span className="flex items-center">
                  Explore Templates
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </LoadingButton>
              
              <Button
                variant="outline"
                className="group bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4 rounded-lg font-bold transition-all duration-300"
              >
                <Play className="mr-3 h-5 w-5 text-slate-600" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="bg-green-100 rounded-full p-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Bank-Level Security</p>
                  <p className="text-slate-500 text-sm">SSL & PCI Compliant</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="bg-blue-100 rounded-full p-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Lightning Fast</p>
                  <p className="text-slate-500 text-sm">Instant downloads</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="bg-yellow-100 rounded-full p-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Premium Quality</p>
                  <p className="text-slate-500 text-sm">5-star rated designs</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-8 border-white">
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 w-full h-96 md:h-[500px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 mx-auto" />
                  <p className="mt-4 text-slate-500">Premium Product Showcase</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full z-0 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/10 rounded-full z-0 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
