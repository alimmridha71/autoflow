'use client';

import React, { useState } from 'react';
import { Warehouse, AlertTriangle, TrendingDown, TrendingUp, Package, Search, Truck, Users } from 'lucide-react';
import { useStore } from '@/lib/store';
import { INITIAL_WAREHOUSES, INITIAL_SUPPLIERS, INITIAL_STOCK_ENTRIES } from '@/lib/mockData';

export default function AdminInventoryPage() {
  const { products, formatPrice } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'warehouses' | 'suppliers' | 'history'>('overview');

  const lowStock = products.filter((p) => p.stockQuantity <= 10);
  const outOfStock = products.filter((p) => p.stockQuantity === 0);
  const totalUnits = products.reduce((a, p) => a + p.stockQuantity, 0);
  const totalValue = products.reduce((a, p) => a + (p.salePrice || p.regularPrice) * p.stockQuantity, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Inventory Management</h1>
        <p className="text-xs text-slate-400">Track stock levels, warehouses, and suppliers</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Package className="w-5 h-5" />, label: 'Total SKUs', value: products.length, color: 'text-blue-400' },
          { icon: <TrendingUp className="w-5 h-5" />, label: 'Total Units', value: totalUnits.toLocaleString(), color: 'text-emerald-400' },
          { icon: <AlertTriangle className="w-5 h-5" />, label: 'Low Stock Alerts', value: lowStock.length, color: 'text-amber-400' },
          { icon: <TrendingDown className="w-5 h-5" />, label: 'Inventory Value', value: formatPrice(totalValue), color: 'text-purple-400' },
        ].map((stat, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-slate-800 ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-xs text-slate-400">{stat.label}</p>
              <p className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 gap-6 text-xs font-extrabold">
        {(['overview', 'warehouses', 'suppliers', 'history'] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 capitalize border-b-2 transition ${activeTab === tab ? 'border-blue-500 text-blue-500' : 'border-transparent text-slate-400'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Overview - Low Stock Table */}
      {activeTab === 'overview' && (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" /> Low Stock Products (≤ 10 units)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr><th className="p-4">Product</th><th className="p-4">SKU</th><th className="p-4">Stock</th><th className="p-4">Price</th><th className="p-4">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {lowStock.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">{p.name}</td>
                    <td className="p-4 font-mono text-slate-400">{p.sku}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${p.stockQuantity === 0 ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'}`}>
                        {p.stockQuantity} units
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold text-white">{formatPrice(p.salePrice || p.regularPrice)}</td>
                    <td className="p-4 text-[10px] font-bold text-rose-400">{p.stockQuantity === 0 ? '❌ OUT OF STOCK' : '⚠️ LOW STOCK'}</td>
                  </tr>
                ))}
                {lowStock.length === 0 && (
                  <tr><td colSpan={5} className="p-8 text-center text-slate-500">All products are well-stocked ✅</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Warehouses */}
      {activeTab === 'warehouses' && (
        <div className="grid md:grid-cols-3 gap-4">
          {INITIAL_WAREHOUSES.map((wh) => (
            <div key={wh.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <Warehouse className="w-8 h-8 text-blue-400" />
              <h3 className="text-sm font-extrabold text-white">{wh.name}</h3>
              <p className="text-xs text-slate-400">{wh.location}</p>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Manager: {wh.manager}</span>
                <span className="font-bold text-blue-400">{wh.productsCount} products</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Suppliers */}
      {activeTab === 'suppliers' && (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr><th className="p-4">Supplier</th><th className="p-4">Email</th><th className="p-4">Phone</th><th className="p-4">Country</th><th className="p-4">Products</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {INITIAL_SUPPLIERS.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/40">
                  <td className="p-4 font-bold text-white flex items-center gap-2"><Truck className="w-4 h-4 text-blue-400" />{s.name}</td>
                  <td className="p-4 text-slate-400">{s.email}</td>
                  <td className="p-4 text-slate-400">{s.phone}</td>
                  <td className="p-4">{s.country}</td>
                  <td className="p-4 font-bold text-blue-400">{s.productsSupplied}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Stock History */}
      {activeTab === 'history' && (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr><th className="p-4">Date</th><th className="p-4">Product</th><th className="p-4">Change</th><th className="p-4">Stock</th><th className="p-4">Reason</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {INITIAL_STOCK_ENTRIES.map((e) => (
                <tr key={e.id} className="hover:bg-slate-800/40">
                  <td className="p-4 text-slate-400">{e.date}</td>
                  <td className="p-4 font-bold text-white">{e.productName}</td>
                  <td className="p-4">
                    <span className={`font-bold ${e.change > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {e.change > 0 ? '+' : ''}{e.change}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">{e.previousStock} → {e.newStock}</td>
                  <td className="p-4 text-slate-400">{e.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
