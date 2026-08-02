'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, CheckCircle, Printer, Eye, Truck } from 'lucide-react';
import { useStore } from '@/lib/store';
import { OrderStatus } from '@/lib/types';

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus, formatPrice } = useStore();

  const statuses: OrderStatus[] = [
    'PENDING',
    'CONFIRMED',
    'PROCESSING',
    'PACKED',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Order Management</h1>
        <p className="text-xs text-slate-400">Total {orders.length} customer orders</p>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Order #</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Country & Phone</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Update Status</th>
                <th className="p-4 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-800/40">
                  <td className="p-4 font-mono font-bold text-blue-400">{o.orderNumber}</td>
                  <td className="p-4 font-semibold text-white">
                    {o.customerName}
                    <span className="block text-[10px] text-slate-400">{o.customerEmail}</span>
                  </td>
                  <td className="p-4 text-slate-400">
                    <div>{o.shippingAddress.country}</div>
                    <div className="text-[10px] text-slate-500">{o.customerPhone}</div>
                  </td>
                  <td className="p-4 font-semibold text-emerald-400">
                    {o.paymentMethod} ({o.paymentStatus})
                  </td>
                  <td className="p-4 font-mono font-bold text-white">
                    {formatPrice(o.total)}
                  </td>
                  <td className="p-4">
                    <select
                      value={o.status}
                      onChange={(e) => updateOrderStatus(o.id, e.target.value as OrderStatus)}
                      className="bg-slate-800 text-xs font-bold text-blue-400 px-3 py-1.5 rounded-xl border border-slate-700 outline-none cursor-pointer"
                    >
                      {statuses.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/order-confirmation/${o.id}`}
                      className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white font-bold inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
