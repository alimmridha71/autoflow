'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Zap, Key, User, Lock, AlertCircle, Sparkles } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AdminLoginPage() {
  const router = useRouter();
  const { loginAdmin } = useStore();

  const [username, setUsername] = useState('Alim');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = loginAdmin(username, password);
    if (success) {
      router.push('/admin');
    } else {
      setError('Invalid username or password. Demo Admin Username is "Alim" and password is "123456".');
    }
  };

  const autofillDemo = () => {
    setUsername('Alim');
    setPassword('123456');
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Glowing Background Effect */}
        <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="text-center space-y-2 relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-500/30">
            <Zap className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            Autoflow Admin Portal
          </h1>
          <p className="text-xs text-slate-400">
            Enter administrator credentials to access store controls.
          </p>
        </div>

        {/* Demo Credentials Box */}
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs space-y-2">
          <div className="flex justify-between items-center text-blue-400 font-extrabold">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Demo Login Credentials
            </span>
            <button
              onClick={autofillDemo}
              type="button"
              className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-bold hover:bg-blue-500"
            >
              1-Click Auto Fill
            </button>
          </div>
          <div className="text-slate-300 font-mono space-y-0.5">
            <div>Username: <span className="text-white font-bold">Alim</span></div>
            <div>Password: <span className="text-white font-bold">123456</span></div>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 relative">
          <div>
            <label className="text-xs font-bold text-slate-400 block mb-1">Username / Admin ID</label>
            <div className="relative flex items-center">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500"
              />
              <User className="w-4 h-4 text-slate-400 absolute left-3.5" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 block mb-1">Password</label>
            <div className="relative flex items-center">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-500/30 transition flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Sign In to Admin Dashboard</span>
          </button>
        </form>
      </div>
    </div>
  );
}
