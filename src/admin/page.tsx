'use client';

import React from 'react';
import Link from 'next/link';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AdminOverviewPage() {
  const { products, orders, formatPrice } = useStore();

  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
  const totalOrdersCount = orders.length;
  const totalProductsCount = products.length;
  const lowStockProducts = products.filter((p) => p.stockQuantity < 20);

  return (
    <div className="space-y-8">
      {/* Top KPI Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Revenue */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden">
          <div className="flex justify-between items-center text-slate-400 text-xs font-semibold">
            <span>Total Revenue</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {formatPrice(totalRevenue)}
          </div>
          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 pt-1">
            <TrendingUp className="w-3.5 h-3.5" /> +18.4% from last month
          </div>
        </div>

        {/* Total Orders */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs font-semibold">
            <span>Total Orders</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">{totalOrdersCount}</div>
          <div className="text-[11px] text-blue-400 font-bold flex items-center gap-1 pt-1">
            <TrendingUp className="w-3.5 h-3.5" /> +12.5% active conversion
          </div>
        </div>

        {/* Active Products */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs font-semibold">
            <span>Total Products</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">{totalProductsCount}</div>
          <div className="text-[11px] text-slate-400 font-bold pt-1">Across 7 Gadget Categories</div>
        </div>

        {/* Low Stock Alert */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs font-semibold">
            <span>Low Stock Items</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-amber-400">{lowStockProducts.length}</div>
          <div className="text-[11px] text-slate-400 font-bold pt-1">Action required in inventory</div>
        </div>
      </div>

      {/* Sales Analytics Chart Visualization */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h3 className="font-extrabold text-white text-base">Revenue & Orders Growth</h3>
            <p className="text-xs text-slate-400">Monthly sales performance (BDT & INR)</p>
          </div>
          <span className="text-xs font-mono bg-slate-800 text-blue-400 px-3 py-1 rounded-lg">Real-Time Data</span>
        </div>

        {/* Visual Bar Chart Bar Simulators */}
        <div className="h-44 flex items-end justify-between gap-4 pt-6 px-4 border-b border-slate-800/60 pb-2">
          {[
            { month: 'Jan', val: 40 },
            { month: 'Feb', val: 65 },
            { month: 'Mar', val: 55 },
            { month: 'Apr', val: 80 },
            { month: 'May', val: 70 },
            { month: 'Jun', val: 95 },
            { month: 'Jul', val: 85 },
            { month: 'Aug', val: 110 }
          ].map((bar, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
              <div
                style={{ height: `${bar.val}%` }}
                className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl group-hover:from-blue-500 group-hover:to-cyan-300 transition-all"
              />
              <span className="text-[11px] text-slate-400 font-mono">{bar.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-extrabold text-white text-base">Recent Orders</h3>
          <Link href="/admin/orders" className="text-xs text-blue-400 font-bold hover:underline flex items-center gap-1">
            <span>Manage All Orders</span> <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800 bg-slate-950/50">
              <tr>
                <th className="p-3">Order #</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Country</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-800/40">
                  <td className="p-3 font-mono font-bold text-blue-400">{o.orderNumber}</td>
                  <td className="p-3 font-semibold text-white">{o.customerName}</td>
                  <td className="p-3 text-slate-400">{o.shippingAddress.country}</td>
                  <td className="p-3 font-semibold text-emerald-400">{o.paymentMethod}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-[10px] uppercase">
                      {o.status}
                    </span>
                  </td>
                  <td className="p-3 font-mono font-bold text-white">{formatPrice(o.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
