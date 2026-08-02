'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function Toast() {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 text-white border border-blue-500/50 shadow-2xl shadow-blue-500/20 backdrop-blur-md">
        <div className="p-1.5 rounded-full bg-blue-600 text-white">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
}
