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
const reviewComments = {
  5: [
    "Absolutely stunning design! The quality exceeded my expectations and the download was instant.",
    "Amazing attention to detail. This saved me weeks of design work.",
    "High-quality template with excellent documentation. Highly recommended!",
    "Outstanding work! The responsive design works flawlessly across all devices.",
    "Impressive design with great attention to user experience. Love it!",
    "Top-notch quality. The design is modern, clean, and very easy to implement.",
    "Fantastic template! The color scheme and typography are perfectly balanced.",
    "Professional grade template. The attention to detail is remarkable.",
    "Beautiful interface design. The components are well-crafted and reusable.",
    "Amazing quality and instant delivery. Perfect for my client project.",
    "Outstanding design work. The layout is intuitive and visually appealing."
  ],
  4: [
    "Perfect for my project. Clean, modern, and very professional looking.",
    "Great value for money. The design is well-structured and easy to customize.",
    "Beautiful design system. Everything is well organized and pixel-perfect.",
    "Exactly what I was looking for. Professional quality at an affordable price.",
    "Excellent design with great customization options. Worth every penny.",
    "Clean, modern design that's easy to work with. Highly satisfied!",
    "Sleek design with excellent user flow. Couldn't be happier with this purchase.",
    "Top quality template with great documentation. Easy to customize and implement.",
    "Excellent value proposition. The design quality is professional grade.",
    "Good design overall. Met my expectations and was easy to implement."
  ],
  3: [
    "Decent template, does the job. Could use better documentation though.",
    "Good design but took some time to customize to my needs.",
    "Solid template with nice layouts. Some components could be more polished.",
    "Fair quality for the price. The design is acceptable but not exceptional.",
    "Good starting point for a project. Required some modifications to fit my needs.",
    "Decent design system. Works well but lacks some advanced features I expected.",
    "Reasonable template with clean design. Could benefit from more customization options.",
    "Good value but the documentation could be more comprehensive.",
    "Nice design overall. A few minor issues but generally satisfied with the purchase.",
    "Adequate template for basic projects. Does what it promises but nothing more."
  ]
};

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
    
    // Generate ratings between 3-5 with realistic distribution
    const rand = Math.random();
    let rating;
    if (rand < 0.4) rating = 5;        // 40% get 5 stars
    else if (rand < 0.7) rating = 4;   // 30% get 4 stars  
    else rating = 3;                   // 30% get 3 stars
    const daysAgo = Math.floor(Math.random() * 90) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    const ratingComments = reviewComments[rating as keyof typeof reviewComments];
    const comment = ratingComments[Math.floor(Math.random() * ratingComments.length)];
    
    reviews.push({
      id: `${productId}-review-${i + 1}`,
      userName,
      rating,
      comment,
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
