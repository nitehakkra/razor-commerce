import { Product } from '@/types/product';
import { generateRandomReviews, calculateAverageRating } from '@/lib/utils';
import productUITemplate from '@/assets/product-ui-template.jpg';
import productWebsiteTemplate from '@/assets/product-website-template.jpg';
import productMobileUI from '@/assets/product-mobile-ui.jpg';
import productEcommerceDesign from '@/assets/product-ecommerce-design.jpg';
import productDashboardUI from '@/assets/product-dashboard-ui.jpg';
import productSaasTemplate from '@/assets/product-saas-template.jpg';
import productPortfolioDesign from '@/assets/product-portfolio-design.jpg';
import productCorporateDesign from '@/assets/product-corporate-design.jpg';
import productBlogDesign from '@/assets/product-blog-design.jpg';

// Generate products with randomized reviews
const generateProductWithReviews = (productData: Omit<Product, 'rating' | 'reviewCount' | 'reviews'>): Product => {
  const reviews = generateRandomReviews(productData.id);
  const rating = calculateAverageRating(reviews);
  
  return {
    ...productData,
    rating,
    reviewCount: reviews.length,
    reviews
  };
};

export const products: Product[] = [
  generateProductWithReviews({
    id: '1',
    name: 'Premium UI/UX Design Template',
    price: 299,
    description: 'Modern and elegant UI/UX design template with professional dashboard interface, clean typography, and premium color schemes. Perfect for web applications.',
    image: productUITemplate,
    category: 'UI Templates',
    inStock: true,
    featured: true,
  }),
  generateProductWithReviews({
    id: '2',
    name: 'Responsive Website Template',
    price: 599,
    description: 'Professional website design template with modern landing page layout, responsive design, and clean sections. Ready to use for any business.',
    image: productWebsiteTemplate,
    category: 'Website Templates',
    inStock: true,
    featured: true,
  }),
  generateProductWithReviews({
    id: '3',
    name: 'Mobile App UI Kit',
    price: 6999,
    description: 'Complete mobile app UI design kit with elegant interface screens, modern components, and premium design system. iOS and Android compatible.',
    image: productMobileUI,
    category: 'Mobile Design',
    inStock: true,
    featured: true,
  }),
  generateProductWithReviews({
    id: '4',
    name: 'E-commerce Web Design',
    price: 9799,
    description: 'Professional e-commerce web design template with product showcase, shopping cart interface, and modern layout. Conversion optimized.',
    image: productEcommerceDesign,
    category: 'E-commerce Design',
    inStock: true,
    featured: false,
  }),
  generateProductWithReviews({
    id: '5',
    name: 'Admin Dashboard Template',
    price: 12799,
    description: 'Advanced admin dashboard UI template with charts, analytics interface, modern dark theme layout. Fully responsive and customizable.',
    image: productDashboardUI,
    category: 'Dashboard Design',
    inStock: true,
    featured: true,
  }),
  generateProductWithReviews({
    id: '6',
    name: 'SaaS Landing Page Design',
    price: 4999,
    description: 'Modern SaaS landing page design template with pricing tables, feature sections, and professional layout. High conversion focused.',
    image: productSaasTemplate,
    category: 'Landing Pages',
    inStock: true,
    featured: false,
  }),
  generateProductWithReviews({
    id: '7',
    name: 'Portfolio Website Design',
    price: 28750,
    description: 'Creative portfolio website design template with project showcase, modern typography, and elegant layout. Perfect for designers and agencies.',
    image: productPortfolioDesign,
    category: 'Portfolio Design',
    inStock: true,
    featured: true,
  }),
  generateProductWithReviews({
    id: '8',
    name: 'Corporate Website Template',
    price: 29900,
    description: 'Professional corporate website design template with business sections, elegant design system, and modern layout. Enterprise ready.',
    image: productCorporateDesign,
    category: 'Corporate Design',
    inStock: true,
    featured: false,
  }),
  generateProductWithReviews({
    id: '9',
    name: 'Blog Website Template',
    price: 34900,
    description: 'Modern blog website design template with article layouts, typography system, and clean reading experience. SEO optimized and fast loading.',
    image: productBlogDesign,
    category: 'Blog Design',
    inStock: true,
    featured: true,
  }),
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductById = (id: string) => products.find(p => p.id === id);