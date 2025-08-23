import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Clock, CreditCard, Mail, Phone, CheckCircle, XCircle, RefreshCw, Shield, ArrowRight } from 'lucide-react';

const CancellationRefunds = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <RefreshCw className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900 bg-clip-text text-transparent leading-tight mb-6">
                Cancellation & Refunds
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                We understand that sometimes plans change. Here's everything you need to know about our 
                straightforward cancellation and refund policy for Razor Commerce template purchases.
              </p>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Quick Policy Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Same-Day Policy</h3>
                <p className="text-slate-700 leading-relaxed">
                  Refund requests must be submitted within 24 hours of your purchase for full processing eligibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Quick Processing</h3>
                <p className="text-slate-700 leading-relaxed">
                  Approved refunds are processed within 3-5 business days back to your original payment method.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Secure Process</h3>
                <p className="text-slate-700 leading-relaxed">
                  All refund requests are handled securely through our encrypted payment processing system.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-16">
            
            {/* Refund Eligibility */}
            <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-green-600 bg-clip-text text-transparent">
                  Refund Eligibility Criteria
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    Eligible for Refund
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Same-Day Requests</p>
                        <p className="text-slate-700 text-sm">Refund requested within 24 hours of purchase</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Technical Issues</p>
                        <p className="text-slate-700 text-sm">Template files are corrupted or inaccessible</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Wrong Purchase</p>
                        <p className="text-slate-700 text-sm">Accidentally purchased wrong template</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Quality Issues</p>
                        <p className="text-slate-700 text-sm">Template doesn't match description or preview</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <XCircle className="w-5 h-5 mr-3 text-red-600" />
                    Not Eligible for Refund
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Late Requests</p>
                        <p className="text-slate-700 text-sm">Refund requested after 24 hours of purchase</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Change of Mind</p>
                        <p className="text-slate-700 text-sm">Simply deciding you don't need the template</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Used Templates</p>
                        <p className="text-slate-700 text-sm">Templates already implemented in projects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Skill Issues</p>
                        <p className="text-slate-700 text-sm">Lack of technical knowledge to implement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Process */}
            <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                  How to Request a Refund
                </h2>
              </div>
              
              <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Contact Us</h4>
                  <p className="text-slate-700 text-sm">Email us within 24 hours with your order details</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Provide Details</h4>
                  <p className="text-slate-700 text-sm">Include order number, purchase date, and reason</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Review Process</h4>
                  <p className="text-slate-700 text-sm">We'll review your request within 2 business hours</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Get Refund</h4>
                  <p className="text-slate-700 text-sm">Approved refunds processed in 3-5 business days</p>
                </div>
              </div>
            </section>

            {/* Important Information */}
            <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200/60">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-amber-600 bg-clip-text text-transparent">
                  Important Information
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/60 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-amber-600" />
                      Processing Times
                    </h4>
                    <ul className="text-slate-700 space-y-2 text-sm">
                      <li>• <strong>Request Review:</strong> Within 2 business hours</li>
                      <li>• <strong>Approval Decision:</strong> Within 24 hours</li>
                      <li>• <strong>Refund Processing:</strong> 3-5 business days</li>
                      <li>• <strong>Bank Reflection:</strong> Additional 1-3 days</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/60 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                      Payment Methods
                    </h4>
                    <p className="text-slate-700 text-sm mb-2">Refunds are processed back to:</p>
                    <ul className="text-slate-700 space-y-1 text-sm">
                      <li>• Original credit/debit card</li>
                      <li>• PayPal account (if used)</li>
                      <li>• Bank transfer (for wire payments)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/60 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <XCircle className="w-5 h-5 mr-2 text-red-600" />
                      Non-Refundable Cases
                    </h4>
                    <ul className="text-slate-700 space-y-2 text-sm">
                      <li>• Templates purchased over 24 hours ago</li>
                      <li>• Customization service fees</li>
                      <li>• Third-party plugin costs</li>
                      <li>• Hosting or domain expenses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/60 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      Alternative Solutions
                    </h4>
                    <p className="text-slate-700 text-sm mb-2">Before requesting a refund, consider:</p>
                    <ul className="text-slate-700 space-y-1 text-sm">
                      <li>• Free technical support</li>
                      <li>• Template exchange options</li>
                      <li>• Customization assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                  Need Help with Refunds?
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Our customer service team is ready to assist you with any refund-related questions or concerns.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-4">Email Support</h4>
                  <div className="space-y-2">
                    <p className="text-slate-300">Primary: maklesurrahaman39@outlook.com</p>
                    <p className="text-slate-300">Secondary: alexbotix@outlook.com</p>
                    <p className="text-sm text-slate-400 mt-4">
                      📧 Include "REFUND REQUEST" in subject line<br/>
                      ⏰ Response within 2 hours during business days
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-4">Phone Support</h4>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-lg">+91 8370030184</p>
                    <p className="text-sm text-slate-400 mt-4">
                      📞 Monday - Friday: 9:00 AM - 6:00 PM IST<br/>
                      🌍 Saturday: 10:00 AM - 4:00 PM IST<br/>
                      ⚡ For urgent refund requests only
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center border border-blue-200/60">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Questions About Our Refund Policy?
              </h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                We're committed to ensuring your satisfaction. If you have any questions about our cancellation 
                and refund policy, don't hesitate to reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium">
                  View Terms & Conditions
                </Button>
              </div>
            </div>

            {/* Last Updated */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200/60 text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-bold text-slate-900 text-lg">Policy Last Updated</span>
              </div>
              <p className="text-slate-700 mb-4">
                This Cancellation & Refunds Policy was last updated on <strong>{new Date().toLocaleDateString()}</strong>
              </p>
              <p className="text-sm text-slate-600">
                We may update this policy to reflect changes in our processes or legal requirements. 
                Significant changes will be communicated via email to all customers.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationRefunds;
