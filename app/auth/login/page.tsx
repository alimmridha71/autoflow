'use client';

// ============================================================
// Customer Login Page — Email/password with social login placeholders
// ============================================================

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Zap, Chrome, Facebook } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const { loginCustomer } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields'); return; }
    // Demo login — accepts any email/password
    loginCustomer(email);
    router.push('/account');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Zap className="w-7 h-7 fill-current" />
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Welcome Back</h1>
          <p className="text-sm text-slate-400">Sign in to your Autoflow account</p>
        </div>

        {/* Login Form */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
          {/* Social Login */}
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
            <div className="relative flex justify-center text-xs"><span className="bg-white dark:bg-slate-900 px-4 text-slate-400">or sign in with email</span></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter your password"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-12 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500 transition"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-blue-600" />
                Remember me
              </label>
              <Link href="/auth/forgot-password" className="text-blue-500 font-bold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition">
              Sign In
            </button>
          </form>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="text-blue-500 font-bold hover:underline">Create Account</Link>
        </p>

        {/* Admin Link */}
        <p className="text-center text-xs text-slate-500">
          Admin?{' '}
          <Link href="/admin/login" className="text-blue-400 font-bold hover:underline">Go to Admin Login</Link>
        </p>
      </div>
    </div>
  );
}
