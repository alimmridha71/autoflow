'use client';

// ============================================================
// Brand Showcase Component — Animated brand logos with hover effects
// ============================================================

import React from 'react';
import { INITIAL_BRANDS } from '@/lib/mockData';

export default function BrandShowcase() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Featured Brands
        </h2>
        <p className="text-xs text-slate-400">Shop from world-leading electronics manufacturers</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {INITIAL_BRANDS.map((brand, idx) => (
          <div
            key={brand.id}
            className="group flex flex-col items-center justify-center w-28 h-24 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
              {brand.logo}
            </span>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors mt-1">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
