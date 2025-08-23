
import React from 'react';
import { Palette, Code, Smartphone, Monitor, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LoadingButton } from '@/components/ui/loading';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomDesignServices: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleContactNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/contact');
      setLoading(false);
    }, 300);
  };

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Custom user interfaces designed with modern aesthetics and optimal user experience in mind.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development using cutting-edge technologies for fast, responsive websites.',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Native and responsive mobile app designs that work seamlessly across all devices.',
      features: ['iOS & Android', 'Cross-platform', 'App Store Ready', 'Performance Optimized']
    },
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Complex web applications built with scalability and performance as top priorities.',
      features: ['SaaS Platforms', 'E-commerce', 'Dashboards', 'Admin Panels']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="container-responsive">
        <div className="space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 border border-accent/20">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Custom Solutions</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground leading-tight">
              Professional <span className="text-gradient">Custom Design</span> Services
            </h2>
            
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beyond our template collection, we offer comprehensive custom design and development services 
              tailored to your unique business needs. From concept to deployment, we bring your vision to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant group hover:shadow-xl transition-all duration-500">
                <CardHeader className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="bg-accent/10 p-2 md:p-3 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-center text-foreground">
              Our Design Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
                { step: '02', title: 'Design', desc: 'Creating mockups and prototypes' },
                { step: '03', title: 'Develop', desc: 'Building with modern technologies' },
                { step: '04', title: 'Deploy', desc: 'Launch and ongoing support' },
              ].map((process, index) => (
                <div key={index} className="text-center space-y-3 md:space-y-4 group">
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm md:text-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">{process.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4 md:space-y-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 lg:p-12 border border-border">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent">Ready to Start Your Project?</span>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground">
              Let's Create Something Amazing Together
            </h3>
            
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Contact us today to discuss your custom design project. We'll provide a free consultation 
              and detailed proposal tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <LoadingButton
                loading={loading}
                onClick={handleContactNavigation}
                className="btn-hero w-full sm:w-auto"
              >
                Start Your Project
              </LoadingButton>
              <Button variant="outline" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignServices;
