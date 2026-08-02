'use client';

import React, { useState } from 'react';
import { Layers, Plus, Tag } from 'lucide-react';
import { INITIAL_CATEGORIES } from '@/lib/mockData';
import { useStore } from '@/lib/store';

export default function AdminCategoriesPage() {
  const { showToast } = useStore();
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [newCatName, setNewCatName] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const newCat = {
      id: `cat-${Date.now()}`,
      name: newCatName,
      slug: newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      icon: 'Zap',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
      subcategories: ['General Accessories'],
      itemCount: 0
    };

    setCategories((prev) => [...prev, newCat]);
    setNewCatName('');
    showToast(`Category "${newCatName}" added`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Category & Brand Management</h1>
        <p className="text-xs text-slate-400">Manage store categories and subcategories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <form onSubmit={handleAddCategory} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 h-fit">
          <h3 className="font-extrabold text-white text-sm">Add New Category</h3>
          <div>
            <label className="text-xs text-slate-400 block mb-1">Category Name</label>
            <input
              type="text"
              required
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              placeholder="e.g. Smart Home"
              className="w-full bg-slate-800 p-3 rounded-xl text-xs text-white outline-none"
            />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs">
            Add Category
          </button>
        </form>

        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-extrabold text-white text-sm">{cat.name}</h4>
                  <span className="text-xs text-blue-400 font-mono">{cat.itemCount} items</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.subcategories.map((sub, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
