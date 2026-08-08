import React from 'react';
import type { Metadata } from 'next';
import { Cookie } from 'lucide-react';

export const metadata: Metadata = { title: 'Cookie Policy — Autoflow', description: 'Autoflow cookie policy explaining how we use cookies and tracking technologies.' };

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center space-y-3">
        <Cookie className="w-10 h-10 text-amber-500 mx-auto" />
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Cookie Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
        {[
          { title: 'What Are Cookies?', content: 'Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience by remembering your preferences, login status, and shopping cart contents.' },
          { title: 'Essential Cookies', content: 'These cookies are necessary for the website to function. They include session cookies for login, cart storage, and security tokens. You cannot disable these cookies as the site won\'t work without them.' },
          { title: 'Analytics Cookies', content: 'We use analytics cookies to understand how visitors interact with our website. This data helps us improve our services. We may use tools like Google Analytics for this purpose.' },
          { title: 'Marketing Cookies', content: 'These cookies track your browsing activity to show you relevant advertisements. They are set by our advertising partners and help us measure campaign effectiveness.' },
          { title: 'Preference Cookies', content: 'These cookies remember your settings such as preferred language (English/বাংলা/Hindi), currency (BDT/INR/USD), dark mode preference, and recently viewed products.' },
          { title: 'Managing Cookies', content: 'You can manage or delete cookies through your browser settings. Most browsers allow you to block or delete cookies, though this may affect site functionality. You can also use our cookie consent banner to manage preferences.' },
          { title: 'Third-Party Cookies', content: 'Some cookies are placed by third-party services like payment gateways, social media plugins, and analytics providers. These are governed by the respective third party\'s privacy policy.' },
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
