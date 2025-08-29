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
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className={`space-y-10 text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 rounded-full px-5 py-2.5 border border-slate-200">
              <Star className="h-4 w-4 text-slate-600" />
              <span className="text-sm font-medium">Premium Design Templates</span>
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Crafting Digital</span>
                <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">Excellence</span>
                <span className="block text-gray-700">Since 2020</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Transform your vision into stunning reality with our premium collection of 
                <span className="font-semibold text-gray-800"> modern, responsive web design templates</span>. 
                Built for performance, designed for conversion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <LoadingButton
                loading={loading === '/products'}
                onClick={() => handleNavigation('/products')}
                className="group bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Explore Templates
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </LoadingButton>
              
              <Button
                variant="outline"
                className="group bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Play className="mr-3 h-5 w-5 text-gray-600" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10">
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="bg-slate-100 rounded-xl p-3">
                  <Shield className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bank-Level Security</p>
                  <p className="text-gray-600 text-sm">SSL & PCI Compliant</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="bg-slate-100 rounded-xl p-3">
                  <Zap className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lightning Fast</p>
                  <p className="text-gray-600 text-sm">Instant downloads</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="bg-slate-100 rounded-xl p-3">
                  <Star className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Premium Quality</p>
                  <p className="text-gray-600 text-sm">5-star rated designs</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-white w-full h-96 md:h-[550px] rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-center p-12">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-slate-200 to-slate-300 border border-gray-300 rounded-2xl w-72 h-72 mx-auto flex items-center justify-center">
                      <div className="text-slate-600 text-lg font-medium">Live Demo Preview</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 rounded-2xl" />
                  </div>
                  <p className="mt-6 text-gray-600 font-medium">Premium Product Showcase</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-200/50 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-slate-300/40 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Premium Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
