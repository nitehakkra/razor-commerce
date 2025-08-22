import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground">
                Terms & Conditions
              </h1>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                Please read these terms carefully before using our web design template services.
              </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none prose-sm md:prose-base">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using DesignCraft services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Services</h2>
                <p className="text-muted-foreground">
                  DesignCraft provides premium web design templates, UI/UX design kits, and related digital 
                  design assets for commercial and personal use.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">License & Usage Rights</h2>
                <p className="text-muted-foreground">
                  Upon purchase, you receive a license to use our design templates with the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use templates for unlimited personal and commercial projects</li>
                  <li>Modify and customize templates to fit your needs</li>
                  <li>Create derivative works based on our templates</li>
                </ul>
                <p className="text-muted-foreground font-medium">You may NOT:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Resell or redistribute templates as-is</li>
                  <li>Share login credentials or downloaded files</li>
                  <li>Create competing template marketplaces using our designs</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Payment & Pricing</h2>
                <p className="text-muted-foreground">
                  All prices are listed in Indian Rupees (₹). Payment is processed securely through Razorpay. 
                  Prices may change without notice, but existing purchases are not affected.
                </p>
              </section>

              <section className="space-y-4 bg-accent/10 p-6 rounded-xl border border-accent/20">
                <h2 className="text-2xl font-display font-semibold text-accent">Refund Policy</h2>
                <div className="space-y-3">
                  <p className="text-foreground font-medium">
                    ⚡ Same-Day Refund Claims Only
                  </p>
                  <p className="text-muted-foreground">
                    Refund requests must be submitted on the same day as your purchase. We do not process 
                    refund requests submitted after the purchase date.
                  </p>
                  <p className="text-foreground font-medium">
                    ⏰ Processing Time: 3-5 Business Days
                  </p>
                  <p className="text-muted-foreground">
                    Approved refunds will be processed within 3-5 business days back to your original 
                    payment method.
                  </p>
                  <p className="text-foreground font-medium">
                    📧 How to Request a Refund
                  </p>
                  <p className="text-muted-foreground">
                    Contact us immediately at maklesurrahaman39@outlook.com or alexbotix@outlook.com 
                    with your order details and reason for refund.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All design templates, graphics, and content are protected by copyright and remain the 
                  intellectual property of DesignCraft unless explicitly transferred.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  DesignCraft shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Support</h2>
                <p className="text-muted-foreground">
                  For technical support or questions about our templates, contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-xl space-y-2">
                  <p className="text-foreground font-medium">Email Support:</p>
                  <p className="text-muted-foreground">maklesurrahaman39@outlook.com</p>
                  <p className="text-muted-foreground">alexbotix@outlook.com</p>
                  <p className="text-foreground font-medium">Phone Support:</p>
                  <p className="text-muted-foreground">+91 8370030184</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  These Terms & Conditions were last updated on {new Date().toLocaleDateString()}. 
                  For questions about these terms, please contact us using the information provided above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;