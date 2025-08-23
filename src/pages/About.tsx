import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Zap, Heart, Globe, Code, Palette, Monitor, Smartphone, CheckCircle, Star, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                ✨ About Razor Commerce
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent leading-tight mb-6">
                Crafting Digital Excellence
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                We are a passionate team of designers and developers dedicated to creating premium web UI templates 
                that empower businesses to build stunning digital experiences.
              </p>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Premium Templates</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">45+</h3>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5★</h3>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-2xl mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize premium web design by providing affordable, high-quality UI templates that enable 
                  businesses of all sizes to create professional, conversion-optimized websites without the need 
                  for extensive design resources.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-2xl mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the world's leading marketplace for premium web UI templates, fostering a community 
                  where exceptional design meets practical functionality, empowering creators to build the future 
                  of digital experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Design Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every template is crafted by experienced designers following the latest UI/UX principles and 
                  modern design trends to ensure your project stands out.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Developer Friendly</h4>
                <p className="text-gray-600 leading-relaxed">
                  Clean, semantic code with comprehensive documentation makes implementation seamless for 
                  developers of all skill levels.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-4">Mobile First</h4>
                <p className="text-gray-600 leading-relaxed">
                  All our templates are built with a mobile-first approach, ensuring perfect responsiveness 
                  across all devices and screen sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                These principles guide everything we do and shape how we serve our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Quality First</h4>
                <p className="text-slate-300 text-sm">Every template undergoes rigorous quality checks before release.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Customer Centric</h4>
                <p className="text-slate-300 text-sm">Your success is our success. We're here to support your journey.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Innovation</h4>
                <p className="text-slate-300 text-sm">We constantly push boundaries to deliver cutting-edge designs.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Accessibility</h4>
                <p className="text-slate-300 text-sm">Making premium design accessible to businesses worldwide.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Razor Commerce's success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Makles Rahman</h4>
                  <p className="text-blue-600 font-medium mb-4">Co-Founder & CEO</p>
                  <p className="text-gray-600">Leading our vision to democratize premium web design globally.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Alex Bot</h4>
                  <p className="text-purple-600 font-medium mb-4">Co-Founder & CTO</p>
                  <p className="text-gray-600">Ensuring our technical excellence and innovative development practices.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Design Team</h4>
                  <p className="text-green-600 font-medium mb-4">Creative Excellence</p>
                  <p className="text-gray-600">Our talented designers create stunning templates that inspire and convert.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center border border-blue-200/60">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a custom template, have questions about our services, or want to partner with us, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium">
                View Our Work
              </Button>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
