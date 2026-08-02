export type Currency = 'BDT' | 'INR' | 'USD';
export type Language = 'EN' | 'BN' | 'HI';

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'STAFF' | 'CUSTOMER';

export interface ProductVariant {
  color?: string;
  storage?: string;
  ram?: string;
  size?: string;
  priceOffset?: number;
  stock?: number;
}

export interface Specification {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  slug: string;
  brand: string;
  model: string;
  category: string;
  subcategory?: string;
  images: string[];
  videoUrl?: string;
  description: string;
  specifications: Specification[];
  regularPrice: number; // In USD base
  salePrice?: number;   // In USD base
  discount?: number;    // %
  stockQuantity: number;
  variants?: {
    colors?: string[];
    storages?: string[];
    rams?: string[];
  };
  weight?: string;
  dimensions?: string;
  warranty?: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  reviews?: ProductReview[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFlashSale?: boolean;
  flashSaleEndTime?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  subcategories: string[];
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
  selectedRam?: string;
}

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'PACKED'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED';

export type PaymentGatewayBD = 'bKash' | 'Nagad' | 'Rocket' | 'SSLCommerz' | 'Bank Transfer' | 'Cash on Delivery';
export type PaymentGatewayIN = 'Razorpay' | 'UPI' | 'PhonePe' | 'Google Pay' | 'Paytm' | 'Cash on Delivery';
export type PaymentGateway = PaymentGatewayBD | PaymentGatewayIN;

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    country: 'Bangladesh' | 'India';
    postalCode: string;
  };
  items: CartItem[];
  paymentMethod: PaymentGateway;
  paymentStatus: 'PAID' | 'PENDING' | 'FAILED';
  status: OrderStatus;
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  currency: Currency;
  couponCode?: string;
  trackingNumber: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  minPurchase: number;
  expiresAt: string;
  isActive: boolean;
}

export interface PaymentGatewayConfig {
  id: string;
  name: string;
  country: 'Bangladesh' | 'India';
  enabled: boolean;
  merchantId?: string;
  feePercentage?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: Role;
  username?: string;
  avatar?: string;
}
