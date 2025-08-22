import React from 'react';
import { Shield, Download, Star, Headphones, CreditCard, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Commercial License',
    description: 'Use our templates for unlimited commercial and personal projects.',
    color: 'text-blue-500',
  },
  {
    icon: Download,
    title: 'Instant Download',
    description: 'Get your templates immediately after purchase with lifetime access.',
    color: 'text-green-500',
  },
  {
    icon: Star,
    title: 'Modern Design',
    description: 'Clean, responsive templates built with latest design trends and best practices.',
    color: 'text-yellow-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert design support team available to help with customization and setup.',
    color: 'text-purple-500',
  },
  {
    icon: CreditCard,
    title: 'Secure Checkout',
    description: 'Safe and secure payment processing powered by Razorpay gateway.',
    color: 'text-indigo-500',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Join 5,000+ designers and agencies who trust our professional templates.',
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
            Why Choose <span className="text-gradient">DesignCraft</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our modern web design templates, 
            professional quality, and dedicated design support.
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
              <CardContent className="p-6 md:p-8 text-center space-y-4 md:space-y-6">
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-6 w-6 md:h-8 md:w-8 ${feature.color}`} />
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">200+</h3>
            <p className="text-sm md:text-base text-muted-foreground">Design Templates</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">5k+</h3>
            <p className="text-sm md:text-base text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">4.9/5</h3>
            <p className="text-sm md:text-base text-muted-foreground">Design Rating</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">99%</h3>
            <p className="text-sm md:text-base text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;