'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Phone, Eye, EyeOff, Zap, Chrome, Facebook, CheckCircle } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function RegisterPage() {
  const router = useRouter();
  const { registerCustomer } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) { setError('Please fill in all required fields'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match'); return; }
    if (!agreed) { setError('Please agree to the terms and conditions'); return; }
    registerCustomer(name, email, phone);
    router.push('/account');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Zap className="w-7 h-7 fill-current" />
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Create Account</h1>
          <p className="text-sm text-slate-400">Join Autoflow and get 100 reward points free!</p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              <Chrome className="w-4 h-4 text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              <Facebook className="w-4 h-4 text-blue-600" /> Facebook
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white dark:bg-slate-900 px-4 text-slate-400">or register with email</span></div>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">{error}</div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Full Name *</label>
              <div className="relative">
                <input type="text" value={name} onChange={(e) => { setName(e.target.value); setError(''); }} placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition" />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Email Address *</label>
              <div className="relative">
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} placeholder="you@example.com" className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition" />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Phone Number</label>
              <div className="relative">
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+880 1712-345678" className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition" />
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Password *</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} placeholder="Min 6 chars" className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition" />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Confirm *</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }} placeholder="Confirm" className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white px-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition" />
                </div>
              </div>
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 mt-0.5 rounded accent-blue-600" />
              <span>I agree to the <Link href="/terms" className="text-blue-500 hover:underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link></span>
            </label>

            <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition">
              Create Account
            </button>
          </form>

          {/* Perks */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {['100 Free Reward Points', 'Exclusive Member Deals', 'Order Tracking', 'Wishlist & Compare'].map((perk) => (
              <div key={perk} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" /> {perk}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-500 font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
