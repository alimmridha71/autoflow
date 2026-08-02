'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Clock, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { useStore } from '@/lib/store';

export default function FlashSale() {
  const { products } = useStore();
  const flashProducts = products.filter((p) => p.isFlashSale);

  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 35, seconds: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (flashProducts.length === 0) return null;

  return (
    <section className="my-10 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Countdown Timer */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Zap className="w-6 h-6 fill-current animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Flash Sale</h2>
            <p className="text-xs text-slate-400">Limited stock deals on top electronics</p>
          </div>
        </div>

        {/* Live Timer */}
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-slate-400 uppercase font-semibold">Ends In:</span>
          <div className="flex items-center gap-1 text-xs font-mono font-bold">
            <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-400 border border-slate-700">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-400 border border-slate-700">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-400 border border-slate-700">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        <Link
          href="/shop?filter=flash"
          className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
        >
          <span>View All Deals</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flashProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
