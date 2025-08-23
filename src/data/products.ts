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
    keyFeatures: [
      '50+ UI Components',
      'Dark & Light Mode',
      'Responsive Design',
      'Figma Source Files',
      'React Components',
      'TypeScript Support',
      'Premium Icons',
      'Documentation Included'
    ],
    builtInPackages: [
      'React & TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Hook Form',
      'React Query',
      'Lucide Icons'
    ],
    specifications: {
      version: '2.1.0',
      updated: '2 months ago',
      bootstrap: 'v5.3.2',
      category: 'UI & Design',
      license: 'Commercial Use'
    },
    licenseOptions: {
      standard: 299,
      multisite: 599,
      extended: 1299
    },
    livePreviewUrl: '/products/1',
    installationGuide: 'Complete setup guide with video tutorials',
    changelog: [
      'Added new dashboard components',
      'Improved responsive design',
      'Updated color palette',
      'Bug fixes and performance improvements'
    ]
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
    keyFeatures: [
      '10+ Page Layouts',
      'Mobile-First Design',
      'SEO Optimized',
      'Contact Forms',
      'Blog Integration',
      'Portfolio Sections',
      'Animation Effects',
      'Cross-Browser Compatible'
    ],
    builtInPackages: [
      'HTML5 & CSS3',
      'Bootstrap Framework',
      'jQuery',
      'AOS Animation',
      'Font Awesome Icons',
      'Google Fonts'
    ],
    specifications: {
      version: '1.8.0',
      updated: '1 month ago',
      bootstrap: 'v5.3.2',
      category: 'Website Templates',
      license: 'Extended License'
    },
    licenseOptions: {
      standard: 599,
      multisite: 1199,
      extended: 2499
    },
    livePreviewUrl: '/products/2',
    installationGuide: 'Step-by-step installation with customization guide',
    changelog: [
      'Added new homepage variations',
      'Improved mobile responsiveness',
      'Updated contact form validation',
      'Performance optimizations'
    ]
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
    keyFeatures: [
      '100+ Mobile Screens',
      'iOS & Android Compatible',
      'Figma & Sketch Files',
      'Dark & Light Themes',
      'Component Library',
      'Icon Pack Included',
      'Prototype Ready',
      'Design System'
    ],
    builtInPackages: [
      'Figma Components',
      'Sketch Symbols',
      'Adobe XD Assets',
      'React Native Components',
      'Flutter Widgets',
      'Icon Library'
    ],
    specifications: {
      version: '3.2.0',
      updated: '3 weeks ago',
      bootstrap: 'N/A',
      category: 'Mobile UI/UX',
      license: 'Commercial Use'
    },
    licenseOptions: {
      standard: 6999,
      multisite: 13999,
      extended: 29999
    },
    livePreviewUrl: '/products/3',
    installationGuide: 'Design files with comprehensive style guide and component documentation',
    changelog: [
      'Added new onboarding screens',
      'Updated color palette',
      'New component variations',
      'Improved accessibility features'
    ]
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
    keyFeatures: [
      'Complete E-commerce Solution',
      'Product Catalog Pages',
      'Shopping Cart & Checkout',
      'User Account System',
      'Payment Integration Ready',
      'Inventory Management',
      'Order Tracking',
      'Mobile Responsive'
    ],
    builtInPackages: [
      'React E-commerce Components',
      'Payment Gateway Integration',
      'Shopping Cart Logic',
      'Product Filter System',
      'User Authentication',
      'Order Management'
    ],
    specifications: {
      version: '2.5.0',
      updated: '1 month ago',
      bootstrap: 'v5.3.2',
      category: 'E-commerce Templates',
      license: 'Extended License'
    },
    licenseOptions: {
      standard: 9799,
      multisite: 19599,
      extended: 39999
    },
    livePreviewUrl: '/products/4',
    installationGuide: 'Full setup guide with database schema and API documentation',
    changelog: [
      'Added wishlist functionality',
      'Improved checkout process',
      'New payment methods support',
      'Enhanced product search'
    ]
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
    keyFeatures: [
      'Advanced Analytics Dashboard',
      'Multiple Chart Types',
      'Dark & Light Themes',
      'User Management System',
      'Real-time Data Updates',
      'Customizable Widgets',
      'Export Functionality',
      'Role-based Access Control'
    ],
    builtInPackages: [
      'Chart.js Integration',
      'React Dashboard Components',
      'Data Visualization Tools',
      'Authentication System',
      'API Integration',
      'Export Libraries'
    ],
    specifications: {
      version: '4.1.0',
      updated: '2 weeks ago',
      bootstrap: 'v5.3.2',
      category: 'Admin Templates',
      license: 'Commercial Use'
    },
    licenseOptions: {
      standard: 12799,
      multisite: 25599,
      extended: 51999
    },
    livePreviewUrl: '/products/5',
    installationGuide: 'Complete admin setup with user roles and permissions guide',
    changelog: [
      'New analytics widgets',
      'Improved performance',
      'Added export features',
      'Enhanced security measures'
    ]
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
  generateProductWithReviews({
    id: '10',
    name: 'FreshCart – Next.js eCommerce Template',
    price: 4900,
    description: 'Professional Next.js eCommerce website template designed for grocery stores and online marketplaces. Features 5+ home page variations, admin dashboard, 100+ components, authentication, mega menu, faceted navigation, mini cart, checkout pages, and fully responsive layouts. Built with React & Redux, Bootstrap, and modern UI components.',
    image: productEcommerceDesign,
    category: 'E-commerce Templates',
    inStock: true,
    featured: true,
    keyFeatures: [
      '5+ Home Page Variations',
      'Admin Dashboard for Grocery stores',
      '100+ Components / Different layouts',
      'Authentication Features',
      'Mega Menu',
      'Faceted Navigation (Multiple Filters based On Various Attributes)',
      'Mini Cart page',
      'Quick Popup Design',
      'Checkout Page',
      'Shop List & Grid Filter',
      'Wish List',
      'Multiple Store UI',
      'Fully Responsive Layouts',
      'Responsive Navigation Menu',
      'Well Documented',
      'Regular update',
      'Dedicated support',
      'Clean & Modern Design',
      'Google Fonts',
      'Lifetime Updates'
    ],
    builtInPackages: [
      'React & Redux',
      'React Simplebar',
      'Slick Carousel',
      'React Tiny Slider',
      'React Quill',
      'React Flatpickr',
      'React Dropzone',
      'React Bootstrap',
      'Bootstrap and feather Icons'
    ],
    specifications: {
      version: '1.1.0',
      updated: '11 months ago',
      bootstrap: 'v5.3.3',
      category: 'E-Commerce & Retail',
      license: 'Commercial Use'
    },
    licenseOptions: {
      standard: 4900,
      multisite: 14900,
      extended: 44900
    },
    livePreviewUrl: 'https://themes.getbootstrap.com/preview/?theme_id=158749',
    installationGuide: 'https://youtu.be/BBsnSZE3wFA?si=erYcgDEkunHVF8oI',
    changelog: [
      'Added new pages - Blog Grid, Blog List, New Blog Post',
      'Add New Customer, Edit Customer pages',
      'Performance improvements',
      'Bug fixes and updates'
    ]
  }),
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductById = (id: string) => products.find(p => p.id === id);