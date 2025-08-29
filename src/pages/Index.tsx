import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CustomDesignServices from '@/components/sections/CustomDesignServices';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';
import ParticleBackground from '@/components/effects/ParticleBackground';
import LiveWallpaper from '@/components/effects/LiveWallpaper';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-screen overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* Advanced Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"></div>
        <LiveWallpaper />
        <ParticleBackground />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>
      
      {/* Glass Morphism Overlay */}
      <div className="relative z-10 min-h-screen backdrop-blur-sm">
        <div className="flex flex-col min-h-screen max-h-screen overflow-y-auto" ref={mainRef}>
          <Header />
          <main className="flex-grow relative">
            {/* Floating Orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
              <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
            </div>
            
            <HeroSection />
            <div className="relative z-10">
              <FeaturedProducts />
              <CustomDesignServices />
              <WhyChooseUs />
              <Testimonials />
              <Newsletter />
            </div>
          </main>
          <Footer />
        </div>
      </div>
      
      {/* Loading Screen */}
      <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-400 rounded-full animate-spin mx-auto" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }}></div>
          </div>
          <h2 className="text-white text-xl font-semibold mb-2">Razor Commerce</h2>
          <p className="text-white/70">Crafting Digital Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
