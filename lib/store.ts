'use client';

// ============================================================
// AUTOFLOW E-COMMERCE — GLOBAL STATE MANAGEMENT
// React Context with localStorage persistence
// Handles: Cart, Wishlist, Compare, Auth, Admin, Blog, CMS, etc.
// ============================================================

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  Product, CartItem, Order, Coupon, PaymentGatewayConfig,
  Currency, Language, User, BlogPost, BlogComment,
  SupportTicket, TicketReply, Notification, CmsPage
} from './types';
import {
  INITIAL_PRODUCTS, INITIAL_CATEGORIES, INITIAL_ORDERS,
  INITIAL_COUPONS, INITIAL_GATEWAYS, INITIAL_BLOG_POSTS,
  INITIAL_TICKETS, INITIAL_NOTIFICATIONS
} from './mockData';

// ---- CONTEXT INTERFACE ----

interface StoreContextType {
  // Currency & Language
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  formatPrice: (priceInUSD: number) => string;
  convertPrice: (priceInUSD: number) => number;

  // Dark Mode
  darkMode: boolean;
  toggleDarkMode: () => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, storage?: string, ram?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Wishlist & Compare
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isInCompare: (productId: string) => boolean;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;

  // Quick View Modal
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Recently Viewed
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;

  // Search History
  searchHistory: string[];
  addToSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;

