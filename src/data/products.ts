import { Product } from '@/types/product';
import productEarbuds from '@/assets/product-earbuds.jpg';
import productFitnessTracker from '@/assets/product-fitness-tracker.jpg';
import productCameraLens from '@/assets/product-camera-lens.jpg';
import productGamingKeyboard from '@/assets/product-gaming-keyboard.jpg';
import productLaptop from '@/assets/product-laptop.jpg';
import productSecuritySystem from '@/assets/product-security-system.jpg';
import productDrone from '@/assets/product-drone.jpg';
import productSoundSystem from '@/assets/product-sound-system.jpg';
import productSmartTV from '@/assets/product-smart-tv.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Earbuds',
    price: 299,
    description: 'High-quality wireless earbuds with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    image: productEarbuds,
    category: 'Electronics',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    price: 599,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life. Track your health goals effectively.',
    image: productFitnessTracker,
    category: 'Wearables',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 6999,
    description: 'Ultra-wide professional camera lens with superior optical quality. Perfect for photography enthusiasts and professionals.',
    image: productCameraLens,
    category: 'Photography',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Gaming Mechanical Keyboard',
    price: 9799,
    description: 'RGB mechanical gaming keyboard with tactile switches and customizable backlight. Enhanced gaming experience guaranteed.',
    image: productGamingKeyboard,
    category: 'Gaming',
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Ultrabook Pro Laptop',
    price: 12799,
    description: 'Powerful ultrabook with latest processor, 16GB RAM, and stunning display. Perfect for work and creative projects.',
    image: productLaptop,
    category: 'Computers',
    inStock: true,
    featured: true,
  },
  {
    id: '6',
    name: 'Smart Home Security System',
    price: 4999,
    description: 'Complete home security system with cameras, sensors, and mobile app control. Keep your home safe and secure.',
    image: productSecuritySystem,
    category: 'Smart Home',
    inStock: true,
    featured: false,
  },
  {
    id: '7',
    name: 'Professional Drone 4K',
    price: 28750,
    description: 'High-end drone with 4K camera, gimbal stabilization, and intelligent flight modes. Perfect for aerial photography.',
    image: productDrone,
    category: 'Drones',
    inStock: true,
    featured: true,
  },
  {
    id: '8',
    name: 'Premium Sound System',
    price: 29900,
    description: 'Audiophile-grade sound system with wireless connectivity and room-filling sound. Experience music like never before.',
    image: productSoundSystem,
    category: 'Audio',
    inStock: true,
    featured: false,
  },
  {
    id: '9',
    name: 'Smart TV 65" OLED',
    price: 34900,
    description: 'Premium 65-inch OLED smart TV with 4K HDR, smart features, and stunning picture quality. Cinema experience at home.',
    image: productSmartTV,
    category: 'Electronics',
    inStock: true,
    featured: true,
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductById = (id: string) => products.find(p => p.id === id);