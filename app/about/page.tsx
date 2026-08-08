import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Building2, Users, Globe, Award, Heart, Zap, Shield, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Autoflow Electronics',
  description: 'Learn about Autoflow — your trusted destination for premium electronics and gadgets in Bangladesh and India.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">About Autoflow</span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
          Smart Electronics. Smart Shopping.
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Autoflow is a premium e-commerce platform dedicated to bringing the latest electronics and gadgets to customers in Bangladesh and India. From smartphones to gaming gear, we offer a curated selection of products with authentic warranties and exceptional customer service.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <Users className="w-6 h-6" />, stat: '50,000+', label: 'Happy Customers', color: 'text-blue-500' },
          { icon: <Building2 className="w-6 h-6" />, stat: '3', label: 'Warehouses', color: 'text-emerald-500' },
          { icon: <Globe className="w-6 h-6" />, stat: '2', label: 'Countries Served', color: 'text-purple-500' },
          { icon: <Award className="w-6 h-6" />, stat: '500+', label: 'Products Listed', color: 'text-amber-500' },
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className={`${item.color} mx-auto w-fit p-3 rounded-2xl bg-slate-100 dark:bg-slate-800`}>{item.icon}</div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{item.stat}</div>
            <div className="text-xs text-slate-400 font-medium">{item.label}</div>
          </div>
        ))}
      </section>

      {/* Mission & Values */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-900 text-white space-y-4 border border-blue-800">
          <h2 className="text-2xl font-extrabold">Our Mission</h2>
          <p className="text-sm text-blue-100/80 leading-relaxed">
            To make premium electronics accessible to everyone in South Asia. We bridge the gap between global technology brands and local consumers by offering authentic products, competitive prices, and a seamless shopping experience.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Our Values</h2>
          <div className="space-y-3">
            {[
              { icon: <Shield className="w-4 h-4 text-blue-500" />, title: 'Authenticity', desc: '100% genuine products with official warranties' },
              { icon: <Heart className="w-4 h-4 text-rose-500" />, title: 'Customer First', desc: 'Dedicated support team available 7 days a week' },
              { icon: <Zap className="w-4 h-4 text-amber-500" />, title: 'Innovation', desc: 'Constantly curating the latest tech products' },
              { icon: <Headphones className="w-4 h-4 text-emerald-500" />, title: 'Support', desc: '24/7 customer support via chat, email, and phone' },
            ].map((v, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 mt-0.5">{v.icon}</div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{v.title}</h4>
                  <p className="text-xs text-slate-400">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white space-y-4">
        <h3 className="text-2xl font-extrabold">Ready to Shop?</h3>
        <p className="text-sm text-blue-100">Explore our collection of premium electronics and gadgets.</p>
        <Link href="/shop" className="inline-block px-8 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 shadow-lg">
          Browse Products
        </Link>
      </section>
    </div>
  );
}
