'use client';

// ============================================================
// AUTOFLOW HOMEPAGE — Complete with all sections
// Hero, Categories, Flash Sale, Best Sellers, Trending, Brands,
// Today's Deals, New Arrivals, Promos, Testimonials, Newsletter,
// Popular Accessories, Recently Viewed
// ============================================================

import React from 'react';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import FlashSale from '@/components/FlashSale';
import ProductCard from '@/components/ProductCard';
import BrandShowcase from '@/components/BrandShowcase';
import TrendingProducts from '@/components/TrendingProducts';
import RecentlyViewed from '@/components/RecentlyViewed';
import { useStore } from '@/lib/store';
import { INITIAL_CATEGORIES } from '@/lib/mockData';
import {
  ArrowRight, Flame, Award, Sparkles, Tag, Package,
  Smartphone, Laptop, Headphones, Watch, Gamepad2, Camera, Zap,
  Star, Mail, ShieldCheck, Truck, CreditCard, RotateCcw,
  HardDrive, Cpu, Wifi, Cable, Tablet
} from 'lucide-react';

export default function HomePage() {
  const { products } = useStore();

  const featuredProducts = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);
  const newArrivals = products.filter((p) => p.isNewArrival);
  const todaysDeals = products.filter((p) => p.isDeal);
  const accessories = products.filter((p) => p.category === 'Accessories' || p.category === 'Smart Home & Power');

  const getCategoryIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Smartphone: <Smartphone className="w-6 h-6 text-blue-500" />,
      Laptop: <Laptop className="w-6 h-6 text-indigo-500" />,
      Headphones: <Headphones className="w-6 h-6 text-purple-500" />,
      Watch: <Watch className="w-6 h-6 text-rose-500" />,
      Gamepad2: <Gamepad2 className="w-6 h-6 text-emerald-500" />,
      Camera: <Camera className="w-6 h-6 text-amber-500" />,
      Zap: <Zap className="w-6 h-6 text-cyan-500" />,
      Tablet: <Tablet className="w-6 h-6 text-teal-500" />,
      HardDrive: <HardDrive className="w-6 h-6 text-orange-500" />,
      Cpu: <Cpu className="w-6 h-6 text-red-500" />,
      Wifi: <Wifi className="w-6 h-6 text-sky-500" />,
      Cable: <Cable className="w-6 h-6 text-lime-500" />,
    };
    return iconMap[iconName] || <Zap className="w-6 h-6 text-cyan-500" />;
  };

  return (
    <div className="space-y-16">
      {/* 1. Hero Banner Slider */}
      <HeroSlider />

      {/* Trust Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Truck className="w-5 h-5" />, title: 'Free Shipping', desc: 'On orders over $100', color: 'text-emerald-500' },
          { icon: <ShieldCheck className="w-5 h-5" />, title: 'Secure Payment', desc: 'bKash, UPI, Cards', color: 'text-blue-500' },
          { icon: <RotateCcw className="w-5 h-5" />, title: 'Easy Returns', desc: '7-15 day return policy', color: 'text-amber-500' },
          { icon: <CreditCard className="w-5 h-5" />, title: '0% EMI', desc: 'Available on select cards', color: 'text-purple-500' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{item.title}</h4>
              <p className="text-[10px] text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Categories Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" /> Shop by Category
            </h2>
            <p className="text-xs text-slate-400">Browse all {INITIAL_CATEGORIES.length} departments</p>
          </div>
          <Link href="/shop" className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
            <span>Browse All</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {INITIAL_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between hover:-translate-y-1"
            >
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {getCategoryIcon(cat.icon)}
              </div>
              <div className="mt-3">
                <h3 className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-blue-500 transition">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-400">{cat.itemCount}+ Items</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Flash Sale Section */}
      <FlashSale />

      {/* 4. Best Sellers Section */}
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
          {bestSellers.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Promotional Banners */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-between min-h-[220px]">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="space-y-2 z-10">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
              Limited Offer
            </span>
            <h3 className="text-2xl font-extrabold">MacBook & Laptop Deals</h3>
            <p className="text-xs text-slate-300 max-w-xs">Up to 15% discount on M3 Pro Ultrabooks and Gaming PCs.</p>
          </div>
          <Link href="/shop?category=laptops-pcs" className="self-start px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 shadow-md z-10">
            Shop Laptops
          </Link>
        </div>

        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-between min-h-[220px]">
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="space-y-2 z-10">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase">
              Gaming Audio
            </span>
            <h3 className="text-2xl font-extrabold">ANC Earbuds & Headsets</h3>
            <p className="text-xs text-slate-300 max-w-xs">Experience 45dB Active Noise Cancellation with Spatial sound.</p>
          </div>
          <Link href="/shop?category=audio" className="self-start px-5 py-2.5 rounded-xl bg-purple-600 text-white font-extrabold text-xs hover:bg-purple-500 shadow-md z-10">
            Shop Audio
          </Link>
        </div>
      </section>

      {/* 6. Trending Products (Horizontal Scroll) */}
      <TrendingProducts />

      {/* 7. Featured Brands */}
      <BrandShowcase />

      {/* 8. Today's Deals */}
      {todaysDeals.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Tag className="w-6 h-6 text-orange-500" /> Today&apos;s Deals
              </h2>
              <p className="text-xs text-slate-400">Limited time offers — grab them before they&apos;re gone!</p>
            </div>
            <Link href="/shop" className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
              <span>All Deals</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {todaysDeals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 9. Mid-page Promotional Banner */}
      <section className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-lg">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase">
              🎉 Special Promotion
            </span>
            <h3 className="text-3xl font-extrabold">Get 20% Off Your First Order</h3>
            <p className="text-sm text-emerald-100/80">
              Use code <span className="font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 font-bold">WELCOME20</span> at checkout. Valid for new customers only.
            </p>
          </div>
          <Link href="/shop" className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 shadow-xl flex items-center gap-2">
            <Package className="w-5 h-5" /> Shop Now
          </Link>
        </div>
      </section>

      {/* 10. New Arrivals */}
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
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 11. Popular Accessories */}
      {accessories.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cable className="w-6 h-6 text-lime-500" /> Popular Accessories
              </h2>
              <p className="text-xs text-slate-400">Essential add-ons for your gadgets</p>
            </div>
            <Link href="/shop?category=accessories" className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
              <span>Shop Accessories</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 12. Customer Testimonials */}
      <section className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="text-center max-w-md mx-auto space-y-1">
          <h2 className="text-2xl font-extrabold text-white">What Our Customers Say</h2>
          <p className="text-xs text-slate-400">Trusted by over 50,000 tech enthusiasts in Bangladesh & India</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Anisur Rahman', location: 'Dhaka BD', comment: 'Ordered the Titan Phone 16 Pro Max to Dhaka. Delivery took only 24 hours via bKash payment. Packaging was 100% authentic!' },
            { name: 'Vikram Malhotra', location: 'Bangalore IN', comment: 'Awesome customer support! Used UPI payment from Bangalore for the M3 Pro Ultrabook. Fast dispatch and smooth tracking.' },
            { name: 'Mehedi Hasan', location: 'Chittagong BD', comment: 'The ANC Sonic Air Pods Pro 2 audio quality is insane. Admin response time was immediate when I had a question.' }
          ].map((review, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic">&ldquo;{review.comment}&rdquo;</p>
              <div className="text-xs font-bold text-white">
                — {review.name}, {review.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Recently Viewed */}
      <RecentlyViewed />

      {/* 14. Newsletter Subscription */}
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
