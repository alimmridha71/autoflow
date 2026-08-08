'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Star,
  ShoppingBag,
  Heart,
  Shuffle,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle,
  Plus,
  Minus,
  MessageSquare,
  Play,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { useStore } from '@/lib/store';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const {
    products,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    showToast
  } = useStore();

  const product = products.find((p) => p.slug === slug) || products[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.variants?.colors?.[0] || '');
  const [selectedStorage, setSelectedStorage] = useState<string>(product.variants?.storages?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'description' | 'reviews'>('specs');

  // Customer Review Submit state
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const isLiked = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    showToast('Thank you! Your review has been submitted for approval.');
    setNewComment('');
  };

  return (
    <div className="space-y-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-500 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Store
      </button>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery Column */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex items-center justify-center overflow-hidden">
            {product.discount && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-extrabold shadow-md">
                -{product.discount}% OFF
              </span>
            )}

            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain rounded-2xl"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border p-2 flex items-center justify-center transition ${
                    activeImageIndex === idx
                      ? 'border-blue-600 ring-2 ring-blue-500/40'
                      : 'border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-extrabold uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-slate-400">SKU: <span className="font-mono text-slate-200">{product.sku}</span></span>
              <span className="text-emerald-500 font-semibold flex items-center gap-1 ml-auto">
                <CheckCircle className="w-3.5 h-3.5" /> In Stock ({product.stockQuantity})
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
              {product.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center text-amber-400 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                {formatPrice(product.salePrice || product.regularPrice)}
              </span>
              {product.salePrice && (
                <span className="text-base text-slate-400 line-through">
                  {formatPrice(product.regularPrice)}
                </span>
              )}
            </div>

            {/* Color Variant */}
            {product.variants?.colors && (
              <div className="mt-6">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Select Color: <span className="text-blue-500">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                        selectedColor === c
                          ? 'border-blue-600 bg-blue-600/10 text-blue-500'
                          : 'border-slate-300 dark:border-slate-800 text-slate-400'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Variant */}
            {product.variants?.storages && (
              <div className="mt-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Storage Capacity: <span className="text-blue-500">{selectedStorage}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.storages.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedStorage(s)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                        selectedStorage === s
                          ? 'border-blue-600 bg-blue-600/10 text-blue-500'
                          : 'border-slate-300 dark:border-slate-800 text-slate-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-slate-400 hover:text-white">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-slate-400 hover:text-white">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity, selectedColor, selectedStorage)}
                className="flex-1 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transition"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 rounded-2xl border transition ${
                  isLiked ? 'bg-rose-500 text-white border-rose-500' : 'border-slate-300 dark:border-slate-700 text-slate-400'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={() => toggleCompare(product)}
                className={`p-3.5 rounded-2xl border transition ${
                  isCompared ? 'bg-purple-600 text-white border-purple-600' : 'border-slate-300 dark:border-slate-700 text-slate-400'
                }`}
              >
                <Shuffle className="w-5 h-5" />
              </button>
            </div>

            {/* Key Value Badges */}
            <div className="grid grid-cols-3 gap-3 text-center pt-2">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <Truck className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block font-semibold">Fast Delivery</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block font-semibold">{product.warranty || 'Official Warranty'}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <RotateCcw className="w-4 h-4 text-purple-500 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block font-semibold">7 Days Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Specifications / Description / Reviews */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-6">
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-6 text-sm font-bold">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 transition border-b-2 ${
              activeTab === 'specs'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-3 transition border-b-2 ${
              activeTab === 'description'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Product Overview
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 transition border-b-2 ${
              activeTab === 'reviews'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Reviews ({product.reviewCount})
          </button>
        </div>

        {activeTab === 'specs' && (
          <div className="grid md:grid-cols-2 gap-4">
            {product.specifications.map((spec, idx) => (
              <div key={idx} className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                <span className="font-semibold text-slate-400">{spec.label}</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'description' && (
          <div className="text-sm text-slate-300 leading-relaxed space-y-4">
            <p>{product.description}</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="space-y-4">
              {product.reviews?.map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-900 dark:text-slate-100">{rev.userName}</span>
                    <span className="text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{rev.comment}</p>
                </div>
              ))}
            </div>

            {/* Leave Review Form */}
            <form onSubmit={handleReviewSubmit} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <h4 className="font-bold text-sm text-white">Write a Customer Review</h4>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Rating</label>
                <div className="flex gap-1 text-amber-400 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() => setNewRating(star)}
                      className={`w-5 h-5 ${star <= newRating ? 'fill-current' : 'text-slate-600'}`}
                    />
                  ))}
                </div>
              </div>
              <textarea
                rows={3}
                placeholder="Share your experience with this product..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-slate-900 text-xs text-white p-3 rounded-xl outline-none border border-slate-800 focus:border-blue-500"
              />
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs">
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            Related Gadgets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
