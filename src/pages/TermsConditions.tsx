import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Shield, CreditCard, Users, Mail, Phone, Clock, CheckCircle, XCircle, AlertTriangle, Scale, ArrowRight } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Scale className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent leading-tight mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Please read these terms carefully before using our premium web design template services. 
                By accessing Razor Commerce, you agree to be bound by these terms and conditions.
              </p>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Quick Overview Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Clear Terms</h3>
                <p className="text-slate-700 leading-relaxed">
                  Transparent and straightforward terms that protect both you and Razor Commerce in all transactions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Your Rights</h3>
                <p className="text-slate-700 leading-relaxed">
                  Comprehensive licensing rights that allow you to use our templates for unlimited commercial projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Fair Pricing</h3>
                <p className="text-slate-700 leading-relaxed">
                  Transparent pricing with no hidden fees, secure payment processing, and clear refund policies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-12">
            <div className="prose prose-slate max-w-none">
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Razor Commerce services, you accept and agree to be bound by the terms 
                  and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Our Services</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Razor Commerce provides premium web design templates, UI/UX design kits, and related digital 
                  design assets for commercial and personal use. Our services include:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Template Library</h4>
                    <p className="text-sm text-gray-700">Access to premium UI templates and components</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Customer Support</h4>
                    <p className="text-sm text-gray-700">Technical assistance and guidance</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">License & Usage Rights</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upon purchase, you receive a comprehensive license to use our design templates with the following rights:
                </p>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    You MAY:
                  </h4>
                  <ul className="space-y-2 text-green-800">
                    <li>• Use templates for unlimited personal and commercial projects</li>
                    <li>• Modify and customize templates to fit your specific needs</li>
                    <li>• Create derivative works based on our templates</li>
                    <li>• Use templates for client work and charge for your services</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                    <XCircle className="h-5 w-5 mr-2" />
                    You may NOT:
                  </h4>
                  <ul className="space-y-2 text-red-800">
                    <li>• Resell or redistribute templates as-is or with minimal modifications</li>
                    <li>• Share login credentials or downloaded files with others</li>
                    <li>• Create competing template marketplaces using our designs</li>
                    <li>• Claim ownership of the original template designs</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Payment & Pricing</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All prices are listed in Indian Rupees (₹). Payment is processed securely through Razorpay. 
                  Prices may change without notice, but existing purchases are not affected.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-3">⚡ Same-Day Refund Policy</h4>
                  <p className="text-amber-800 mb-2">
                    Refund requests must be submitted within 24 hours of purchase for full processing eligibility.
                  </p>
                  <p className="text-amber-800">
                    Contact: maklesurrahaman39@outlook.com or alexbotix@outlook.com
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Support & Contact</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Email Support
                    </h4>
                    <p className="text-blue-800 mb-2">Primary: maklesurrahaman39@outlook.com</p>
                    <p className="text-blue-800">Secondary: alexbotix@outlook.com</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Phone Support
                    </h4>
                    <p className="text-green-800 mb-2">+91 8370030184</p>
                    <p className="text-sm text-green-700">Mon-Fri: 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-bold text-gray-900 text-lg">Last Updated</span>
              </div>
              <p className="text-gray-700 text-center">
                These Terms & Conditions were last updated on <strong>{new Date().toLocaleDateString()}</strong>
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                For questions about these terms, please contact us using the information provided above.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;