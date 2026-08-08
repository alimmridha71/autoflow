import React from 'react';
import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = { title: 'Privacy Policy — Autoflow', description: 'Autoflow privacy policy detailing how we collect, use, and protect your personal data.' };

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center space-y-3">
        <Shield className="w-10 h-10 text-blue-500 mx-auto" />
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>
      <div className="prose prose-sm prose-slate dark:prose-invert max-w-none space-y-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          {[
            { title: '1. Information We Collect', content: 'We collect personal information including your name, email address, phone number, shipping address, and payment details when you create an account or place an order. We also collect usage data such as browsing history, device information, and IP addresses through cookies and analytics tools.' },
            { title: '2. How We Use Your Information', content: 'Your information is used to process orders, provide customer support, send order updates, improve our services, personalize your shopping experience, and send promotional communications (with your consent). We never sell your personal data to third parties.' },
            { title: '3. Data Protection', content: 'We implement industry-standard security measures including 256-bit SSL encryption, secure payment gateways (PCI-DSS compliant), hashed password storage, and regular security audits. Access to personal data is restricted to authorized personnel only.' },
            { title: '4. Cookies', content: 'We use essential cookies for site functionality, analytics cookies to understand usage patterns, and marketing cookies for personalized advertising. You can manage cookie preferences through your browser settings or our cookie consent banner.' },
            { title: '5. Third-Party Services', content: 'We share necessary data with payment processors (bKash, Nagad, Razorpay, UPI), shipping carriers, and analytics providers. These partners are bound by their own privacy policies and data protection agreements.' },
            { title: '6. Your Rights', content: 'You have the right to access, correct, delete, or export your personal data. You can update your information from your account settings or contact us at privacy@autoflow.com for data requests.' },
            { title: '7. Data Retention', content: 'We retain your data for as long as your account is active or as needed to provide services. Order history is kept for 7 years for tax and legal purposes. You can request account deletion at any time.' },
            { title: '8. Contact', content: 'For privacy-related inquiries, contact our Data Protection Officer at privacy@autoflow.com or call our support line.' },
          ].map((section, idx) => (
            <div key={idx}>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">{section.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
