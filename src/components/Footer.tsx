'use client';

import React from 'react';
import Link from 'next/link';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Value Proposition Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Express Shipping</h4>
              <p className="text-slate-500">Fast delivery across BD & India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">100% Genuine</h4>
              <p className="text-slate-500">Official brand warranties</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">7 Days Return</h4>
              <p className="text-slate-500">Hassle-free replacements</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Secure Checkout</h4>
              <p className="text-slate-500">bKash, Nagad, UPI, Cards, COD</p>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Autoflow</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Autoflow is your premier destination for next-generation smart electronics, smartphones, laptops, audio gear, and lifestyle tech in Bangladesh and India.
            </p>

            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Dhaka, Bangladesh & Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+880 9612-345678 / +91 1800-419-011</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@autoflow.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Top Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/shop?category=smartphones" className="hover:text-white transition">Smartphones</Link></li>
              <li><Link href="/shop?category=laptops-pcs" className="hover:text-white transition">Laptops & MacBooks</Link></li>
              <li><Link href="/shop?category=audio" className="hover:text-white transition">TWS Earbuds & ANC</Link></li>
              <li><Link href="/shop?category=smart-watches" className="hover:text-white transition">Smart Watches</Link></li>
              <li><Link href="/shop?category=gaming" className="hover:text-white transition">Gaming Gear</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link href="/track-order" className="hover:text-white transition">Track Your Order</Link></li>
              <li><Link href="/account" className="hover:text-white transition">My Account</Link></li>
              <li><Link href="/admin" className="hover:text-blue-400 transition text-blue-500 font-semibold">Admin Panel Login</Link></li>
              <li><Link href="#" className="hover:text-white transition">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy & Terms</Link></li>
            </ul>
          </div>

          {/* Supported Payments */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Payment Gateways</h4>
            <p className="text-[11px] text-slate-500">Supported local & international gateways:</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-rose-400">bKash</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-orange-400">Nagad</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-purple-400">Rocket</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-blue-400">UPI</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-cyan-400">Razorpay</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-emerald-400">COD</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 flex flex-wrap justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Autoflow Inc. All rights reserved. Smart Electronics Store.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> Next.js 15 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
