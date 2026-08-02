'use client';

import React, { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Copy,
  Search,
  Check,
  X,
  Package,
  Sparkles,
  Barcode
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { Product } from '@/lib/types';
import { INITIAL_CATEGORIES } from '@/lib/mockData';

export default function AdminProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct, formatPrice, showToast } = useStore();

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form State for Add / Edit Product
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('Autoflow');
  const [category, setCategory] = useState('Smartphones');
  const [regularPrice, setRegularPrice] = useState(499);
  const [salePrice, setSalePrice] = useState(399);
  const [stockQuantity, setStockQuantity] = useState(25);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingProduct(null);
    setName('');
    setBrand('Autoflow');
    setCategory('Smartphones');
    setRegularPrice(499);
    setSalePrice(399);
    setStockQuantity(25);
    setDescription('High-performance electronics gadget designed for next-generation mobile productivity.');
    setImageUrl('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop');
    setIsModalOpen(true);
  };

  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setName(p.name);
    setBrand(p.brand);
    setCategory(p.category);
    setRegularPrice(p.regularPrice);
    setSalePrice(p.salePrice || p.regularPrice);
    setStockQuantity(p.stockQuantity);
    setDescription(p.description);
    setImageUrl(p.images[0] || '');
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const sku = `AF-${brand.slice(0, 2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    if (editingProduct) {
      const updated: Product = {
        ...editingProduct,
        name,
        brand,
        category,
        regularPrice,
        salePrice,
        stockQuantity,
        description,
        images: [imageUrl || editingProduct.images[0]]
      };
      updateProduct(updated);
    } else {
      const newProd: Product = {
        id: `prod-${Date.now()}`,
        name,
        sku,
        barcode: `890${Math.floor(100000000 + Math.random() * 900000000)}`,
        slug,
        brand,
        model: '2026 Model',
        category,
        images: [imageUrl],
        description,
        specifications: [
          { label: 'Warranty', value: '1 Year Warranty' },
          { label: 'Build', value: 'Aluminum & Glass Body' }
        ],
        regularPrice,
        salePrice,
        discount: Math.round(((regularPrice - salePrice) / regularPrice) * 100),
        stockQuantity,
        tags: ['New Release', brand, category],
        rating: 5.0,
        reviewCount: 1,
        isNewArrival: true
      };
      addProduct(newProd);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Product Management</h1>
          <p className="text-xs text-slate-400">Total {products.length} products in database</p>
        </div>

        <button
          onClick={openAddModal}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" /> Add New Gadget
        </button>
      </div>

      {/* Search Filter */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search product by name, brand, SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 text-xs text-white pl-10 pr-4 py-2.5 rounded-xl outline-none"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Gadget Name</th>
                <th className="p-4">SKU / Barcode</th>
                <th className="p-4">Category</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Sale Price</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-slate-800/40">
                  <td className="p-4 flex items-center gap-3">
                    <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-contain rounded-lg bg-slate-800 p-1" />
                    <div>
                      <span className="font-bold text-white block">{p.name}</span>
                      <span className="text-[10px] text-blue-400 font-semibold">{p.brand}</span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-400">
                    <div>{p.sku}</div>
                    <div className="text-[10px] text-slate-500">{p.barcode}</div>
                  </td>
                  <td className="p-4 font-semibold text-slate-300">{p.category}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      p.stockQuantity > 15 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {p.stockQuantity} Units
                    </span>
                  </td>
                  <td className="p-4 font-mono font-bold text-white">
                    {formatPrice(p.salePrice || p.regularPrice)}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(p)}
                        className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-extrabold text-white text-base">
                {editingProduct ? 'Edit Gadget Product' : 'Add New Gadget Product'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-400 font-bold block mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Brand</label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
                  >
                    {INITIAL_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Regular Price ($)</label>
                  <input
                    type="number"
                    value={regularPrice}
                    onChange={(e) => setRegularPrice(Number(e.target.value))}
                    className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Sale Price ($)</label>
                  <input
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Stock Qty</label>
                  <input
                    type="number"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(Number(e.target.value))}
                    className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-bold block mb-1">Image URL</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none font-mono"
                />
              </div>

              <div>
                <label className="text-slate-400 font-bold block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs hover:bg-blue-500 shadow-md"
              >
                Save Gadget Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
