'use client';

import React from 'react';
import { X, Trash2, Check, ShoppingBag } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CompareModal() {
  const { compareList, toggleCompare, isCompareOpen, setIsCompareOpen, formatPrice, addToCart } = useStore();

  if (!isCompareOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto p-6 md:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              Product Comparison
            </h2>
            <p className="text-xs text-slate-400">Side-by-side specifications comparison</p>
          </div>
          <button
            onClick={() => setIsCompareOpen(false)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {compareList.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            No gadgets added for comparison yet. Browse products and click the compare icon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {compareList.map((product) => (
              <div key={product.id} className="p-4 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="relative h-40 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 flex items-center justify-center mb-3">
                    <button
                      onClick={() => toggleCompare(product)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-rose-500 text-white"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase text-blue-500">{product.brand}</span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="text-base font-extrabold text-blue-600 dark:text-blue-400 mt-1">
                    {formatPrice(product.salePrice || product.regularPrice)}
                  </div>

                  {/* Specs Table */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="font-bold text-slate-700 dark:text-slate-300 border-b pb-1 border-slate-200 dark:border-slate-800">
                      Specifications
                    </div>
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                        <span className="text-[10px] text-slate-400 block font-semibold">{spec.label}</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{spec.value}</span>
                      </div>
                    ))}
                    <div className="pt-2">
                      <span className="text-[10px] text-slate-400 block font-semibold">Warranty</span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">{product.warranty || '1 Year'}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(product);
                    setIsCompareOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-blue-700"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
