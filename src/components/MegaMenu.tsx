'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Gamepad2,
  Camera,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';
import { INITIAL_CATEGORIES } from '@/lib/mockData';

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-blue-500" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-indigo-500" />;
      case 'Headphones': return <Headphones className="w-4 h-4 text-purple-500" />;
      case 'Watch': return <Watch className="w-4 h-4 text-rose-500" />;
      case 'Gamepad2': return <Gamepad2 className="w-4 h-4 text-emerald-500" />;
      case 'Camera': return <Camera className="w-4 h-4 text-amber-500" />;
      case 'Zap': return <Zap className="w-4 h-4 text-cyan-500" />;
      default: return <Layers className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-600 hover:text-white transition">
        <Sparkles className="w-4 h-4" />
        <span>Categories</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-[850px] mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 z-50 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
          {INITIAL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="space-y-2 group">
              <Link
                href={`/shop?category=${cat.slug}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.icon)}
                </div>
                <span>{cat.name}</span>
              </Link>
              <div className="pl-9 space-y-1">
                {cat.subcategories.slice(0, 4).map((sub, idx) => (
                  <Link
                    key={idx}
                    href={`/shop?category=${cat.slug}&sub=${encodeURIComponent(sub)}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
