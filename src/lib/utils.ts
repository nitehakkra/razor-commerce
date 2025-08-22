import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Review } from '@/types/product'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}

// Random review generation utilities
const reviewComments = [
  "Absolutely stunning design! The quality exceeded my expectations and the download was instant.",
  "Perfect for my project. Clean, modern, and very professional looking.",
  "Great value for money. The design is well-structured and easy to customize.",
  "Amazing attention to detail. This saved me weeks of design work.",
  "High-quality template with excellent documentation. Highly recommended!",
  "Beautiful design system. Everything is well organized and pixel-perfect.",
  "Outstanding work! The responsive design works flawlessly across all devices.",
  "Exactly what I was looking for. Professional quality at an affordable price.",
  "Impressive design with great attention to user experience. Love it!",
  "Top-notch quality. The design is modern, clean, and very easy to implement.",
  "Fantastic template! The color scheme and typography are perfectly balanced.",
  "Excellent design with great customization options. Worth every penny.",
  "Professional grade template. The attention to detail is remarkable.",
  "Clean, modern design that's easy to work with. Highly satisfied!",
  "Beautiful interface design. The components are well-crafted and reusable.",
  "Amazing quality and instant delivery. Perfect for my client project.",
  "Sleek design with excellent user flow. Couldn't be happier with this purchase.",
  "Top quality template with great documentation. Easy to customize and implement.",
  "Outstanding design work. The layout is intuitive and visually appealing.",
  "Excellent value proposition. The design quality is professional grade."
];

const reviewerNames = [
  "Alex Chen", "Sarah Johnson", "Mike Rodriguez", "Emily Davis", "David Kim",
  "Jessica Taylor", "Ryan Thompson", "Amanda Wilson", "Chris Martinez", "Lisa Anderson",
  "Kevin Brown", "Michelle Garcia", "Daniel Lee", "Rachel White", "James Miller",
  "Nicole Jackson", "Brian Clark", "Stephanie Lewis", "Mark Turner", "Ashley Moore",
  "Justin Hall", "Victoria Young", "Brandon Scott", "Samantha Green", "Tyler Adams",
  "Megan Baker", "Jordan Hill", "Alexis Carter", "Cameron Wright", "Morgan Evans"
];

export function generateRandomReviews(productId: string, count: number = Math.floor(Math.random() * 5) + 5): Review[] {
  const reviews: Review[] = [];
  const usedNames = new Set<string>();
  
  for (let i = 0; i < count; i++) {
    let userName;
    do {
      userName = reviewerNames[Math.floor(Math.random() * reviewerNames.length)];
    } while (usedNames.has(userName));
    usedNames.add(userName);
    
    const rating = Math.random() < 0.7 ? 5 : Math.random() < 0.8 ? 4 : Math.random() < 0.9 ? 3 : 2;
    const daysAgo = Math.floor(Math.random() * 90) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    reviews.push({
      id: `${productId}-review-${i + 1}`,
      userName,
      rating,
      comment: reviewComments[Math.floor(Math.random() * reviewComments.length)],
      date: date.toISOString().split('T')[0],
      verified: Math.random() > 0.3 // 70% chance of being verified
    });
  }
  
  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function calculateAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

export function getRandomRating(): number {
  // Generate ratings with realistic distribution (mostly 4-5 stars)
  const rand = Math.random();
  if (rand < 0.5) return 5;
  if (rand < 0.8) return 4.5;
  if (rand < 0.95) return 4;
  if (rand < 0.98) return 3.5;
  return 3;
}
