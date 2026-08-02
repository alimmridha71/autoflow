'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  CartItem,
  Order,
  Coupon,
  PaymentGatewayConfig,
  Currency,
  Language,
  User
} from './types';
import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_ORDERS,
  INITIAL_COUPONS,
  INITIAL_GATEWAYS
} from './mockData';

interface StoreContextType {
  // Currency & Language
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  formatPrice: (priceInUSD: number) => string;
  convertPrice: (priceInUSD: number) => number;

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

  // Admin Data & Mutators
  products: Product[];
  orders: Order[];
  coupons: Coupon[];
  gateways: PaymentGatewayConfig[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  toggleGateway: (gatewayId: string) => void;
  addCoupon: (coupon: Coupon) => void;
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
  loginCustomer: (email: string) => void;
  logout: () => void;

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

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [language, setLanguage] = useState<Language>('EN');

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [coupons, setCoupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [gateways, setGateways] = useState<PaymentGatewayConfig[]>(INITIAL_GATEWAYS);

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load state from localStorage on mount
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
    } catch (e) {
      console.error('Error loading local state', e);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('autoflow_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('autoflow_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('autoflow_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('autoflow_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('autoflow_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('autoflow_user');
    }
  }, [currentUser]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Price Converters
  const convertPrice = (priceInUSD: number): number => {
    const rate = EXCHANGE_RATES[currency] || 1;
    return Math.round(priceInUSD * rate);
  };

  const formatPrice = (priceInUSD: number): string => {
    const converted = convertPrice(priceInUSD);
    const symbol = CURRENCY_SYMBOLS[currency];
    return `${symbol}${converted.toLocaleString()}`;
  };

  // Cart operations
  const addToCart = (
    product: Product,
    quantity = 1,
    color?: string,
    storage?: string,
    ram?: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedStorage === storage
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedColor: color || product.variants?.colors?.[0],
          selectedStorage: storage || product.variants?.storages?.[0],
          selectedRam: ram || product.variants?.rams?.[0]
        }
      ];
    });
    showToast(`Added "${product.name}" to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((acc, item) => {
    const price = item.product.salePrice || item.product.regularPrice;
    return acc + price * item.quantity;
  }, 0);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Wishlist & Compare
  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast('Added to wishlist');
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.some((p) => p.id === productId);

  const toggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          showToast('You can compare max 4 products at a time');
          return prev;
        }
        showToast('Added to comparison');
        return [...prev, product];
      }
    });
  };

  const isInCompare = (productId: string) => compareList.some((p) => p.id === productId);

  // Admin Data operations
  const addProduct = (newProd: Product) => {
    setProducts((prev) => [newProd, ...prev]);
    showToast('Product added successfully');
  };

  const updateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    showToast('Product updated successfully');
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast('Product deleted');
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
    showToast(`Order #${orderId} status updated to ${status}`);
  };

  const toggleGateway = (gatewayId: string) => {
    setGateways((prev) =>
      prev.map((g) => (g.id === gatewayId ? { ...g, enabled: !g.enabled } : g))
    );
    showToast('Payment gateway settings updated');
  };

  const addCoupon = (c: Coupon) => {
    setCoupons((prev) => [c, ...prev]);
    showToast('Coupon code created');
  };

  const deleteCoupon = (id: string) => {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
    showToast('Coupon code removed');
  };

  // Coupons
  const applyCoupon = (code: string) => {
    const found = coupons.find(
      (c) => c.code.toUpperCase() === code.trim().toUpperCase() && c.isActive
    );
    if (!found) {
      return { success: false, message: 'Invalid or expired coupon code' };
    }
    if (found.minPurchase && cartTotal < found.minPurchase) {
      return {
        success: false,
        message: `Minimum purchase of $${found.minPurchase} required for this coupon`
      };
    }
    setAppliedCoupon(found);
    return { success: true, message: `Coupon ${found.code} applied successfully!` };
  };

  const removeCoupon = () => setAppliedCoupon(null);

  // Order Submission
  const placeOrder = (
    orderDetails: Omit<Order, 'id' | 'orderNumber' | 'date' | 'trackingNumber'>
  ): Order => {
    const newOrder: Order = {
      ...orderDetails,
      id: `ord-${Date.now().toString().slice(-6)}`,
      orderNumber: `AF-${orderDetails.shippingAddress.country === 'Bangladesh' ? 'BD' : 'IN'}-${Math.floor(
        10000 + Math.random() * 90000
      )}`,
      date: new Date().toISOString().replace('T', ' ').slice(0, 16),
      trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}`
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    showToast('Order placed successfully!');
    return newOrder;
  };

  // Auth: Admin credential demo check ("Alim" / "123456")
  const loginAdmin = (user: string, pass: string): boolean => {
    if (user.trim().toLowerCase() === 'alim' && pass === '123456') {
      const adminUser: User = {
        id: 'usr-admin-1',
        name: 'Alim Super Admin',
        username: 'Alim',
        email: 'admin@autoflow.com',
        role: 'SUPER_ADMIN'
      };
      setCurrentUser(adminUser);
      showToast('Welcome back, Admin Alim!');
      return true;
    }
    return false;
  };

  const loginCustomer = (email: string) => {
    const custUser: User = {
      id: `usr-cust-${Date.now()}`,
      name: email.split('@')[0],
      email,
      role: 'CUSTOMER'
    };
    setCurrentUser(custUser);
    showToast('Logged in as customer');
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Logged out');
  };

  const isAdminLoggedIn = currentUser?.role === 'SUPER_ADMIN' || currentUser?.role === 'ADMIN';

  return (
    <StoreContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
        formatPrice,
        convertPrice,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        toggleCompare,
        isInCompare,
        isCompareOpen,
        setIsCompareOpen,
        quickViewProduct,
        setQuickViewProduct,
        products,
        orders,
        coupons,
        gateways,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        toggleGateway,
        addCoupon,
        deleteCoupon,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        placeOrder,
        currentUser,
        isAdminLoggedIn,
        loginAdmin,
        loginCustomer,
        logout,
        toastMessage,
        showToast
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