  // Admin Data & Mutators
  products: Product[];
  orders: Order[];
  coupons: Coupon[];
  gateways: PaymentGatewayConfig[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  duplicateProduct: (product: Product) => void;
  bulkDeleteProducts: (ids: string[]) => void;
  bulkUpdatePrices: (ids: string[], percentage: number) => void;
  bulkUpdateStock: (ids: string[], quantity: number) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  addOrderNote: (orderId: string, note: string) => void;
  toggleGateway: (gatewayId: string) => void;
  addCoupon: (coupon: Coupon) => void;
  updateCoupon: (coupon: Coupon) => void;
  deleteCoupon: (id: string) => void;

  // Checkout & Order Submission
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  placeOrder: (orderDetails: Omit<Order, 'id' | 'orderNumber' | 'date' | 'trackingNumber'>) => Order;

  // Authentication
  currentUser: User | null;
  isAdminLoggedIn: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  loginCustomer: (email: string, name?: string) => void;
  registerCustomer: (name: string, email: string, phone: string) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;

  // Blog
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  addBlogComment: (postId: string, comment: BlogComment) => void;

  // Support Tickets
  tickets: SupportTicket[];
  createTicket: (ticket: SupportTicket) => void;
  addTicketReply: (ticketId: string, reply: TicketReply) => void;
  updateTicketStatus: (ticketId: string, status: SupportTicket['status']) => void;

  // Notifications
  notifications: Notification[];
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  unreadCount: number;

  // Toast Notification
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Conversion rates against USD base
const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  BDT: 118.5,
  INR: 83.5
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  BDT: '৳',
  INR: '₹'
};

// ---- STORE PROVIDER ----

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [language, setLanguage] = useState<Language>('EN');
  const [darkMode, setDarkMode] = useState(true);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [coupons, setCoupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [gateways, setGateways] = useState<PaymentGatewayConfig[]>(INITIAL_GATEWAYS);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [tickets, setTickets] = useState<SupportTicket[]>(INITIAL_TICKETS);
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // ---- LOAD FROM LOCALSTORAGE ----

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('autoflow_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem('autoflow_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedProducts = localStorage.getItem('autoflow_products');
      if (savedProducts) setProducts(JSON.parse(savedProducts));

      const savedOrders = localStorage.getItem('autoflow_orders');
      if (savedOrders) setOrders(JSON.parse(savedOrders));

      const savedUser = localStorage.getItem('autoflow_user');
      if (savedUser) setCurrentUser(JSON.parse(savedUser));

      const savedRecentlyViewed = localStorage.getItem('autoflow_recently_viewed');
      if (savedRecentlyViewed) setRecentlyViewed(JSON.parse(savedRecentlyViewed));

      const savedSearchHistory = localStorage.getItem('autoflow_search_history');
      if (savedSearchHistory) setSearchHistory(JSON.parse(savedSearchHistory));

      const savedDarkMode = localStorage.getItem('autoflow_dark_mode');
      if (savedDarkMode !== null) setDarkMode(JSON.parse(savedDarkMode));
    } catch (e) {
      console.error('Error loading local state', e);
    }
  }, []);

  // ---- SAVE TO LOCALSTORAGE ----

  useEffect(() => { localStorage.setItem('autoflow_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('autoflow_wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('autoflow_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('autoflow_orders', JSON.stringify(orders)); }, [orders]);
  useEffect(() => { localStorage.setItem('autoflow_recently_viewed', JSON.stringify(recentlyViewed)); }, [recentlyViewed]);
  useEffect(() => { localStorage.setItem('autoflow_search_history', JSON.stringify(searchHistory)); }, [searchHistory]);
  useEffect(() => { localStorage.setItem('autoflow_dark_mode', JSON.stringify(darkMode)); }, [darkMode]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('autoflow_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('autoflow_user');
    }
  }, [currentUser]);

  // ---- TOAST ----

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  }, []);

  // ---- DARK MODE ----

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', next);
      }
      return next;
    });
  }, []);

  // ---- PRICE CONVERTERS ----

  const convertPrice = useCallback((priceInUSD: number): number => {
    return Math.round(priceInUSD * (EXCHANGE_RATES[currency] || 1));
  }, [currency]);

  const formatPrice = useCallback((priceInUSD: number): string => {
    const converted = Math.round(priceInUSD * (EXCHANGE_RATES[currency] || 1));
    return `${CURRENCY_SYMBOLS[currency]}${converted.toLocaleString()}`;
  }, [currency]);

  // ---- CART OPERATIONS ----

  const addToCart = useCallback((product: Product, quantity = 1, color?: string, storage?: string, ram?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color && item.selectedStorage === storage
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, {
        product, quantity,
        selectedColor: color || product.variants?.colors?.[0],
        selectedStorage: storage || product.variants?.storages?.[0],
        selectedRam: ram || product.variants?.rams?.[0]
      }];
    });
    showToast(`Added "${product.name}" to cart`);
    setIsCartOpen(true);
  }, [showToast]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  }, [showToast]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) { removeFromCart(productId); return; }
    setCart((prev) => prev.map((item) => item.product.id === productId ? { ...item, quantity } : item));
  }, [removeFromCart]);

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((acc, item) => {
    const price = item.product.salePrice || item.product.regularPrice;
    return acc + price * item.quantity;
  }, 0);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // ---- WISHLIST & COMPARE ----

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) { showToast('Removed from wishlist'); return prev.filter((p) => p.id !== product.id); }
      showToast('Added to wishlist');
      return [...prev, product];
    });
  }, [showToast]);

  const isInWishlist = useCallback((productId: string) => wishlist.some((p) => p.id === productId), [wishlist]);

  const toggleCompare = useCallback((product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      if (prev.length >= 4) { showToast('You can compare max 4 products at a time'); return prev; }
      showToast('Added to comparison');
      return [...prev, product];
    });
  }, [showToast]);

  const isInCompare = useCallback((productId: string) => compareList.some((p) => p.id === productId), [compareList]);

  // ---- RECENTLY VIEWED ----

  const addToRecentlyViewed = useCallback((product: Product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      return [product, ...filtered].slice(0, 8);
    });
  }, []);

  // ---- SEARCH HISTORY ----

  const addToSearchHistory = useCallback((query: string) => {
    if (!query.trim()) return;
    setSearchHistory((prev) => {
      const filtered = prev.filter((q) => q.toLowerCase() !== query.toLowerCase());
      return [query, ...filtered].slice(0, 10);
    });
  }, []);

  const clearSearchHistory = useCallback(() => setSearchHistory([]), []);

  // ---- ADMIN: PRODUCT OPERATIONS ----

  const addProduct = useCallback((newProd: Product) => {
    setProducts((prev) => [newProd, ...prev]);
    showToast('Product added successfully');
  }, [showToast]);

  const updateProduct = useCallback((updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    showToast('Product updated successfully');
  }, [showToast]);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast('Product deleted');
  }, [showToast]);

  const duplicateProduct = useCallback((product: Product) => {
    const duplicated: Product = {
      ...product,
      id: `prod-${Date.now()}`,
      name: `${product.name} (Copy)`,
      sku: `${product.sku}-COPY-${Math.floor(Math.random() * 1000)}`,
      slug: `${product.slug}-copy-${Date.now()}`
    };
    setProducts((prev) => [duplicated, ...prev]);
    showToast('Product duplicated successfully');
  }, [showToast]);

  const bulkDeleteProducts = useCallback((ids: string[]) => {
    setProducts((prev) => prev.filter((p) => !ids.includes(p.id)));
    showToast(`${ids.length} products deleted`);
  }, [showToast]);

  const bulkUpdatePrices = useCallback((ids: string[], percentage: number) => {
    setProducts((prev) => prev.map((p) => {
      if (!ids.includes(p.id)) return p;
      const factor = 1 + percentage / 100;
      return {
        ...p,
        regularPrice: Math.round(p.regularPrice * factor),
        salePrice: p.salePrice ? Math.round(p.salePrice * factor) : undefined
      };
    }));
    showToast(`Prices updated for ${ids.length} products`);
  }, [showToast]);

  const bulkUpdateStock = useCallback((ids: string[], quantity: number) => {
    setProducts((prev) => prev.map((p) => {
      if (!ids.includes(p.id)) return p;
      return { ...p, stockQuantity: Math.max(0, p.stockQuantity + quantity) };
    }));
    showToast(`Stock updated for ${ids.length} products`);
  }, [showToast]);

  // ---- ADMIN: ORDER OPERATIONS ----

  const updateOrderStatus = useCallback((orderId: string, status: Order['status']) => {
    setOrders((prev) => prev.map((o) => {
      if (o.id !== orderId) return o;
      const timelineEvent = {
        status,
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
        note: `Status changed to ${status}`
      };
      return {
        ...o,
        status,
        timeline: [...(o.timeline || []), timelineEvent]
      };
    }));
    showToast(`Order status updated to ${status}`);
  }, [showToast]);

  const addOrderNote = useCallback((orderId: string, note: string) => {
    setOrders((prev) => prev.map((o) => o.id === orderId ? { ...o, notes: note } : o));
    showToast('Order note added');
  }, [showToast]);

  // ---- ADMIN: GATEWAY OPERATIONS ----

  const toggleGateway = useCallback((gatewayId: string) => {
    setGateways((prev) => prev.map((g) => (g.id === gatewayId ? { ...g, enabled: !g.enabled } : g)));
    showToast('Payment gateway settings updated');
  }, [showToast]);

  // ---- ADMIN: COUPON OPERATIONS ----

  const addCoupon = useCallback((c: Coupon) => {
    setCoupons((prev) => [c, ...prev]);
    showToast('Coupon code created');
  }, [showToast]);

  const updateCoupon = useCallback((c: Coupon) => {
    setCoupons((prev) => prev.map((existing) => existing.id === c.id ? c : existing));
    showToast('Coupon updated');
  }, [showToast]);

  const deleteCoupon = useCallback((id: string) => {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
    showToast('Coupon code removed');
  }, [showToast]);

  // ---- COUPON APPLICATION ----

  const applyCoupon = useCallback((code: string) => {
    const found = coupons.find(
      (c) => c.code.toUpperCase() === code.trim().toUpperCase() && c.isActive
    );
    if (!found) return { success: false, message: 'Invalid or expired coupon code' };
    if (found.minPurchase && cartTotal < found.minPurchase) {
      return { success: false, message: `Minimum purchase of $${found.minPurchase} required` };
    }
    if (found.usageLimit && found.usedCount >= found.usageLimit) {
      return { success: false, message: 'Coupon usage limit reached' };
    }
    setAppliedCoupon(found);
    return { success: true, message: `Coupon ${found.code} applied successfully!` };
  }, [coupons, cartTotal]);

  const removeCoupon = useCallback(() => setAppliedCoupon(null), []);

  // ---- ORDER PLACEMENT ----

  const placeOrder = useCallback((
    orderDetails: Omit<Order, 'id' | 'orderNumber' | 'date' | 'trackingNumber'>
  ): Order => {
    const newOrder: Order = {
      ...orderDetails,
      id: `ord-${Date.now().toString().slice(-6)}`,
      orderNumber: `AF-${orderDetails.shippingAddress.country === 'Bangladesh' ? 'BD' : 'IN'}-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().replace('T', ' ').slice(0, 16),
      trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
      timeline: [
        { status: 'PENDING', timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16), note: 'Order placed' },
        { status: orderDetails.status, timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16), note: 'Payment confirmed' }
      ]
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    showToast('Order placed successfully!');
    return newOrder;
  }, [clearCart, showToast]);

  // ---- AUTHENTICATION ----

  const loginAdmin = useCallback((user: string, pass: string): boolean => {
    if (user.trim().toLowerCase() === 'alim' && pass === '123456') {
      const adminUser: User = {
        id: 'usr-admin-1',
        name: 'Alim Super Admin',
        username: 'Alim',
        email: 'admin@autoflow.com',
        role: 'SUPER_ADMIN',
        rewardPoints: 0,
        joinedDate: '2026-01-01'
      };
      setCurrentUser(adminUser);
      showToast('Welcome back, Admin Alim!');
      return true;
    }
    return false;
  }, [showToast]);

  const loginCustomer = useCallback((email: string, name?: string) => {
    const custUser: User = {
      id: `usr-cust-${Date.now()}`,
      name: name || email.split('@')[0],
      email,
      role: 'CUSTOMER',
      rewardPoints: 150,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setCurrentUser(custUser);
    showToast('Logged in successfully');
  }, [showToast]);

  const registerCustomer = useCallback((name: string, email: string, phone: string) => {
    const custUser: User = {
      id: `usr-cust-${Date.now()}`,
      name,
      email,
      phone,
      role: 'CUSTOMER',
      rewardPoints: 100,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setCurrentUser(custUser);
    showToast('Account created successfully! Welcome to Autoflow.');
  }, [showToast]);

  const logout = useCallback(() => {
    setCurrentUser(null);
    showToast('Logged out');
  }, [showToast]);

  const updateProfile = useCallback((updates: Partial<User>) => {
    setCurrentUser((prev) => prev ? { ...prev, ...updates } : null);
    showToast('Profile updated');
  }, [showToast]);

  const isAdminLoggedIn = currentUser?.role === 'SUPER_ADMIN' || currentUser?.role === 'ADMIN';

  // ---- BLOG ----

  const addBlogPost = useCallback((post: BlogPost) => {
    setBlogPosts((prev) => [post, ...prev]);
    showToast('Blog post published');
  }, [showToast]);

  const updateBlogPost = useCallback((post: BlogPost) => {
    setBlogPosts((prev) => prev.map((p) => p.id === post.id ? post : p));
    showToast('Blog post updated');
  }, [showToast]);

  const deleteBlogPost = useCallback((id: string) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id));
    showToast('Blog post deleted');
  }, [showToast]);

  const addBlogComment = useCallback((postId: string, comment: BlogComment) => {
    setBlogPosts((prev) => prev.map((p) => {
      if (p.id !== postId) return p;
      return { ...p, comments: [...p.comments, comment] };
    }));
    showToast('Comment posted');
  }, [showToast]);

  // ---- SUPPORT TICKETS ----

  const createTicket = useCallback((ticket: SupportTicket) => {
    setTickets((prev) => [ticket, ...prev]);
    showToast('Support ticket created');
  }, [showToast]);

  const addTicketReply = useCallback((ticketId: string, reply: TicketReply) => {
    setTickets((prev) => prev.map((t) => {
      if (t.id !== ticketId) return t;
      return { ...t, replies: [...t.replies, reply], updatedAt: new Date().toISOString().replace('T', ' ').slice(0, 16) };
    }));
    showToast('Reply sent');
  }, [showToast]);

  const updateTicketStatus = useCallback((ticketId: string, status: SupportTicket['status']) => {
    setTickets((prev) => prev.map((t) => t.id === ticketId ? { ...t, status } : t));
    showToast('Ticket status updated');
  }, [showToast]);

  // ---- NOTIFICATIONS ----

  const markNotificationRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, isRead: true } : n));
  }, []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // ---- PROVIDE CONTEXT ----

  return (
    <StoreContext.Provider
      value={{
        currency, setCurrency, language, setLanguage, formatPrice, convertPrice,
        darkMode, toggleDarkMode,
        cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, isCartOpen, setIsCartOpen,
        wishlist, toggleWishlist, isInWishlist, compareList, toggleCompare, isInCompare, isCompareOpen, setIsCompareOpen,
        quickViewProduct, setQuickViewProduct,
        recentlyViewed, addToRecentlyViewed,
        searchHistory, addToSearchHistory, clearSearchHistory,
        products, orders, coupons, gateways,
        addProduct, updateProduct, deleteProduct, duplicateProduct,
        bulkDeleteProducts, bulkUpdatePrices, bulkUpdateStock,
        updateOrderStatus, addOrderNote, toggleGateway,
        addCoupon, updateCoupon, deleteCoupon,
        appliedCoupon, applyCoupon, removeCoupon, placeOrder,
        currentUser, isAdminLoggedIn, loginAdmin, loginCustomer, registerCustomer, logout, updateProfile,
        blogPosts, addBlogPost, updateBlogPost, deleteBlogPost, addBlogComment,
        tickets, createTicket, addTicketReply, updateTicketStatus,
        notifications, markNotificationRead, markAllNotificationsRead, unreadCount,
        toastMessage, showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};
