'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Truck, CheckCircle2, Clock, PackageCheck, AlertCircle } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function TrackOrderPage() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || '';

  const { orders, formatPrice } = useStore();
  const [searchId, setSearchId] = useState(initialId);
  const [searchedOrder, setSearchedOrder] = useState(
    orders.find((o) => o.orderNumber === initialId || o.id === initialId) || null
  );

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const found = orders.find(
      (o) =>
        o.orderNumber.toUpperCase() === searchId.trim().toUpperCase() ||
        o.id.toUpperCase() === searchId.trim().toUpperCase() ||
        o.customerPhone.includes(searchId.trim())
    );
    setSearchedOrder(found || null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Track Your Order Status
        </h1>
        <p className="text-xs text-slate-400">
          Enter your Order Number (e.g. AF-BD-89210) or Phone number to check real-time status.
        </p>
      </div>

      {/* Search Input */}
      <form onSubmit={handleTrack} className="flex gap-2 max-w-xl mx-auto">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Order Number (AF-BD-xxxx) or Phone"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-white pl-10 pr-4 py-3.5 rounded-2xl outline-none focus:border-blue-500 font-mono"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
        </div>
        <button
          type="submit"
          className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-lg shadow-blue-500/20"
        >
          Track Order
        </button>
      </form>

      {/* Result Display */}
      {searchedOrder ? (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl animate-in fade-in duration-300">
          <div className="flex flex-wrap justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
            <div>
              <span className="text-xs text-slate-400 font-semibold">Order Number</span>
              <h3 className="text-xl font-extrabold text-blue-500 font-mono">{searchedOrder.orderNumber}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 font-semibold">Current Status</span>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-xs uppercase mt-1">
                {searchedOrder.status}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Shipment Progress</h4>
            <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-semibold">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 mx-auto mb-1" />
                <span>Confirmed</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <Clock className="w-5 h-5 mx-auto mb-1" />
                <span>Processing</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 text-slate-400">
                <Truck className="w-5 h-5 mx-auto mb-1" />
                <span>Shipped</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 text-slate-400">
                <PackageCheck className="w-5 h-5 mx-auto mb-1" />
                <span>Delivered</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-xs space-y-2">
            <div className="flex justify-between text-slate-300">
              <span>Customer Name:</span>
              <span className="font-bold">{searchedOrder.customerName}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Shipping Address:</span>
              <span className="font-bold">{searchedOrder.shippingAddress.address}, {searchedOrder.shippingAddress.city}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Total Amount:</span>
              <span className="font-bold text-emerald-400">{formatPrice(searchedOrder.total)}</span>
            </div>
          </div>
        </div>
      ) : searchId ? (
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-2">
          <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
          <h3 className="text-sm font-bold text-white">No Order Found</h3>
          <p className="text-xs text-slate-400">Please verify your order number and try again.</p>
        </div>
      ) : null}
    </div>
  );
}
