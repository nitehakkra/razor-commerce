export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  keyFeatures?: string[];
  builtInPackages?: string[];
  specifications?: {
    version?: string;
    updated?: string;
    bootstrap?: string;
    category?: string;
    license?: string;
  };
  licenseOptions?: {
    standard: number;
    multisite: number;
    extended: number;
  };
  livePreviewUrl?: string;
  installationGuide?: string;
  changelog?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}