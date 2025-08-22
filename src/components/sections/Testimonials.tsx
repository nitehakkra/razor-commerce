import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    content: 'Outstanding quality products and lightning-fast delivery! The customer service team went above and beyond to help me choose the right product. Highly recommended!',
    rating: 5,
    image: '/placeholder.svg',
    verified: true,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    content: 'Premium quality at competitive prices. The shopping experience was seamless, and the product exceeded my expectations. Will definitely shop again!',
    rating: 5,
    image: '/placeholder.svg',
    verified: true,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Business Owner',
    content: 'Exceptional service from start to finish. The team helped me find exactly what I needed, and the secure payment process gave me complete confidence.',
    rating: 5,
    image: '/placeholder.svg',
    verified: true,
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Designer',
    content: 'Love the premium packaging and attention to detail. The product quality is exactly as advertised, and customer support is incredibly responsive.',
    rating: 5,
    image: '/placeholder.svg',
    verified: true,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience shopping with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="card-elegant group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-6 opacity-10">
                <Quote className="h-12 w-12 text-accent" />
              </div>

              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-accent fill-current" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="font-semibold text-accent text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Customer
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-accent fill-current" />
              <span className="text-lg font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-accent border-accent">
                Trusted by 50,000+ Customers
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Based on 10,000+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;