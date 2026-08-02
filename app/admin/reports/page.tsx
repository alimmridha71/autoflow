'use client';

import React from 'react';
import { BarChart3, Download, FileSpreadsheet, FileText } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AdminReportsPage() {
  const { orders, products, formatPrice, showToast } = useStore();

  const handleExport = (type: string, format: string) => {
    showToast(`Exported ${type} report as ${format.toUpperCase()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Sales & Analytics Reports</h1>
        <p className="text-xs text-slate-400">Generate and export downloadable store audit reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Sales Report */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-white text-base">Monthly Sales Report</h3>
          <p className="text-xs text-slate-400">Contains itemized transaction history, order statuses, and currency conversions.</p>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => handleExport('Sales', 'csv')}
              className="flex-1 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 flex items-center justify-center gap-1"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" /> CSV
            </button>
            <button
              onClick={() => handleExport('Sales', 'pdf')}
              className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> PDF
            </button>
          </div>
        </div>

        {/* Inventory Report */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-white text-base">Inventory Audit Report</h3>
          <p className="text-xs text-slate-400">Current stock levels, reorder alerts, SKUs, and warehouse data.</p>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => handleExport('Inventory', 'excel')}
              className="flex-1 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 flex items-center justify-center gap-1"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" /> Excel
            </button>
            <button
              onClick={() => handleExport('Inventory', 'pdf')}
              className="flex-1 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> PDF
            </button>
          </div>
        </div>

        {/* Tax Report */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-white text-base">Regional Tax Report</h3>
          <p className="text-xs text-slate-400">Bangladesh VAT & India GST compliance logs.</p>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => handleExport('Tax', 'pdf')}
              className="w-full py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Generate Tax PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
