'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Lock,
  ArrowRight
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { PaymentGateway } from '@/lib/types';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, appliedCoupon, formatPrice, placeOrder, gateways } = useStore();

  const [country, setCountry] = useState<'Bangladesh' | 'India'>('Bangladesh');
  const [customerName, setCustomerName] = useState('Anisur Rahman');
  const [customerEmail, setCustomerEmail] = useState('anisur@example.com');
  const [customerPhone, setCustomerPhone] = useState('+880 1712-998877');
  const [address, setAddress] = useState('House 14, Road 5, Dhanmondi');
  const [city, setCity] = useState('Dhaka');
  const [state, setState] = useState('Dhaka Division');
  const [postalCode, setPostalCode] = useState('1205');

  // Payment gateway selection
  const [paymentMethod, setPaymentMethod] = useState<PaymentGateway>('bKash');

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Your Cart is Empty</h2>
        <p className="text-xs text-slate-400">Please add items to cart before checking out.</p>
      </div>
    );
  }

  const discountAmount = appliedCoupon
    ? appliedCoupon.discountType === 'FIXED'
      ? appliedCoupon.discountValue
      : (cartTotal * appliedCoupon.discountValue) / 100
    : 0;

  const shippingCost = country === 'Bangladesh' ? 5 : 8; // USD base
  const totalAmount = Math.max(0, cartTotal - discountAmount + shippingCost);

  const availableGateways = gateways.filter(
    (g) => g.enabled && g.country === country
  );

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const createdOrder = placeOrder({
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress: {
        address,
        city,
        state,
        country,
        postalCode
      },
      items: cart,
      paymentMethod,
      paymentStatus: paymentMethod === 'Cash on Delivery' ? 'PENDING' : 'PAID',
      status: 'CONFIRMED',
      subtotal: cartTotal,
      discount: discountAmount,
      shippingCost,
      total: totalAmount,
      currency: country === 'Bangladesh' ? 'BDT' : 'INR',
      couponCode: appliedCoupon?.code
    });

    router.push(`/order-confirmation/${createdOrder.id}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <Lock className="w-5 h-5 text-emerald-500" />
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Secure Checkout
        </h1>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Shipping & Billing Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Step 1: Select Country */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" /> 1. Shipping Country
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setCountry('Bangladesh');
                  setPaymentMethod('bKash');
                }}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between transition ${
                  country === 'Bangladesh'
                    ? 'border-blue-600 bg-blue-600/10 text-blue-500 font-extrabold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <span className="block text-sm">🇧🇩 Bangladesh</span>
                  <span className="text-[10px] text-slate-500 font-normal">bKash, Nagad, Rocket, SSLCommerz</span>
                </div>
                {country === 'Bangladesh' && <CheckCircle className="w-5 h-5" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setCountry('India');
                  setPaymentMethod('UPI');
                }}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between transition ${
                  country === 'India'
                    ? 'border-blue-600 bg-blue-600/10 text-blue-500 font-extrabold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <span className="block text-sm">🇮🇳 India</span>
                  <span className="text-[10px] text-slate-500 font-normal">Razorpay, UPI, PhonePe, Paytm</span>
                </div>
                {country === 'India' && <CheckCircle className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Step 2: Customer Contact & Shipping Details */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" /> 2. Customer & Address Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Phone Number</label>
                <input
                  type="text"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Postal Code</label>
                <input
                  type="text"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-bold text-slate-400 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">City</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">State / Division</label>
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Payment Gateway Options */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-500" /> 3. Select Payment Gateway ({country})
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableGateways.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setPaymentMethod(g.name as any)}
                  className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between h-24 ${
                    paymentMethod === g.name
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-extrabold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-extrabold">{g.name}</span>
                  <span className="text-[10px] text-slate-500">
                    {g.name === 'Cash on Delivery' ? 'Pay upon receipt' : 'Instant Gateway'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary Sidebar */}
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3">
            Review Order
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs items-center">
                <div className="min-w-0 flex-1 pr-2">
                  <span className="font-bold text-slate-100 block truncate">{item.product.name}</span>
                  <span className="text-[10px] text-slate-400">Qty: {item.quantity}</span>
                </div>
                <span className="font-mono font-bold text-slate-300">
                  {formatPrice((item.product.salePrice || item.product.regularPrice) * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-xs text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-white">{formatPrice(cartTotal)}</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-emerald-500">
                <span>Discount ({appliedCoupon.code})</span>
                <span className="font-bold">-{formatPrice(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="font-bold text-white">{formatPrice(shippingCost)}</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-4 border-t border-slate-200 dark:border-slate-800 text-white">
            <span className="text-sm font-extrabold">Grand Total</span>
            <span className="text-2xl font-extrabold text-emerald-400">
              {formatPrice(totalAmount)}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:from-emerald-500 transition"
          >
            <span>Confirm Order ({paymentMethod})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
