'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Package, Heart, MapPin, LogOut, ShieldAlert, CheckCircle } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AccountPage() {
  const { currentUser, orders, wishlist, logout, loginCustomer, formatPrice, isAdminLoggedIn } = useStore();
  const [demoEmail, setDemoEmail] = useState('customer@example.com');
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'profile'>('orders');

  if (!currentUser) {
    return (
      <div className="max-w-md mx-auto py-16 space-y-6">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
          <div className="text-center space-y-2">
            <User className="w-12 h-12 text-blue-500 mx-auto" />
            <h1 className="text-2xl font-extrabold text-white">Customer Portal</h1>
            <p className="text-xs text-slate-400">Log in to view past orders, wishlist, and manage your account.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginCustomer(demoEmail);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-bold text-slate-400 block mb-1">Email Address</label>
              <input
                type="email"
                required
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800 text-xs text-white p-3 rounded-xl outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs hover:bg-blue-700 shadow-md"
            >
              Log In as Customer
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800 text-center">
            <span className="text-xs text-slate-400">Are you an administrator?</span>
            <Link
              href="/admin/login"
              className="block mt-2 text-xs font-extrabold text-blue-400 hover:underline"
            >
              Go to Admin Login (Alim / 123456)
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-4">
      {/* Account Banner */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
            {currentUser.name[0]}
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{currentUser.name}</h1>
            <p className="text-xs text-slate-400">{currentUser.email} • {currentUser.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isAdminLoggedIn && (
            <Link
              href="/admin"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <ShieldAlert className="w-4 h-4" /> Go to Admin Dashboard
            </Link>
          )}
          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-slate-800 text-rose-400 text-xs font-bold hover:bg-slate-700 flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-6 text-xs font-extrabold">
        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-3 flex items-center gap-1.5 border-b-2 transition ${
            activeTab === 'orders' ? 'border-blue-500 text-blue-500' : 'border-transparent text-slate-400'
          }`}
        >
          <Package className="w-4 h-4" /> Order History ({orders.length})
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`pb-3 flex items-center gap-1.5 border-b-2 transition ${
            activeTab === 'wishlist' ? 'border-blue-500 text-blue-500' : 'border-transparent text-slate-400'
          }`}
        >
          <Heart className="w-4 h-4" /> Wishlist ({wishlist.length})
        </button>
      </div>

      {/* Order History */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex flex-wrap justify-between items-center text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="font-extrabold text-blue-500 font-mono text-sm">{order.orderNumber}</span>
                  <span className="text-slate-400 block">{order.date}</span>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold uppercase text-[10px]">
                    {order.status}
                  </span>
                  <span className="block font-bold text-white mt-1">{formatPrice(order.total)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">{order.items.length} items • Paid via {order.paymentMethod}</span>
                <Link
                  href={`/order-confirmation/${order.id}`}
                  className="text-blue-400 font-bold hover:underline"
                >
                  View Invoice & Receipt →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Wishlist */}
      {activeTab === 'wishlist' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3">
              <img src={product.images[0]} alt={product.name} className="h-32 object-contain mx-auto" />
              <div>
                <h4 className="font-bold text-xs text-white truncate">{product.name}</h4>
                <div className="text-sm font-extrabold text-blue-400 mt-1">{formatPrice(product.salePrice || product.regularPrice)}</div>
              </div>
              <Link href={`/product/${product.slug}`} className="w-full py-2 text-center bg-blue-600 text-white rounded-xl font-bold text-xs">
                View Gadget
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
