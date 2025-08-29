import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductHeroSectionProps {
  title: string;
  description: string;
  price: number; // in INR
  imageUrl: string;
}

const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({ title, description, price, imageUrl }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">{description}</p>
            <div className="flex items-center mb-8">
              <span className="text-3xl font-bold text-gray-900">₹{price.toLocaleString('en-IN')}</span>
              <span className="ml-4 text-green-600 font-medium">Inclusive of all taxes</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Add to Cart
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
              <img 
                src={imageUrl} 
                alt={title} 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
