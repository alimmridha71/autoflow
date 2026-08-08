'use client';

import React, { useState } from 'react';
import { Users, Search, Mail, Phone, MapPin, ShoppingBag, Eye, Ban, CheckCircle } from 'lucide-react';
import { useStore } from '@/lib/store';

const MOCK_CUSTOMERS = [
  { id: 'cust-1', name: 'Rafiqul Islam', email: 'rafiqul@example.com', phone: '+880 1712-345678', city: 'Dhaka', country: 'Bangladesh', orders: 5, spent: 2450, joinedDate: '2026-05-15', status: 'active' },
  { id: 'cust-2', name: 'Priya Sundaram', email: 'priya.s@example.com', phone: '+91 98765-43210', city: 'Bengaluru', country: 'India', orders: 3, spent: 890, joinedDate: '2026-06-01', status: 'active' },
  { id: 'cust-3', name: 'Asha Begum', email: 'asha@example.com', phone: '+880 1812-554433', city: 'Dhaka', country: 'Bangladesh', orders: 8, spent: 4120, joinedDate: '2026-03-10', status: 'active' },
  { id: 'cust-4', name: 'Vikram Malhotra', email: 'vikram@example.com', phone: '+91 99887-76655', city: 'New Delhi', country: 'India', orders: 2, spent: 3200, joinedDate: '2026-07-01', status: 'active' },
  { id: 'cust-5', name: 'Kamal Hossain', email: 'kamal@example.com', phone: '+880 1912-112233', city: 'Chittagong', country: 'Bangladesh', orders: 1, spent: 123, joinedDate: '2026-07-28', status: 'active' },
  { id: 'cust-6', name: 'Sneha Gupta', email: 'sneha@example.com', phone: '+91 88776-55443', city: 'Hyderabad', country: 'India', orders: 1, spent: 437, joinedDate: '2026-07-25', status: 'blocked' },
  { id: 'cust-7', name: 'Nusrat Jahan', email: 'nusrat@example.com', phone: '+880 1612-998877', city: 'Dhaka', country: 'Bangladesh', orders: 4, spent: 560, joinedDate: '2026-04-20', status: 'active' },
  { id: 'cust-8', name: 'Arjun Patel', email: 'arjun@example.com', phone: '+91 77665-44332', city: 'Mumbai', country: 'India', orders: 2, spent: 1890, joinedDate: '2026-06-15', status: 'active' },
];

export default function AdminCustomersPage() {
  const { formatPrice } = useStore();
  const [search, setSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  const filtered = MOCK_CUSTOMERS.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) ||
           c.email.toLowerCase().includes(search.toLowerCase()) ||
           c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Customer Management</h1>
          <p className="text-xs text-slate-400">{MOCK_CUSTOMERS.length} registered customers</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Customers', value: MOCK_CUSTOMERS.length, color: 'text-blue-400' },
          { label: 'Bangladesh', value: MOCK_CUSTOMERS.filter(c => c.country === 'Bangladesh').length, color: 'text-emerald-400' },
          { label: 'India', value: MOCK_CUSTOMERS.filter(c => c.country === 'India').length, color: 'text-amber-400' },
          { label: 'Total Revenue', value: formatPrice(MOCK_CUSTOMERS.reduce((a, c) => a + c.spent, 0)), color: 'text-purple-400' },
        ].map((stat, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search customers..." className="w-full bg-slate-900 border border-slate-800 text-xs text-white pl-10 pr-4 py-2.5 rounded-xl outline-none" />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Location</th>
                <th className="p-4">Orders</th>
                <th className="p-4">Total Spent</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/40">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm">{c.name[0]}</div>
                      <div>
                        <span className="font-bold text-white block">{c.name}</span>
                        <span className="text-[10px] text-slate-400">Joined {c.joinedDate}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-slate-400"><Mail className="w-3 h-3" /> {c.email}</div>
                    <div className="flex items-center gap-1 text-slate-500 text-[10px]"><Phone className="w-3 h-3" /> {c.phone}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-500" /> {c.city}, {c.country}</div>
                  </td>
                  <td className="p-4 font-bold text-white">{c.orders}</td>
                  <td className="p-4 font-mono font-bold text-white">{formatPrice(c.spent)}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${c.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {c.status === 'active' ? '● Active' : '● Blocked'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white" title="View Details">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white" title="Block">
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                    </div>
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
