
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { toast } from 'sonner';

const SupportWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill out all fields');
      return;
    }
    setLoading(true);
    const entry = { id: crypto.randomUUID(), name, email, message, createdAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('supportMessages') || '[]');
    const updated = Array.isArray(existing) ? existing : [];
    updated.push(entry);
    localStorage.setItem('supportMessages', JSON.stringify(updated));
    setTimeout(() => {
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
      setOpen(false);
      toast.success('Message sent! We will get back to you shortly.');
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="btn-hero shadow-lg">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[420px]">
          <SheetHeader>
            <SheetTitle>Contact Support</SheetTitle>
          </SheetHeader>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Textarea placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SupportWidget;
