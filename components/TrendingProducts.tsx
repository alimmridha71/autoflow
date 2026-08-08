'use client';

// ============================================================
// Trending Products Component — Horizontally scrollable trending products
// ============================================================

import React, { useRef } from 'react';
import Link from 'next/link';
import { TrendingUp, ChevronLeft, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function TrendingProducts() {
  const { products, formatPrice, addToCart } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  const trending = products.filter((p) => p.isTrending);
  if (trending.length === 0) return null;

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-500" /> Trending Now
          </h2>
          <p className="text-xs text-slate-400">Most popular gadgets this week</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition text-slate-500 hover:text-blue-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition text-slate-500 hover:text-blue-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {trending.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-72 snap-start group rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <Link href={`/product/${product.slug}`} className="block relative h-48 bg-slate-100 dark:bg-slate-800/50 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
              />
              {product.discount && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-500 text-white text-[10px] font-extrabold">
                  -{product.discount}%
                </span>
              )}
              <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Trending
              </div>
            </Link>

            {/* Content */}
            <div className="p-4 space-y-2">
              <span className="text-[10px] font-bold uppercase text-blue-500 tracking-wider">
                {product.brand}
              </span>
              <Link href={`/product/${product.slug}`}>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2 hover:text-blue-500 transition">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center gap-1 text-xs text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewCount})</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {formatPrice(product.salePrice || product.regularPrice)}
                  </span>
                  {product.salePrice && (
                    <span className="text-xs text-slate-400 line-through ml-2">
                      {formatPrice(product.regularPrice)}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product, 1)}
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition active:scale-95 shadow-md shadow-blue-500/20"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
