'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

const FAQ_DATA = [
  { cat: 'Orders & Shipping', items: [
    { q: 'How long does shipping take?', a: 'Standard delivery takes 5-7 business days within Bangladesh and 5-10 days for India. Express delivery is available in 1-3 days for BD and 2-4 days for IN.' },
    { q: 'Do you offer free shipping?', a: 'Yes! Free shipping is available on orders above $100 (BDT 11,850 / INR 8,350). Use code FREESHIP for free shipping on orders above $50.' },
    { q: 'Can I track my order?', a: 'Absolutely! After your order is shipped, you will receive a tracking number via email and SMS. You can also track it from your account dashboard or the Track Order page.' },
    { q: 'Do you ship internationally?', a: 'Currently we ship within Bangladesh and India only. International shipping is planned for Q1 2027.' },
  ]},
  { cat: 'Payment', items: [
    { q: 'What payment methods do you accept?', a: 'For Bangladesh: bKash, Nagad, Rocket, SSLCommerz, Bank Transfer, Cash on Delivery. For India: Razorpay, UPI, PhonePe, Google Pay, Paytm, Cash on Delivery.' },
    { q: 'Is Cash on Delivery available?', a: 'Yes, COD is available in both Bangladesh and India. A small handling fee may apply for certain locations.' },
    { q: 'Are my payment details secure?', a: 'Yes! All transactions are encrypted with 256-bit SSL and processed through PCI-DSS compliant payment gateways.' },
  ]},
  { cat: 'Returns & Refunds', items: [
    { q: 'What is your return policy?', a: '7-15 days return/replacement policy depending on the product. Electronics must be returned in original packaging with all accessories. See our Refund Policy page for details.' },
    { q: 'How long does a refund take?', a: 'Refunds are processed within 5-7 business days after we receive the returned item. The refund will be credited to the original payment method.' },
  ]},
  { cat: 'Account & Warranty', items: [
    { q: 'Do all products come with warranty?', a: 'Yes, all products come with official manufacturer warranty ranging from 6 months to 5 years depending on the product. See individual product pages for details.' },
    { q: 'How do I create an account?', a: 'Click the "Account" button in the header, then "Create Account". You can register with email or sign in with Google/Facebook.' },
    { q: 'I forgot my password. What do I do?', a: 'Click "Forgot Password" on the login page and enter your email. We will send a password reset link to your registered email.' },
  ]},
];

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleItem = (key: string) => setOpenIndex(openIndex === key ? null : key);

  const filtered = FAQ_DATA.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
    )
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="space-y-12 py-8 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">FAQ</span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h1>
        <p className="text-sm text-slate-400">Find answers to common questions about orders, shipping, payments, and more.</p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search questions..." className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none focus:border-blue-500" />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-8">
        {filtered.map((cat) => (
          <div key={cat.cat} className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-500" /> {cat.cat}
            </h2>
            <div className="space-y-2">
              {cat.items.map((item, idx) => {
                const key = `${cat.cat}-${idx}`;
                const isOpen = openIndex === key;
                return (
                  <div key={key} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <button onClick={() => toggleItem(key)} className="w-full flex items-center justify-between p-4 text-left text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <span>{item.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
