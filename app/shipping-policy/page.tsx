import React from 'react';
import type { Metadata } from 'next';
import { Truck } from 'lucide-react';

export const metadata: Metadata = { title: 'Shipping Policy — Autoflow', description: 'Autoflow shipping rates, delivery times, and shipping zones.' };

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center space-y-3">
        <Truck className="w-10 h-10 text-blue-500 mx-auto" />
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Shipping Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
        {/* Shipping Table */}
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Shipping Rates & Delivery Times</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-slate-400 uppercase text-[10px] border-b border-slate-200 dark:border-slate-800">
              <tr><th className="p-3">Country</th><th className="p-3">Method</th><th className="p-3">Cost</th><th className="p-3">Delivery</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-300">
              <tr><td className="p-3">🇧🇩 Bangladesh</td><td className="p-3">Standard</td><td className="p-3">$5 / ৳593</td><td className="p-3">5-7 business days</td></tr>
              <tr><td className="p-3">🇧🇩 Bangladesh</td><td className="p-3">Express</td><td className="p-3">$15 / ৳1,778</td><td className="p-3">1-3 business days</td></tr>
              <tr><td className="p-3">🇧🇩 Bangladesh</td><td className="p-3">Store Pickup</td><td className="p-3">Free</td><td className="p-3">Same day</td></tr>
              <tr><td className="p-3">🇮🇳 India</td><td className="p-3">Standard</td><td className="p-3">$8 / ₹668</td><td className="p-3">5-10 business days</td></tr>
              <tr><td className="p-3">🇮🇳 India</td><td className="p-3">Express</td><td className="p-3">$20 / ₹1,670</td><td className="p-3">2-4 business days</td></tr>
              <tr className="text-emerald-400 font-bold"><td className="p-3">Both</td><td className="p-3">Free Shipping</td><td className="p-3">Free</td><td className="p-3">Orders over $100</td></tr>
            </tbody>
          </table>
        </div>
        {[
          { title: 'Shipping Zones', content: 'We currently ship to all districts in Bangladesh and all states/union territories in India. Remote areas may have extended delivery times (add 2-3 additional days).' },
          { title: 'Order Processing', content: 'Orders placed before 2:00 PM (BST/IST) on business days are processed the same day. Weekend and holiday orders are processed the next business day.' },
          { title: 'Tracking', content: 'A tracking number is provided via email and SMS once your order is shipped. You can track your order from your account dashboard or the Track Order page.' },
          { title: 'Customs & Duties', content: 'All orders within Bangladesh and India are subject to applicable GST/VAT which is included in the product price. No additional customs duties apply for domestic orders.' },
          { title: 'Lost or Damaged Shipments', content: 'If your package is lost or arrives damaged, contact us within 48 hours. We will initiate an investigation with the courier and provide a replacement or full refund.' },
        ].map((s, idx) => (
          <div key={idx}>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">{s.title}</h2>
            <p className="text-xs text-slate-400 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
