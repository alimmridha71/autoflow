import React from 'react';
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = { title: 'Terms & Conditions — Autoflow', description: 'Terms and conditions for using the Autoflow e-commerce platform.' };

export default function TermsPage() {
  const sections = [
    { title: '1. Acceptance of Terms', content: 'By accessing and using the Autoflow website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.' },
    { title: '2. User Accounts', content: 'You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate information during registration. Autoflow reserves the right to suspend accounts that violate these terms.' },
    { title: '3. Products & Pricing', content: 'All product prices are listed in USD and converted to BDT/INR based on current exchange rates. Prices are subject to change without notice. We strive to display accurate product information but do not guarantee error-free listings.' },
    { title: '4. Orders & Payment', content: 'By placing an order, you make an offer to purchase the selected products. We reserve the right to refuse or cancel orders due to pricing errors, stock issues, or suspicious activity. Payment must be made through our supported gateways.' },
    { title: '5. Shipping & Delivery', content: 'Delivery timelines are estimates and not guaranteed. Autoflow is not liable for delays caused by customs, courier issues, or force majeure events. Risk of loss passes to you upon delivery.' },
    { title: '6. Returns & Refunds', content: 'Products may be returned within 7-15 days of delivery (varies by product). Items must be in original condition with all accessories and packaging. See our Refund Policy for detailed procedures.' },
    { title: '7. Intellectual Property', content: 'All content on Autoflow, including logos, images, text, and software, is protected by intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited.' },
    { title: '8. Limitation of Liability', content: 'Autoflow\'s total liability shall not exceed the purchase price of the product in question. We are not liable for indirect, incidental, or consequential damages arising from use of our services.' },
    { title: '9. Privacy', content: 'Your use of our services is also governed by our Privacy Policy. By using Autoflow, you consent to the collection and use of your information as described therein.' },
    { title: '10. Changes to Terms', content: 'We reserve the right to modify these terms at any time. Changes become effective upon posting. Continued use after changes constitutes acceptance of the new terms.' },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center space-y-3">
        <FileText className="w-10 h-10 text-blue-500 mx-auto" />
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
        {sections.map((s, idx) => (
          <div key={idx}>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">{s.title}</h2>
            <p className="text-xs text-slate-400 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
