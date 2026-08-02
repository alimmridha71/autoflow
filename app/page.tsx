'use client';

import React from 'react';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import FlashSale from '@/components/FlashSale';
import ProductCard from '@/components/ProductCard';
import { useStore } from '@/lib/store';
import { INITIAL_CATEGORIES } from '@/lib/mockData';
import {
  ArrowRight,
  Flame,
  Award,
  Sparkles,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Gamepad2,
  Camera,
  Zap,
  Star,
  Mail,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function HomePage() {
  const { products } = useStore();

  const featuredProducts = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);
  const newArrivals = products.filter((p) => p.isNewArrival);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-500" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-indigo-500" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-purple-500" />;
      case 'Watch': return <Watch className="w-6 h-6 text-rose-500" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-emerald-500" />;
      case 'Camera': return <Camera className="w-6 h-6 text-amber-500" />;
      default: return <Zap className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* Categories Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" /> Featured Categories
            </h2>
            <p className="text-xs text-slate-400">Explore top electronics by department</p>
          </div>
          <Link href="/shop" className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
            <span>Browse All</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {INITIAL_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {getCategoryIcon(cat.icon)}
              </div>
              <div className="mt-3">
                <h3 className="text-xs font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-blue-500 transition">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-400">{cat.itemCount}+ Items</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Flash Sale Section */}
      <FlashSale />

      {/* Best Sellers Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Flame className="w-6 h-6 text-rose-500" /> Best Selling Electronics
            </h2>
            <p className="text-xs text-slate-400">Most ordered gadgets this month</p>
          </div>
          <Link href="/shop" className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
            <span>View All</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="relative p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-between min-h-[220px]">
          <div className="space-y-2 z-10">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
              Limited Offer
            </span>
            <h3 className="text-2xl font-extrabold">MacBook & Laptop Deals</h3>
            <p className="text-xs text-slate-300 max-w-xs">Up to 15% discount on M3 Pro Ultrabooks and Gaming PCs.</p>
          </div>
          <Link
            href="/shop?category=laptops-pcs"
            className="self-start px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 shadow-md z-10"
          >
            Shop Laptops
          </Link>
        </div>

        <div className="relative p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-900 text-white overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-between min-h-[220px]">
          <div className="space-y-2 z-10">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase">
              Gaming Audio
            </span>
            <h3 className="text-2xl font-extrabold">ANC Earbuds & Headsets</h3>
            <p className="text-xs text-slate-300 max-w-xs">Experience 45dB Active Noise Cancellation with Spatial sound.</p>
          </div>
          <Link
            href="/shop?category=audio"
            className="self-start px-5 py-2.5 rounded-xl bg-purple-600 text-white font-extrabold text-xs hover:bg-purple-500 shadow-md z-10"
          >
            Shop Audio
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-500" /> New Arrivals
            </h2>
            <p className="text-xs text-slate-400">Freshly launched 2026 tech releases</p>
          </div>
          <Link href="/shop" className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
            <span>Explore All</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="text-center max-w-md mx-auto space-y-1">
          <h2 className="text-2xl font-extrabold text-white">What Our Customers Say</h2>
          <p className="text-xs text-slate-400">Trusted by over 50,000 tech enthusiasts in Bangladesh & India</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-300 italic">
              "Ordered the Titan Phone 16 Pro Max to Dhaka. Delivery took only 24 hours via bKash payment. Packaging was 100% authentic!"
            </p>
            <div className="text-xs font-bold text-white">
              — Anisur Rahman, Dhaka BD
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-300 italic">
              "Awesome customer support! Used UPI payment from Bangalore for the M3 Pro Ultrabook. Fast dispatch and smooth tracking."
            </p>
            <div className="text-xs font-bold text-white">
              — Vikram Malhotra, Bangalore IN
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-300 italic">
              "The ANC Sonic Air Pods Pro 2 audio quality is insane. Admin response time was immediate when I had a question."
            </p>
            <div className="text-xs font-bold text-white">
              — Mehedi Hasan, Chittagong BD
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Box */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-1">
          <h3 className="text-2xl font-extrabold">Subscribe for Exclusive Gadget Deals</h3>
          <p className="text-xs text-blue-100">Get 10% OFF coupon code on your first tech order.</p>
        </div>

        <div className="flex items-center w-full md:w-auto max-w-md gap-2">
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-xl text-slate-900 text-xs font-medium outline-none"
            />
            <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
          </div>
          <button className="px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-extrabold hover:bg-slate-800 transition whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
