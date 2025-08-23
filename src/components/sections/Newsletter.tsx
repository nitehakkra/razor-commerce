
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    // Simulate persistence; store locally for now
    const existing = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    const updated = Array.isArray(existing) ? existing : [];
    if (!updated.includes(email)) {
      updated.push(email);
      localStorage.setItem('newsletterSubscribers', JSON.stringify(updated));
    }
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast.success('Subscribed successfully!');
    }, 500);
  };

  return (
    <section className="section-padding">
      <div className="container-responsive">
        <Card className="card-elegant">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold">Stay in the loop</h3>
                <p className="text-sm text-muted-foreground">Get updates on new UI kits, templates and offers.</p>
              </div>
              <form onSubmit={onSubmit} className="flex w-full md:w-auto gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10"
                  aria-label="Email address"
                />
                <Button type="submit" className="h-10" disabled={loading}>
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
