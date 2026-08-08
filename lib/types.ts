// ============================================================
// AUTOFLOW E-COMMERCE — COMPLETE TYPE DEFINITIONS
// Covers: Products, Orders, Users, Blog, CMS, Inventory, etc.
// ============================================================

export type Currency = 'BDT' | 'INR' | 'USD';
export type Language = 'EN' | 'BN' | 'HI';

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'STAFF' | 'CUSTOMER';

// ---- Product Types ----

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

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ShippingInfo {
  freeShipping: boolean;
  estimatedDays: string;
  shippingFrom: string;
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
  features?: string[];
  regularPrice: number; // In USD base
  salePrice?: number;   // In USD base
  discount?: number;    // %
  stockQuantity: number;
  variants?: {
    colors?: string[];
    storages?: string[];
    rams?: string[];
    sizes?: string[];
  };
  weight?: string;
  dimensions?: string;
  warranty?: string;
  returnPolicy?: string;
  shippingInfo?: ShippingInfo;
  tags: string[];
  rating: number;
  reviewCount: number;
  reviews?: ProductReview[];
  faqs?: ProductFAQ[];
  relatedProductIds?: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFlashSale?: boolean;
  isTrending?: boolean;
  isDeal?: boolean;
  flashSaleEndTime?: string;
}

// ---- Category Types ----

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  subcategories: string[];
  itemCount: number;
  parentId?: string;
}

// ---- Cart Types ----

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
  selectedRam?: string;
}

// ---- Order Types ----

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'PACKED'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'RETURNED'
  | 'REFUNDED';

export interface OrderTimelineEvent {
  status: string;
  timestamp: string;
  note?: string;
}

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
  billingAddress?: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  items: CartItem[];
  paymentMethod: PaymentGateway;
  paymentStatus: 'PAID' | 'PENDING' | 'FAILED' | 'REFUNDED';
  status: OrderStatus;
  subtotal: number;
  discount: number;
  shippingCost: number;
  tax?: number;
  total: number;
  currency: Currency;
  couponCode?: string;
  trackingNumber: string;
  deliveryInstructions?: string;
  isGiftOrder?: boolean;
  giftMessage?: string;
  notes?: string;
  timeline?: OrderTimelineEvent[];
}

// ---- Coupon Types ----

export interface Coupon {
  id: string;
  code: string;
  discountType: 'PERCENTAGE' | 'FIXED' | 'FREE_SHIPPING';
  discountValue: number;
  minPurchase: number;
  maxDiscount?: number;
  expiresAt: string;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}

// ---- Payment Gateway Config ----

export interface PaymentGatewayConfig {
  id: string;
  name: string;
  country: 'Bangladesh' | 'India';
  enabled: boolean;
  merchantId?: string;
  feePercentage?: number;
}

// ---- User Types ----

export interface UserAddress {
  id: string;
  label: string;
  fullAddress: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: Role;
  username?: string;
  avatar?: string;
  addresses?: UserAddress[];
  rewardPoints?: number;
  joinedDate?: string;
}

// ---- Blog Types ----

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  comments: BlogComment[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogComment {
  id: string;
  author: string;
  email: string;
  content: string;
  date: string;
}

// ---- CMS Types ----

export interface CmsPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  lastUpdated: string;
  isPublished: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

// ---- Support Ticket Types ----

export interface SupportTicket {
  id: string;
  subject: string;
  message: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  createdAt: string;
  updatedAt: string;
  replies: TicketReply[];
}

export interface TicketReply {
  id: string;
  author: string;
  isAdmin: boolean;
  message: string;
  date: string;
}

// ---- Notification Types ----

export interface Notification {
  id: string;
  type: 'ORDER' | 'PROMOTION' | 'STOCK' | 'SYSTEM' | 'SUPPORT';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  link?: string;
}

// ---- Inventory Types ----

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  manager: string;
  productsCount: number;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  productsSupplied: number;
}

export interface StockEntry {
  id: string;
  productId: string;
  productName: string;
  previousStock: number;
  newStock: number;
  change: number;
  reason: string;
  date: string;
}

// ---- Shipping Types ----

export interface ShippingZone {
  id: string;
  name: string;
  countries: string[];
  methods: ShippingMethod[];
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  cost: number; // USD base
  estimatedDays: string;
  isEnabled: boolean;
}

// ---- Brand Type ----

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  productCount: number;
}
