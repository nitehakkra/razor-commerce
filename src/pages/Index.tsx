import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CustomDesignServices from '@/components/sections/CustomDesignServices';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';
import ParticleBackground from '@/components/effects/ParticleBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'transparent' }}>
      <ParticleBackground />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturedProducts />
          <CustomDesignServices />
          <WhyChooseUs />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
