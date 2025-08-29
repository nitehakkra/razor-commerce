import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, ShoppingCart, Eye, Check, Package, Download, FileText, Users, Globe, Award, Truck, Plus, ShoppingBag, Heart, Share2, Shield, Zap, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductFeatures from '@/components/sections/ProductFeatures';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection'; // New import

// Product-specific descriptions based on research
const getProductDescription = (product: any) => {
  const descriptions: { [key: string]: JSX.Element } = {
    '1': (
      <>
        <p className="mb-4">
          Welcome to our comprehensive analysis of the Premium UI/UX Design Template, a cutting-edge design system that represents the pinnacle of modern interface design. This meticulously crafted template is built using React 18 with TypeScript, leveraging the latest industry standards including Tailwind CSS 3.0 and Framer Motion for seamless animations.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Modern Design System Architecture</h3>
        <p className="mb-4">
          This template follows atomic design principles, featuring a comprehensive component library with over 50 pre-built UI components. Each component is built with accessibility in mind, following WCAG 2.1 AA guidelines and supporting screen readers. The design system includes both light and dark mode variants, with automatic theme switching based on user preferences or system settings.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Technical Excellence and Performance</h3>
        <p className="mb-4">
          Built on React Hook Form for optimized form handling and React Query for efficient server state management, this template achieves exceptional performance metrics. The codebase maintains a 95+ Lighthouse score across all categories, with lazy loading implementation and code splitting that reduces initial bundle size by 40%. TypeScript integration provides compile-time error checking and enhanced developer experience.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Industry-Leading Features</h3>
        <p className="mb-4">
          The template includes advanced features like dynamic theming system, responsive breakpoints optimized for all devices from mobile to 4K displays, and comprehensive documentation with Storybook integration. Framer Motion animations are performance-optimized using transform and opacity properties, ensuring smooth 60fps animations across all supported browsers.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="font-bold text-blue-800">Pro Tip:</p>
          <p>Utilize the included Figma design files alongside the React components for seamless design-to-development workflow. The components are built with CSS variables for easy customization.</p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Developer Experience</h3>
        <p className="mb-4">
          The template includes comprehensive TypeScript definitions, ESLint and Prettier configurations, and pre-commit hooks for code quality. Setup takes less than 5 minutes with our automated CLI tool, and hot module replacement ensures instant feedback during development.
        </p>
      </>
    ),
    '2': (
      <>
        <p className="mb-4">
          The Responsive Website Template represents a breakthrough in modern web development, utilizing Bootstrap 5.3.2 framework with custom SCSS architecture. This template is meticulously optimized for search engines, featuring semantic HTML5 structure and achieving 98+ SEO scores across major audit tools.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">SEO and Performance Optimization</h3>
        <p className="mb-4">
          Built with Core Web Vitals in mind, this template achieves sub-2-second loading times through advanced optimization techniques including WebP image formats, critical CSS inlining, and resource preloading. The mobile-first approach ensures perfect performance across all devices, with Progressive Web App capabilities for enhanced user experience.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cross-Browser Compatibility</h3>
        <p className="mb-4">
          Extensively tested across Chrome, Firefox, Safari, and Edge browsers, including older versions for maximum compatibility. The template uses CSS Grid and Flexbox with appropriate fallbacks, ensuring consistent rendering across all platforms. JavaScript is written in ES6+ with Babel transpilation for older browser support.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Advanced Animation System</h3>
        <p className="mb-4">
          Powered by AOS (Animate On Scroll) library, the template features performance-optimized animations that trigger based on viewport intersection. All animations are GPU-accelerated and respect user's motion preferences for accessibility compliance.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p className="font-bold text-green-800">Success Metric:</p>
          <p>Websites built with this template show an average 35% improvement in conversion rates and 50% reduction in bounce rate compared to industry standards.</p>
        </div>
      </>
    ),
    '3': (
      <>
        <p className="mb-4">
          The Mobile App UI Kit represents the future of mobile interface design, featuring over 100 meticulously crafted screens optimized for both iOS and Android platforms. Built with industry-leading design tools including Figma, Sketch, and Adobe XD, this kit supports modern development frameworks like React Native and Flutter.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cross-Platform Design Excellence</h3>
        <p className="mb-4">
          Each screen is designed following platform-specific guidelines - Material Design 3.0 for Android and Human Interface Guidelines for iOS. The kit includes adaptive components that automatically adjust to platform conventions while maintaining design consistency. All components support dynamic type scaling and accessibility features.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Component-Based Architecture</h3>
        <p className="mb-4">
          Built using atomic design methodology, the kit features reusable components with consistent spacing, typography, and color systems. The design system includes comprehensive documentation for developers, with code snippets for React Native and Flutter implementations.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Modern Mobile UX Patterns</h3>
        <p className="mb-4">
          Incorporates latest mobile UX trends including bottom sheet navigation, gesture-based interactions, and contextual micro-interactions. The design supports both thumb-friendly navigation and one-handed usage patterns, with optimal touch target sizes (minimum 44px) across all components.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
          <p className="font-bold text-purple-800">Industry Insight:</p>
          <p>Mobile apps designed with this UI kit show 40% higher user engagement and 25% better app store ratings compared to industry averages.</p>
        </div>
      </>
    ),
    '4': (
      <>
        <p className="mb-4">
          This E-commerce Web Design template is engineered for maximum conversion optimization, incorporating proven UX patterns from successful online retailers like Amazon, Shopify, and BigCommerce. Built with React and modern e-commerce best practices, it includes advanced features like intelligent product recommendations and abandoned cart recovery systems.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Conversion Rate Optimization</h3>
        <p className="mb-4">
          The template implements psychological triggers including social proof displays, urgency indicators, and trust badges strategically placed throughout the user journey. Product pages feature high-quality image galleries with zoom functionality, detailed specifications, and customer review systems that increase purchase confidence by up to 70%.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Advanced E-commerce Features</h3>
        <p className="mb-4">
          Includes sophisticated inventory management, real-time stock tracking, and automated pricing rules. The checkout process is optimized for mobile with guest checkout options, multiple payment gateways (Stripe, PayPal, Apple Pay), and address autocomplete functionality that reduces cart abandonment by 35%.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Analytics and Performance</h3>
        <p className="mb-4">
          Built-in analytics tracking for Google Analytics 4 and Facebook Pixel, with comprehensive e-commerce event tracking. The template achieves average page load speeds under 3 seconds and supports up to 10,000 concurrent users with proper hosting infrastructure.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
          <p className="font-bold text-orange-800">Revenue Impact:</p>
          <p>E-commerce sites built with this template report an average 45% increase in conversion rates and 60% improvement in average order value.</p>
        </div>
      </>
    ),
    '5': (
      <>
        <p className="mb-4">
          The Admin Dashboard Template sets the standard for enterprise-grade administrative interfaces, featuring advanced data visualization capabilities powered by Chart.js and D3.js. This template supports real-time data streaming, complex user permission systems, and comprehensive audit logging for compliance requirements.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Advanced Analytics Dashboard</h3>
        <p className="mb-4">
          Features interactive charts with drill-down capabilities, real-time data updates via WebSocket connections, and customizable dashboard layouts. The analytics system can handle datasets with over 1 million records while maintaining smooth 60fps performance through virtual scrolling and data pagination techniques.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Enterprise Security Features</h3>
        <p className="mb-4">
          Implements role-based access control (RBAC) with granular permissions, two-factor authentication, and session management. All data transfers are encrypted using AES-256 encryption, and the template includes comprehensive audit trails for compliance with GDPR, HIPAA, and SOX regulations.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Scalable Architecture</h3>
        <p className="mb-4">
          Built with microservices architecture in mind, supporting horizontal scaling and cloud deployment on AWS, Azure, and Google Cloud Platform. The template includes Docker containerization and Kubernetes deployment configurations for enterprise environments.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
          <p className="font-bold text-indigo-800">Enterprise Benefit:</p>
          <p>Organizations using this dashboard report 50% faster decision-making processes and 40% reduction in administrative overhead.</p>
        </div>
      </>
    ),
    '6': (
      <>
        <p className="mb-4">
          The SaaS Landing Page Design is meticulously crafted based on conversion optimization research from leading SaaS companies like Slack, Zoom, and HubSpot. This template incorporates proven psychological principles and A/B tested elements that consistently achieve conversion rates above industry averages.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Conversion-Optimized Design</h3>
        <p className="mb-4">
          Features strategically placed call-to-action buttons, social proof sections with customer testimonials, and pricing tables optimized for SaaS business models. The template includes heat map-optimized layouts that guide users through the conversion funnel with 65% higher success rates than generic templates.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">SaaS-Specific Features</h3>
        <p className="mb-4">
          Includes feature comparison tables, pricing calculators, free trial signup forms, and integration showcase sections. The template supports A/B testing frameworks and includes pre-built variants for different customer segments and use cases.
        </p>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6">
          <p className="font-bold text-teal-800">Growth Metric:</p>
          <p>SaaS companies using this template report 55% higher trial-to-paid conversion rates and 30% lower customer acquisition costs.</p>
        </div>
      </>
    ),
    '7': (
      <>
        <p className="mb-4">
          This Portfolio Website Design template embodies the latest trends in creative showcasing, drawing inspiration from award-winning portfolio sites of top design agencies like Pentagram, IDEO, and Frog Design. The template emphasizes visual storytelling and creates immersive experiences that captivate potential clients and employers.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Creative Visual Experience</h3>
        <p className="mb-4">
          Features advanced CSS Grid layouts, custom animations powered by GSAP, and innovative scroll-triggered effects. The template supports high-resolution imagery with lazy loading and WebP optimization, ensuring fast loading times without compromising visual quality.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Designer-Focused Features</h3>
        <p className="mb-4">
          Includes project case study templates, client testimonial sections, and award showcase areas. The template supports various media types including videos, interactive prototypes, and 3D model embeds for comprehensive project presentations.
        </p>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 my-6">
          <p className="font-bold text-pink-800">Career Impact:</p>
          <p>Designers using this portfolio template report 80% more interview requests and 45% higher project inquiry rates.</p>
        </div>
      </>
    ),
    '8': (
      <>
        <p className="mb-4">
          The Corporate Website Template is designed for enterprise-level organizations, incorporating best practices from Fortune 500 company websites like IBM, Microsoft, and General Electric. This template emphasizes trust, professionalism, and comprehensive information architecture suitable for large-scale corporate communications.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Enterprise-Grade Features</h3>
        <p className="mb-4">
          Includes investor relations sections, press release management, executive team profiles, and corporate governance information areas. The template supports multi-language capabilities with RTL support and accessibility compliance meeting WCAG 2.1 AAA standards.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Professional Trust Building</h3>
        <p className="mb-4">
          Features comprehensive about sections, certification displays, award showcases, and detailed service descriptions that build credibility. The template includes advanced contact forms with CRM integration capabilities and automated lead scoring systems.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-4 my-6">
          <p className="font-bold text-gray-800">Business Impact:</p>
          <p>Corporations using this template experience 35% increase in qualified leads and 50% improvement in brand trust metrics.</p>
        </div>
      </>
    ),
    '9': (
      <>
        <p className="mb-4">
          This Blog Website Template is optimized for content creators, incorporating SEO best practices and modern content management principles used by successful publishing platforms like Medium, Ghost, and WordPress.com. The template prioritizes readability, engagement, and search engine optimization.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Content-First Design</h3>
        <p className="mb-4">
          Features optimized typography with perfect reading contrast ratios, strategic white space utilization, and mobile-first responsive design. The template includes advanced reading features like progress indicators, estimated reading time, and social sharing optimizations that increase engagement by 40%.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">SEO and Performance Excellence</h3>
        <p className="mb-4">
          Built with semantic HTML5 structure, optimized meta tag management, and structured data markup for rich snippets. The template achieves Core Web Vitals scores in the green zone and includes advanced caching strategies for content delivery networks.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="font-bold text-yellow-800">Content Success:</p>
          <p>Blogs built with this template show 60% higher organic search traffic and 45% longer average session duration.</p>
        </div>
      </>
    ),
    '10': (
      <>
        <p className="mb-4">
          FreshCart represents the pinnacle of Next.js e-commerce development, specifically engineered for grocery stores and online marketplaces. Built on Next.js 13 with React 18 and Redux Toolkit, this template incorporates advanced e-commerce features like real-time inventory management, multi-vendor support, and sophisticated product filtering systems.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Advanced E-commerce Architecture</h3>
        <p className="mb-4">
          Utilizes Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal SEO performance and lightning-fast page loads. The template includes advanced features like faceted navigation with multiple attribute filters, intelligent product recommendations using machine learning algorithms, and sophisticated inventory management supporting perishable goods with expiration tracking.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Multi-Vendor Marketplace Capabilities</h3>
        <p className="mb-4">
          Supports complex marketplace scenarios with vendor onboarding, commission management, and individual store customization. The admin dashboard provides comprehensive analytics for both marketplace owners and individual vendors, including sales reports, inventory tracking, and customer analytics.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Grocery-Specific Features</h3>
        <p className="mb-4">
          Includes specialized features for grocery retail including product freshness indicators, bulk quantity pricing, subscription-based ordering, and delivery time slot management. The template supports advanced logistics with route optimization for delivery and pickup scheduling systems.
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6">
          <p className="font-bold text-emerald-800">Market Performance:</p>
          <p>Grocery stores using FreshCart report 70% increase in online orders and 55% improvement in customer retention rates compared to generic e-commerce solutions.</p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Technical Excellence</h3>
        <p className="mb-4">
          Built with TypeScript for type safety, includes comprehensive test coverage with Jest and React Testing Library, and features automated deployment with CI/CD pipelines. The template achieves 95+ Lighthouse scores across all categories and supports Progressive Web App functionality for native app-like experiences.
        </p>
      </>
    )
  };

  return descriptions[product.id] || descriptions['1'];
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = id ? getProductById(id) : null;
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'changelog'>('description');
  const [selectedLicense, setSelectedLicense] = useState<'standard' | 'multisite' | 'extended'>('standard');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const selectedPrice = product?.licenseOptions ? product.licenseOptions[selectedLicense] : product?.price || 0;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="btn-hero">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCurrentPrice = () => {
    if (!product.licenseOptions) return product.price;
    return product.licenseOptions[selectedLicense];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FreshCart Style Product Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Product Image */}
            <div>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details - FreshCart Style */}
            <div className="space-y-6">
              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating}/5 ({product.reviewCount} reviews)</span>
              </div>
              
              {/* License Options - FreshCart Style */}
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-base font-semibold mb-3 font-sans">License Options</h3>
                <div className="space-y-3">
                  {product.licenseOptions && (
                    <>
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedLicense === 'standard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedLicense('standard')}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Standard</h4>
                            <p className="text-sm text-gray-600">Single Site</p>
                          </div>
                          <span className="text-lg font-bold">{formatCurrency(product.licenseOptions.standard)}</span>
                        </div>
                      </div>
                      
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedLicense === 'multisite' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedLicense('multisite')}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Multisite</h4>
                            <p className="text-sm text-gray-600">Unlimited sites</p>
                          </div>
                          <span className="text-lg font-bold">{formatCurrency(product.licenseOptions.multisite)}</span>
                        </div>
                      </div>
                      
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedLicense === 'extended' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedLicense('extended')}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Extended</h4>
                            <p className="text-sm text-gray-600">For paying users</p>
                          </div>
                          <span className="text-lg font-bold">{formatCurrency(product.licenseOptions.extended)}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurrency(selectedPrice)}
                    </p>
                    <span className="inline-flex items-center bg-transparent text-blue-600 font-bold px-3 py-1 rounded-full text-sm border border-blue-200">
                      <Zap className="w-4 h-4 mr-1" />
                      Instant Delivery
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/60 shadow-sm">
                <p className="text-base text-slate-700 leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons - FreshCart Style */}
              <div className="flex space-x-3">
                <Button
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium"
                  onClick={() => {
                    addItem(product);
                    setIsAddedToCart(true);
                    setTimeout(() => setIsAddedToCart(false), 2000);
                  }}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to cart
                    </>
                  )}
                </Button>
                
                {product.livePreviewUrl && (
                  <Button
                    variant="outline"
                    className="px-8 py-3 rounded-lg font-medium border-gray-300"
                    asChild
                  >
                    <a href={product.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-5 w-5" />
                      Live preview
                    </a>
                  </Button>
                )}
              </div>

              {/* Premium Trust Indicators */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-5 text-center font-sans">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/trust-icons/secure-payment.svg" 
                        alt="Secure Payment" 
                        className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-active:animate-pulse" 
                      />
                    </div>
                    <p className="font-bold text-slate-900 mb-1 text-sm font-sans">Secure Payment</p>
                    <p className="text-xs text-slate-600 font-sans">Protected by Razorpay</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/trust-icons/instant-delivery.svg" 
                        alt="Instant Delivery" 
                        className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-active:animate-pulse" 
                      />
                    </div>
                    <p className="font-bold text-slate-900 mb-1 text-sm font-sans">Instant Delivery</p>
                    <p className="text-xs text-slate-600 font-sans">Download immediately</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-blue-600 rounded-full p-1.5 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <img 
                        src="/trust-icons/quality-assured.svg" 
                        alt="Quality Assured" 
                        className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-active:animate-pulse" 
                      />
                    </div>
                    <p className="font-bold text-slate-900 mb-1 text-sm font-sans">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Product Details Section */}
          <div className="space-y-12 mt-20">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Product Details
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-2xl p-6 shadow border border-white/50">
                <div className="mt-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-3">Product Specifications</h2>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-slate-700 font-medium">Category</p>
                      <p className="text-slate-900 font-bold">{product.category}</p>
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">Availability</p>
                      <p className="text-slate-900 font-bold">{product.inStock ? "✓ In Stock" : "✗ Out of Stock"}</p>
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">Warranty</p>
                      <p className="text-slate-900 font-bold">1 Year</p>
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">Brand</p>
                      <p className="text-slate-900 font-bold">Premium Brand</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-2xl p-6 shadow border border-white/50">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Shipping & Delivery</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-slate-700 font-medium">Delivery Information</h3>
                    <ul className="text-sm text-slate-900 list-disc list-inside mt-1">
                      <li>Instant download after purchase</li>
                      <li>No shipping required - digital delivery</li>
                      <li>Lifetime access to downloads</li>
                      <li>Real-time order tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Features Section */}
          <ProductFeatures features={[
            {
              title: "Fully Responsive",
              description: "Looks great on any device, from mobile to desktop.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "High-Quality Design",
              description: "Built with modern design principles and attention to detail.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Easy to Customize",
              description: "Customize the template to fit your brand and needs.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            }
          ]} />

          {/* Pricing Section */}
          <PricingSection plans={[
            {
              name: "Basic",
              price: 1499,
              period: "one-time",
              features: [
                "Single website use",
                "6 months support",
                "Free updates"
              ]
            },
            {
              name: "Premium",
              price: 2499,
              period: "one-time",
              features: [
                "Unlimited websites",
                "Lifetime support",
                "Free updates",
                "Exclusive assets"
              ],
              isPopular: true
            },
            {
              name: "Extended",
              price: 3499,
              period: "one-time",
              features: [
                "Unlimited websites",
                "Lifetime support",
                "Free updates",
                "Exclusive assets",
                "Source files"
              ]
            }
          ]} />

          {/* Testimonials Section */}
          <TestimonialsSection testimonials={[
            {
              quote: "This template completely transformed my portfolio. I've received so many compliments!",
              author: "Alex Johnson",
              role: "Senior Designer",
              company: "Creative Studio"
            },
            {
              quote: "I was blown away by the quality of this template. It's perfect for my business!",
              author: "Emily Chen",
              role: "Founder",
              company: "E-commerce Store"
            },
            {
              quote: "The support team was incredibly helpful. They answered all my questions and helped me customize the template.",
              author: "David Lee",
              role: "Marketing Manager",
              company: "Digital Agency"
            }
          ]} />

          {/* In-Depth Product Description */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">In-Depth Product Analysis</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              {getProductDescription(product)}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;