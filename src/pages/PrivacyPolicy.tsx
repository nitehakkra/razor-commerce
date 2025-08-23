import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Eye, Users, CheckCircle, FileText, Globe, AlertTriangle, Mail, Phone, MapPin, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 bg-clip-text text-transparent leading-tight mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Your privacy and trust are fundamental to our business. This comprehensive policy explains how Razor Commerce protects and handles your personal information when you purchase our premium web UI design templates and components.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <Lock className="w-4 h-4 mr-2 inline" />
                SSL Encrypted
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <Shield className="w-4 h-4 mr-2 inline" />
                GDPR Compliant
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <CheckCircle className="w-4 h-4 mr-2 inline" />
                ISO 27001 Certified
              </div>
            </div>

            <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Quick Overview Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Data Transparency</h3>
                <p className="text-slate-700">We clearly explain what data we collect, why we collect it, and how we use it to improve your UI design experience.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Maximum Security</h3>
                <p className="text-slate-700">Industry-leading encryption and security measures protect your personal and payment information at all times.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4">Your Control</h3>
                <p className="text-slate-700">You have complete control over your data with easy access, update, export, and deletion options available 24/7.</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-16">
            
            {/* Information Collection */}
            <section className="bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">
                  Information We Collect
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Personal Information
                  </h3>
                  <ul className="text-slate-700 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                      <span><strong>Account Details:</strong> Name, email address, username, and profile information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                      <span><strong>Contact Information:</strong> Billing address, phone number for order confirmations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                      <span><strong>Professional Details:</strong> Company name, job title, industry (for personalized recommendations)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Technical Information
                  </h3>
                  <ul className="text-slate-700 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span><strong>Usage Analytics:</strong> Pages viewed, templates downloaded, time spent browsing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span><strong>Device Information:</strong> Browser type, operating system, screen resolution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span><strong>Purchase History:</strong> Templates bought, payment methods, transaction details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
                  How We Use Your Information
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Service Delivery</h4>
                  <p className="text-slate-700 text-sm">Process orders, deliver UI templates, manage downloads, and provide technical support for our design assets.</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Personalization</h4>
                  <p className="text-slate-700 text-sm">Recommend relevant UI components, customize your dashboard, and enhance your design workflow experience.</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Communication</h4>
                  <p className="text-slate-700 text-sm">Send order confirmations, design updates, security alerts, and important account notifications.</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-green-600 bg-clip-text text-transparent">
                  Enterprise-Grade Security
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-xl">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">256-bit SSL Encryption</h4>
                      <p className="text-slate-700 text-sm">All data transmission is protected with bank-level encryption protocols.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-xl">
                      <Lock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Secure Payment Processing</h4>
                      <p className="text-slate-700 text-sm">PCI DSS compliant payment processing through Stripe and PayPal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-xl">
                      <Eye className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">24/7 Security Monitoring</h4>
                      <p className="text-slate-700 text-sm">Continuous monitoring and threat detection to protect your data.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-xl mb-4">Security Certifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-400" />
                      <span>ISO 27001 Information Security Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-400" />
                      <span>SOC 2 Type II Compliance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-400" />
                      <span>GDPR & CCPA Compliant</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-400" />
                      <span>Regular Security Audits</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 to-amber-600 bg-clip-text text-transparent">
                  Your Privacy Rights
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Access</h4>
                  <p className="text-slate-700 text-sm">View all personal data we have about you</p>
                </div>
                
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Update</h4>
                  <p className="text-slate-700 text-sm">Correct or modify your information anytime</p>
                </div>
                
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Export</h4>
                  <p className="text-slate-700 text-sm">Download your data in portable format</p>
                </div>
                
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Delete</h4>
                  <p className="text-slate-700 text-sm">Request complete account and data removal</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                  Data Protection Contact
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Our dedicated privacy team is available 24/7 to address your concerns and requests regarding your personal data.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Email Support</h4>
                  <p className="text-slate-300 mb-2">privacy@razorcommerce.com</p>
                  <p className="text-slate-300">maklesurrahaman39@outlook.com</p>
                  <p className="text-sm text-slate-400 mt-2">Response within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Phone Support</h4>
                  <p className="text-slate-300 mb-2">+91 8370030184</p>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-400 mt-2">Monday - Friday, 9 AM - 6 PM IST</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Office Address</h4>
                  <p className="text-slate-300 mb-2">Razor Commerce LLP</p>
                  <p className="text-slate-300">Bangalore, Karnataka</p>
                  <p className="text-sm text-slate-400 mt-2">India 560001</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200/60 text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600 mr-2" />
                <span className="font-bold text-slate-900 text-lg">Last Updated</span>
              </div>
              <p className="text-slate-700 mb-4">
                This Privacy Policy was last updated on <strong>{new Date().toLocaleDateString()}</strong>
              </p>
              <p className="text-sm text-slate-600">
                We may update this policy periodically to reflect changes in our practices or legal requirements. 
                We'll notify you of any significant changes via email or through our platform.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;