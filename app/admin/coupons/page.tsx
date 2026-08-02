'use client';

import React, { useState } from 'react';
import { Tag, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/lib/store';
import { Coupon } from '@/lib/types';

export default function AdminCouponsPage() {
  const { coupons, addCoupon, deleteCoupon, formatPrice } = useStore();

  const [code, setCode] = useState('');
  const [discountType, setDiscountType] = useState<'PERCENTAGE' | 'FIXED'>('FIXED');
  const [discountValue, setDiscountValue] = useState(50);
  const [minPurchase, setMinPurchase] = useState(500);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    const newC: Coupon = {
      id: `c-${Date.now()}`,
      code: code.trim().toUpperCase(),
      discountType,
      discountValue,
      minPurchase,
      expiresAt: '2026-12-31',
      isActive: true
    };
    addCoupon(newC);
    setCode('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Coupon & Promo Code System</h1>
        <p className="text-xs text-slate-400">Manage promotional discounts for customer checkout</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <form onSubmit={handleAdd} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-fit">
          <h3 className="font-extrabold text-white text-sm">Create New Coupon</h3>
          <div>
            <label className="text-xs text-slate-400 block mb-1">Coupon Code</label>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. SUMMER2026"
              className="w-full bg-slate-800 p-3 rounded-xl text-xs text-white outline-none font-mono uppercase"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Discount Type</label>
            <select
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value as any)}
              className="w-full bg-slate-800 p-3 rounded-xl text-xs text-white outline-none"
            >
              <option value="FIXED">Fixed Amount Off ($)</option>
              <option value="PERCENTAGE">Percentage Off (%)</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Discount Value</label>
            <input
              type="number"
              required
              value={discountValue}
              onChange={(e) => setDiscountValue(Number(e.target.value))}
              className="w-full bg-slate-800 p-3 rounded-xl text-xs text-white outline-none font-mono"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Min Purchase Amount ($)</label>
            <input
              type="number"
              value={minPurchase}
              onChange={(e) => setMinPurchase(Number(e.target.value))}
              className="w-full bg-slate-800 p-3 rounded-xl text-xs text-white outline-none font-mono"
            />
          </div>

          <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs">
            Create Coupon
          </button>
        </form>

        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coupons.map((c) => (
              <div key={c.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 relative">
                <button
                  onClick={() => deleteCoupon(c.id)}
                  className="absolute top-4 right-4 text-rose-400 hover:text-rose-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <span className="font-extrabold text-blue-400 text-base font-mono block">{c.code}</span>
                <div className="text-xs text-slate-300">
                  Discount: <span className="font-bold text-white">{c.discountType === 'FIXED' ? `$${c.discountValue}` : `${c.discountValue}%`}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Min Spend: {formatPrice(c.minPurchase || 0)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
