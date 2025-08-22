import React from 'react';
import { Mail, Phone, MessageCircle, Clock, HeadphonesIcon } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-responsive">
          <div className="space-y-12 md:space-y-16">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Need help with our web design templates? Have questions about licensing? 
                Our support team is here to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-accent">
                      <Mail className="h-5 w-5" />
                      <span>Email Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Primary Support:</p>
                      <p className="text-foreground font-medium">maklesurrahaman39@outlook.com</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Secondary Support:</p>
                      <p className="text-foreground font-medium">alexbotix@outlook.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-accent">
                      <Phone className="h-5 w-5" />
                      <span>Phone Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-medium text-lg">+91 8370030184</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Available Monday - Friday, 9 AM - 6 PM IST
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-accent">
                      <Clock className="h-5 w-5" />
                      <span>Response Time</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email:</span>
                      <span className="text-sm text-foreground">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Phone:</span>
                      <span className="text-sm text-foreground">Immediate</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-accent" />
                      <span>Send us a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <Input placeholder="Your full name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <Input type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Subject *
                        </label>
                        <Input placeholder="What's this about?" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea 
                          placeholder="Tell us more about your question or concern..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button className="btn-hero w-full md:w-auto">
                        <HeadphonesIcon className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Quick answers to common questions about our web design templates
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg">Can I use templates for commercial projects?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! All our templates come with commercial licenses, allowing you to use them 
                      for client projects and commercial websites without additional fees.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg">Do you provide customization services?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our templates are designed to be easily customizable. For extensive custom work, 
                      please contact us to discuss your specific requirements and pricing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg">What files do I get with my purchase?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You'll receive source files including HTML, CSS, JavaScript, design files (Figma/PSD), 
                      documentation, and any required assets or fonts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg">How do refunds work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Refund requests must be made on the same day as purchase. Approved refunds 
                      are processed within 3-5 business days back to your original payment method.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;