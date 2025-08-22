import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                Your privacy is important to us. This policy explains how we collect and use your information.
              </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none prose-sm md:prose-base">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us when you create an account, make a purchase, 
                  or contact us for support. This includes your name, email address, payment information, and 
                  any messages you send us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Process your orders and deliver web design templates</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send you important updates about your purchases</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With payment processors to handle transactions securely</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With service providers who assist in our operations (under strict confidentiality)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. All payment information is 
                  processed securely through encrypted connections.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize 
                  content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your personal information. Contact us at 
                  maklesurrahaman39@outlook.com or alexbotix@outlook.com to exercise these rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-xl space-y-2">
                  <p className="text-foreground font-medium">Email Support:</p>
                  <p className="text-muted-foreground">maklesurrahaman39@outlook.com</p>
                  <p className="text-muted-foreground">alexbotix@outlook.com</p>
                  <p className="text-foreground font-medium">Phone Support:</p>
                  <p className="text-muted-foreground">+91 8370030184</p>
                </div>
              </section>

              <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  This Privacy Policy was last updated on {new Date().toLocaleDateString()}. 
                  We may update this policy from time to time, and we will notify you of any significant changes.
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

export default PrivacyPolicy;