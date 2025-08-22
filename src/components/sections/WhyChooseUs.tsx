import React from 'react';
import { Shield, Truck, Star, Headphones, CreditCard, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Your data and payments are protected with bank-level security encryption.',
    color: 'text-blue-500',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping with real-time tracking for all orders.',
    color: 'text-green-500',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Hand-picked products from trusted brands with quality guarantee.',
    color: 'text-yellow-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert customer support team available round the clock to help you.',
    color: 'text-purple-500',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Multiple secure payment options powered by Razorpay gateway.',
    color: 'text-indigo-500',
  },
  {
    icon: Award,
    title: 'Trusted Brand',
    description: 'Join 50,000+ satisfied customers who trust our premium service.',
    color: 'text-red-500',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Why Choose <span className="text-gradient">PremiumStore</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence, 
            quality products, and exceptional customer service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-elegant group hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">500+</h3>
            <p className="text-muted-foreground">Premium Products</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">50k+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">4.9/5</h3>
            <p className="text-muted-foreground">Customer Rating</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">99%</h3>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;