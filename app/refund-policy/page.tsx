import React from 'react';
import type { Metadata } from 'next';
import { RotateCcw } from 'lucide-react';

export const metadata: Metadata = { title: 'Refund Policy — Autoflow', description: 'Autoflow refund and return policy for electronics purchases.' };

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center space-y-3">
        <RotateCcw className="w-10 h-10 text-emerald-500 mx-auto" />
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Refund & Return Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
        {[
          { title: 'Return Window', content: 'Most products can be returned within 7-15 days of delivery. The specific return window is mentioned on each product page. Flash sale items may have a shorter return window.' },
          { title: 'Eligible Items', content: 'Products must be returned in original packaging with all accessories, tags, and documentation. Items must be unused, undamaged, and in resalable condition. Opened software, SIM-activated phones, and custom-configured PCs are not eligible.' },
          { title: 'Non-Returnable Items', content: 'Earbuds and headphones (hygiene reasons, unless defective), screen protectors, opened software licenses, gift cards, and items marked as "Final Sale" cannot be returned.' },
          { title: 'Return Process', content: '1. Go to your Account → Order History. 2. Select the order and click "Request Return". 3. Choose a reason and submit photos if required. 4. We will approve/reject within 24 hours. 5. Ship the item back using the provided shipping label.' },
          { title: 'Refund Processing', content: 'Refunds are processed within 5-7 business days after we inspect the returned item. The refund is credited to the original payment method. bKash/Nagad refunds may take an additional 1-2 days. COD refunds are processed via bank transfer.' },
          { title: 'Damaged or Defective Items', content: 'If you receive a damaged or defective product, contact us within 48 hours with photos. We will arrange a free pickup and provide a full refund or replacement at no extra cost.' },
          { title: 'Warranty Claims', content: 'Warranty claims are separate from returns. For warranty issues, contact our support team with your order number and product details. Warranty repairs/replacements are handled as per manufacturer terms.' },
          { title: 'Cancellations', content: 'Orders can be cancelled free of charge before they are shipped. Once shipped, the standard return process applies. COD orders can be cancelled until delivery.' },
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
