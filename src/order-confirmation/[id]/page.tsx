'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Printer, Truck, ArrowLeft, ShieldCheck, Zap, Download } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = params.id as string;
  const { orders, formatPrice } = useStore();

  const order = orders.find((o) => o.id === orderId || o.orderNumber === orderId) || orders[0];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      {/* Header Notification */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/30 text-center space-y-3 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-white">Order Confirmed!</h1>
        <p className="text-xs text-slate-300">
          Thank you for shopping with Autoflow. Your invoice order ID is <span className="font-mono text-emerald-400 font-bold">{order.orderNumber}</span>.
        </p>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 flex items-center gap-1.5 border border-slate-700"
          >
            <Printer className="w-3.5 h-3.5" /> Print Invoice
          </button>
          <Link
            href={`/track-order?id=${order.orderNumber}`}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
          >
            <Truck className="w-3.5 h-3.5" /> Track Live Order
          </Link>
        </div>
      </div>

      {/* Printable Invoice Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-8 shadow-xl">
        {/* Invoice Header */}
        <div className="flex flex-wrap justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Autoflow</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Official Store Receipt</span>
            </div>
          </div>

          <div className="text-right text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold uppercase">
              Status: {order.status}
            </span>
            <div className="mt-2 text-slate-400 font-mono">Date: {order.date}</div>
            <div className="text-slate-400 font-mono">Tracking #: {order.trackingNumber}</div>
          </div>
        </div>

        {/* Customer & Shipping Info */}
        <div className="grid md:grid-cols-2 gap-6 text-xs bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">
              Customer Information
            </h4>
            <div className="space-y-1 text-slate-400">
              <p className="font-bold text-slate-200">{order.customerName}</p>
              <p>{order.customerEmail}</p>
              <p>{order.customerPhone}</p>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">
              Shipping Address ({order.shippingAddress.country})
            </h4>
            <div className="space-y-1 text-slate-400">
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.postalCode}</p>
              <p className="font-semibold text-blue-400 mt-2">Payment Gateway: {order.paymentMethod} ({order.paymentStatus})</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-xs text-slate-400 uppercase tracking-wider">Purchased Items</h4>
          <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-3 flex justify-between items-center text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-10 h-10 object-contain rounded-lg bg-white p-1" />
                  <div>
                    <span className="font-bold text-slate-100 block">{item.product.name}</span>
                    <span className="text-[10px] text-slate-400">{item.selectedColor}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-100">{item.quantity} x {formatPrice(item.product.salePrice || item.product.regularPrice)}</div>
                  <div className="font-mono text-blue-400">{formatPrice((item.product.salePrice || item.product.regularPrice) * item.quantity)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="max-w-xs ml-auto space-y-2 text-xs text-slate-400 pt-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold text-white">{formatPrice(order.subtotal)}</span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-emerald-400">
              <span>Discount</span>
              <span className="font-bold">-{formatPrice(order.discount)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-bold text-white">{formatPrice(order.shippingCost)}</span>
          </div>
          <div className="flex justify-between items-baseline text-sm font-extrabold text-white pt-2 border-t border-slate-800">
            <span>Grand Total</span>
            <span className="text-lg text-emerald-400">{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
