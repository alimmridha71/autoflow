'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    formatPrice,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useStore();

  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const result = applyCoupon(couponCode);
    if (!result.success) {
      setCouponError(result.message);
    } else {
      setCouponCode('');
    }
  };

  const discountAmount = appliedCoupon
    ? appliedCoupon.discountType === 'FIXED'
      ? appliedCoupon.discountValue
      : (cartTotal * appliedCoupon.discountValue) / 100
    : 0;

  const finalTotal = Math.max(0, cartTotal - discountAmount);

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 space-y-4 max-w-md mx-auto">
        <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-slate-500 mx-auto border border-slate-800">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">Your Cart is Empty</h2>
        <p className="text-xs text-slate-400">Explore our latest gadgets and add items to your cart.</p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 rounded-2xl bg-blue-600 text-white font-extrabold text-xs shadow-lg shadow-blue-500/20"
        >
          Explore Shop Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        Shopping Cart ({cart.length} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 items-center"
            >
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-20 h-20 object-contain rounded-2xl bg-slate-100 dark:bg-slate-800 p-2"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                  {item.product.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.selectedColor} {item.selectedStorage ? `• ${item.selectedStorage}` : ''}
                </p>
                <div className="text-sm font-extrabold text-blue-600 dark:text-blue-400 mt-1">
                  {formatPrice(item.product.salePrice || item.product.regularPrice)}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="text-slate-400 hover:text-white"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="text-slate-400 hover:text-white"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right min-w-[80px]">
                <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                  {formatPrice((item.product.salePrice || item.product.regularPrice) * item.quantity)}
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-xs text-rose-500 hover:underline mt-1 inline-block"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary & Coupon Box */}
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3">
            Order Summary
          </h2>

          {/* Coupon Code Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-blue-500" /> Have a Coupon? (e.g. AUTOFLOW50)
            </label>
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <span>Code {appliedCoupon.code} applied!</span>
                <button onClick={removeCoupon} className="text-rose-400 hover:underline">
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl text-xs outline-none text-slate-900 dark:text-slate-100 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-blue-600 transition"
                >
                  Apply
                </button>
              </form>
            )}
            {couponError && <p className="text-[11px] text-rose-500">{couponError}</p>}
          </div>

          <div className="space-y-2 text-xs text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">{formatPrice(cartTotal)}</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-emerald-500">
                <span>Discount ({appliedCoupon.code})</span>
                <span className="font-bold">-{formatPrice(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span className="font-bold text-emerald-500">Calculated at Checkout</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-4 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
            <span className="text-sm font-extrabold">Total Amount</span>
            <span className="text-2xl font-extrabold text-blue-500">
              {formatPrice(finalTotal)}
            </span>
          </div>

          <Link
            href="/checkout"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 hover:from-blue-500 transition"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
