'use client';

// ============================================================
// Recently Viewed Component — Shows last 8 products user viewed
// ============================================================

import React from 'react';
import Link from 'next/link';
import { Clock, Star } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function RecentlyViewed() {
  const { recentlyViewed, formatPrice } = useStore();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-6 h-6 text-slate-400" /> Recently Viewed
          </h2>
          <p className="text-xs text-slate-400">Continue where you left off</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {recentlyViewed.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-3 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-square bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-2">
              <img
                src={product.images[0]}
                alt={product.name}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-2 group-hover:text-blue-500 transition">
              {product.name}
            </h4>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3 h-3 text-amber-400 fill-current" />
              <span className="text-[10px] text-slate-400 font-medium">{product.rating}</span>
            </div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">
              {formatPrice(product.salePrice || product.regularPrice)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
