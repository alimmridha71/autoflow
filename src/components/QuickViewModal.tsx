'use client';

import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Shield, Check, Truck } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, formatPrice, addToCart, toggleWishlist, isInWishlist } = useStore();

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedStorage, setSelectedStorage] = useState<string>('');

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isLiked = isInWishlist(product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 md:p-8 grid md:grid-cols-2 gap-8">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Gallery */}
        <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800/60 rounded-2xl p-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="max-h-80 max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
              {product.brand} • {product.category}
            </span>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-amber-400">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1">{product.rating}</span>
              </div>
              <span className="text-slate-400">({product.reviewCount} reviews)</span>
              <span className="text-emerald-500 ml-auto flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> In Stock ({product.stockQuantity})
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 line-clamp-3 leading-relaxed">
              {product.description}
            </p>

            {/* Colors variant selection */}
            {product.variants?.colors && (
              <div className="mt-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Select Color:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                        selectedColor === c || (!selectedColor && c === product.variants?.colors?.[0])
                          ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                          : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage variant selection */}
            {product.variants?.storages && (
              <div className="mt-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Storage Capacity:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.storages.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedStorage(s)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                        selectedStorage === s || (!selectedStorage && s === product.variants?.storages?.[0])
                          ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                          : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing & Add to Cart */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                {formatPrice(product.salePrice || product.regularPrice)}
              </span>
              {product.salePrice && (
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(product.regularPrice)}
                </span>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  addToCart(product, 1, selectedColor, selectedStorage);
                  setQuickViewProduct(null);
                }}
                className="flex-1 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-2xl border transition ${
                  isLiked
                    ? 'border-rose-500 bg-rose-500/10 text-rose-500'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-rose-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
