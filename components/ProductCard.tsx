'use client';

import React from 'react';
import Link from 'next/link';
import {
  Heart,
  Eye,
  Shuffle,
  ShoppingBag,
  Star,
  CheckCircle,
  Zap,
  Tag
} from 'lucide-react';
import { Product } from '@/lib/types';
import { useStore } from '@/lib/store';

export default function ProductCard({ product }: { product: Product }) {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    setQuickViewProduct
  } = useStore();

  const isLiked = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  return (
    <div className="group relative bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-4 transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
      
      {/* Top Badges */}
      <div className="relative w-full aspect-square bg-slate-100 dark:bg-slate-800/50 rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-4">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.discount && (
            <span className="px-2.5 py-1 rounded-full bg-rose-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
              -{product.discount}% OFF
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
              NEW
            </span>
          )}
        </div>

        {/* Action Overlay Buttons: Wishlist, Compare, Quick View */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-xl backdrop-blur-md transition shadow-md ${
              isLiked
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-rose-500 hover:text-white'
            }`}
            title="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={() => toggleCompare(product)}
            className={`p-2 rounded-xl backdrop-blur-md transition shadow-md ${
              isCompared
                ? 'bg-purple-600 text-white'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-purple-600 hover:text-white'
            }`}
            title="Compare"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          <button
            onClick={() => setQuickViewProduct(product)}
            className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition shadow-md backdrop-blur-md"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Product Image */}
        <Link href={`/product/${product.slug}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Stock indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-blue-500">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 text-emerald-500 font-medium">
              <CheckCircle className="w-3 h-3" /> In Stock ({product.stockQuantity})
            </span>
          </div>

          {/* Title */}
          <Link
            href={`/product/${product.slug}`}
            className="block text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-blue-500 transition line-clamp-2 mt-1"
          >
            {product.name}
          </Link>
        </div>

        {/* Rating Stars & Price */}
        <div className="pt-2">
          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mb-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{product.rating}</span>
            <span className="text-slate-400 font-normal">({product.reviewCount})</span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                {formatPrice(product.salePrice || product.regularPrice)}
              </span>
              {product.salePrice && (
                <span className="text-xs text-slate-400 line-through ml-2">
                  {formatPrice(product.regularPrice)}
                </span>
              )}
            </div>

            {/* Quick Add to Cart Button */}
            <button
              onClick={() => addToCart(product, 1)}
              className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20 active:scale-95 transition"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
