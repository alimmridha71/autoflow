'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Zap, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
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
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Reset Password</h1>
          <p className="text-sm text-slate-400">Enter your email to receive a password reset link</p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
          {submitted ? (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-lg font-extrabold text-white">Check Your Email</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                We&apos;ve sent a password reset link to <span className="text-blue-400 font-bold">{email}</span>. Please check your inbox and spam folder.
              </p>
              <Link href="/auth/login" className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs">
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Email Address</label>
                <div className="relative">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition" />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-lg shadow-blue-500/25">
                Send Reset Link
              </button>
            </form>
          )}
        </div>

        <Link href="/auth/login" className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-blue-500 transition">
          <ArrowLeft className="w-4 h-4" /> Back to Sign In
        </Link>
      </div>
    </div>
  );
}
