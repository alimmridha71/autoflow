'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '@/lib/store';

const SLIDES = [
  {
    id: 1,
    title: 'Titan Phone 16 Pro Max',
    subtitle: 'AEROSPACE TITANIUM. BIONIC A18 PRO CHIP.',
    description: 'The ultimate smartphone with 50MP triple quad camera, 120Hz Super Retina OLED display, and 5G ultra speed.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop',
    price: 1149,
    badge: 'Flagship Launch 2026',
    slug: 'autoflow-titan-phone-16-pro-max'
  },
  {
    id: 2,
    title: 'UltraBook M3 Pro 16"',
    subtitle: '36GB UNIFIED MEMORY. MINI-LED XDR.',
    description: 'Supercharged performance for professional creators, developers, and high-end gamers.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    price: 2299,
    badge: 'Pro Workstation',
    slug: 'autoflow-ultrabook-m3-pro-16'
  },
  {
    id: 3,
    title: 'Sonic Air Pods Pro 2',
    subtitle: 'HYBRID ACTIVE NOISE CANCELLATION 45dB',
    description: 'Immersive Spatial Audio with dynamic head tracking and MagSafe wireless charging case.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    price: 139,
    badge: 'Best Seller Audio',
    slug: 'autoflow-anc-sonic-air-pods-pro-2'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { formatPrice } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative w-full bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 my-4">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover opacity-35 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center min-h-[460px]">
        {/* Text Content */}
        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            {slide.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-100">
            {slide.title}
          </h1>

          <p className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase">
            {slide.subtitle}
          </p>

          <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/product/${slide.slug}`}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/30 flex items-center gap-2 group transition"
            >
              <span>Order Now • {formatPrice(slide.price)}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Warranty & BD/India COD</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hidden md:flex justify-center items-center relative">
          <div className="relative w-80 h-80 rounded-3xl p-4 bg-gradient-to-tr from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-current text-amber-400" />
              <span>Special Price: {formatPrice(slide.price)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 text-white backdrop-blur hover:bg-blue-600 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 text-white backdrop-blur hover:bg-blue-600 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === idx ? 'w-8 bg-blue-500' : 'bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
