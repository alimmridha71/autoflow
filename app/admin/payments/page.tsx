'use client';

import React from 'react';
import { CreditCard, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AdminPaymentsPage() {
  const { gateways, toggleGateway } = useStore();

  const bdGateways = gateways.filter((g) => g.country === 'Bangladesh');
  const inGateways = gateways.filter((g) => g.country === 'India');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Payment Gateway Configuration</h1>
        <p className="text-xs text-slate-400">Configure enabled payment methods for Bangladesh and India regional checkouts</p>
      </div>

      {/* Bangladesh Gateways */}
      <div className="space-y-4">
        <h3 className="text-base font-extrabold text-white flex items-center gap-2">
          🇧🇩 Bangladesh Payment Gateways
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bdGateways.map((g) => (
            <div
              key={g.id}
              className={`p-5 rounded-2xl border transition flex flex-col justify-between h-36 ${
                g.enabled
                  ? 'bg-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-950/60 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-extrabold text-white text-sm">{g.name}</h4>
                  <span className="text-[10px] text-slate-400">Merchant Fee: {g.feePercentage}%</span>
                </div>
                <div className={g.enabled ? 'text-emerald-400' : 'text-slate-500'}>
                  {g.enabled ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
              </div>

              <button
                onClick={() => toggleGateway(g.id)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition ${
                  g.enabled
                    ? 'bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white'
                    : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                }`}
              >
                {g.enabled ? 'Disable Gateway' : 'Enable Gateway'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* India Gateways */}
      <div className="space-y-4">
        <h3 className="text-base font-extrabold text-white flex items-center gap-2">
          🇮🇳 India Payment Gateways
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inGateways.map((g) => (
            <div
              key={g.id}
              className={`p-5 rounded-2xl border transition flex flex-col justify-between h-36 ${
                g.enabled
                  ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-950/60 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-extrabold text-white text-sm">{g.name}</h4>
                  <span className="text-[10px] text-slate-400">Merchant Fee: {g.feePercentage}%</span>
                </div>
                <div className={g.enabled ? 'text-blue-400' : 'text-slate-500'}>
                  {g.enabled ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
              </div>

              <button
                onClick={() => toggleGateway(g.id)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition ${
                  g.enabled
                    ? 'bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white'
                    : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {g.enabled ? 'Disable Gateway' : 'Enable Gateway'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
