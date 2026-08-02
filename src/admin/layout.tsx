'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Layers,
  Tag,
  CreditCard,
  BarChart3,
  Users,
  LogOut,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currentUser, isAdminLoggedIn, logout } = useStore();

  // If on admin login page, return plain layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Role Protection Guard: If not logged in as Admin, show login request
  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto" />
          <h2 className="text-2xl font-extrabold text-white">Admin Authentication Required</h2>
          <p className="text-xs text-slate-400">
            Please log in with Admin Credentials (<span className="text-white font-bold">Alim / 123456</span>) to view this page.
          </p>
          <Link
            href="/admin/login"
            className="inline-block px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-500/20"
          >
            Go to Admin Login Page
          </Link>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Products', href: '/admin/products', icon: Package },
    { label: 'Orders', href: '/admin/orders', icon: ShoppingBag },
    { label: 'Categories', href: '/admin/categories', icon: Layers },
    { label: 'Coupons', href: '/admin/coupons', icon: Tag },
    { label: 'Payment Gateways', href: '/admin/payments', icon: CreditCard },
    { label: 'Reports', href: '/admin/reports', icon: BarChart3 },
  ];

  return (
    <div className="space-y-6 py-4">
      {/* Top Admin Header Bar */}
      <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-600 text-white font-extrabold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-white flex items-center gap-2">
              Autoflow Admin Panel <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">v1.0 Live</span>
            </h2>
            <p className="text-xs text-slate-400">Logged in as <span className="text-white font-bold">{currentUser?.name}</span> (Super Admin)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 border border-slate-700"
          >
            <Globe className="w-3.5 h-3.5" /> View Live Storefront
          </Link>
          <button
            onClick={logout}
            className="px-3.5 py-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white text-xs font-bold transition flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </div>

      {/* Admin Navigation Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-800">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Admin Main Content View */}
      <div>{children}</div>
    </div>
  );
}
