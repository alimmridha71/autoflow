'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingBag,
  Heart,
  Shuffle,
  User,
  ShieldAlert,
  Sun,
  Moon,
  Globe,
  Mic,
  Menu,
  X,
  PhoneCall,
  Zap,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { INITIAL_CATEGORIES } from '@/lib/mockData';
import MegaMenu from './MegaMenu';

export default function Header() {
  const {
    currency,
    setCurrency,
    language,
    setLanguage,
    cartCount,
    wishlist,
    compareList,
    setIsCartOpen,
    setIsCompareOpen,
    products,
    currentUser,
    isAdminLoggedIn,
    logout,
    darkMode,
    toggleDarkMode
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeCategoryAccordion, setActiveCategoryAccordion] = useState<string | null>(null);

  // Instant Search auto-suggestions
  const filteredSuggestions = searchQuery.trim()
    ? products
        .filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setSearchQuery('MacBook');
      setIsListening(false);
    }, 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Contact & Tagline */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Smart Electronics. Smart Shopping.
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <PhoneCall className="w-3 h-3" /> Support: BD (+880 9612-345678) | IN (+91 1800-419-011)
            </span>
          </div>

          {/* Controls: Currency, Language, Dark mode & Admin Login Quick Button */}
          <div className="flex items-center gap-4">
            {/* Admin Badge Quick Link */}
            <Link
              href="/admin"
              className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-600/30 text-blue-400 border border-blue-500/40 hover:bg-blue-600 hover:text-white transition font-medium"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              {isAdminLoggedIn ? 'Admin Panel' : 'Admin Login (Alim)'}
            </Link>

            {/* Currency Selector */}
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="bg-transparent text-slate-200 outline-none cursor-pointer hover:text-white"
              >
                <option value="BDT" className="bg-slate-900 text-white">BDT (৳)</option>
                <option value="INR" className="bg-slate-900 text-white">INR (₹)</option>
                <option value="USD" className="bg-slate-900 text-white">USD ($)</option>
              </select>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-slate-200 outline-none cursor-pointer hover:text-white"
              >
                <option value="EN" className="bg-slate-900 text-white">English</option>
                <option value="BN" className="bg-slate-900 text-white">বাংলা</option>
                <option value="HI" className="bg-slate-900 text-white">हिंदी</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 text-slate-300 hover:text-white transition"
              title="Toggle Dark/Light Mode"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar with Glass Effect */}
      <div className="glass-effect border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Autoflow
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-slate-400 -mt-1 uppercase">
                Gadgets & Tech
              </span>
            </div>
          </Link>

          {/* Search Bar with Instant Auto-suggestions & Voice Search */}
          <div className="relative flex-1 max-w-xl hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search gadgets (e.g. iPhone 16 Pro, MacBook M3, AirPods, Watch...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 pl-11 pr-20 py-2.5 rounded-full text-sm outline-none border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4" />

              {/* Voice Search Simulated Button */}
              <button
                onClick={handleVoiceSearch}
                className={`absolute right-3 p-1.5 rounded-full ${
                  isListening ? 'bg-red-500 text-white animate-ping' : 'text-slate-400 hover:text-blue-500'
                } transition`}
                title="Voice Search"
              >
                <Mic className="w-4 h-4" />
              </button>
            </div>

            {/* Instant Search Suggestions Dropdown */}
            {isSearchFocused && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 overflow-hidden">
                <div className="px-4 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Suggested Products
                </div>
                {filteredSuggestions.map((item) => (
                  <Link
                    key={item.id}
                    href={`/product/${item.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {item.brand} • <span className="text-blue-500 font-semibold">${item.salePrice || item.regularPrice}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons: Compare, Wishlist, Cart & Account */}
          <div className="flex items-center gap-3">
            {/* Compare Button */}
            <button
              onClick={() => setIsCompareOpen(true)}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Compare Products"
            >
              <Shuffle className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist Button */}
            <Link
              href="/account"
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-blue-500" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:inline text-xs font-semibold text-slate-700 dark:text-slate-300">
                Cart
              </span>
            </button>

            {/* User Account / Login */}
            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                <Link
                  href="/account"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold max-w-[100px] truncate">
                    {currentUser.name}
                  </span>
                </Link>
              </div>
            ) : (
              <Link
                href="/account"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 transition"
              >
                <User className="w-3.5 h-3.5" />
                <span>Account</span>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Bar & Mega Menu */}
        <div className="hidden md:block border-t border-slate-200 dark:border-slate-800/60 py-2">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            <MegaMenu />
            <div className="flex items-center gap-6">
              <Link href="/shop" className="hover:text-blue-500 transition">Shop All</Link>
              <Link href="/shop?filter=flash" className="text-amber-500 font-bold flex items-center gap-1 hover:text-amber-400">
                <Zap className="w-3.5 h-3.5 fill-current animate-pulse" /> Flash Sale
              </Link>
              <Link href="/shop?category=smartphones" className="hover:text-blue-500 transition">Smartphones</Link>
              <Link href="/shop?category=laptops-pcs" className="hover:text-blue-500 transition">Laptops</Link>
              <Link href="/shop?category=audio" className="hover:text-blue-500 transition">Audio</Link>
              <Link href="/track-order" className="hover:text-blue-500 transition text-emerald-500">Track Order</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="relative w-full max-w-xs h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
            <div className="space-y-6 overflow-y-auto max-h-[85vh] scrollbar-hide pr-2">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold shadow shadow-blue-500/30">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-lg font-extrabold text-white tracking-tight">Autoflow</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gadgets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 text-slate-100 pl-9 pr-4 py-2 rounded-xl text-xs outline-none border border-transparent focus:border-blue-500 transition-all"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <nav className="space-y-4">
                <div className="space-y-1">
                  <Link
                    href="/shop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white font-bold text-xs"
                  >
                    Shop All
                  </Link>
                  <Link
                    href="/shop?filter=flash"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-amber-500 hover:bg-slate-800 font-bold text-xs"
                  >
                    ⚡ Flash Sale
                  </Link>
                  <Link
                    href="/track-order"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-emerald-400 hover:bg-slate-800 font-bold text-xs"
                  >
                    📦 Track Order
                  </Link>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800">
                  <div className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Departments
                  </div>
                  <button
                    onClick={() => setActiveCategoryAccordion(activeCategoryAccordion === 'open' ? null : 'open')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white font-bold text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-500" /> Browse Categories
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeCategoryAccordion === 'open' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeCategoryAccordion === 'open' && (
                    <div className="pl-6 space-y-1 py-1 animate-in fade-in duration-200">
                      {INITIAL_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/shop?category=${cat.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-1.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white font-medium text-xs"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800">
                  <div className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Information
                  </div>
                  {[
                    { label: 'About Us', href: '/about' },
                    { label: 'Contact Us', href: '/contact' },
                    { label: 'Blog & Articles', href: '/blog' },
                    { label: 'FAQ', href: '/faq' }
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-medium text-xs"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs px-3">
                <span className="text-slate-400 font-medium">Currency</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="bg-slate-800 text-slate-200 outline-none cursor-pointer rounded-lg px-2.5 py-1 font-bold border border-slate-700"
                >
                  <option value="BDT">BDT (৳)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>

              <div className="flex items-center justify-between text-xs px-3">
                <span className="text-slate-400 font-medium">Language</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-slate-800 text-slate-200 outline-none cursor-pointer rounded-lg px-2.5 py-1 font-bold border border-slate-700"
                >
                  <option value="EN">English</option>
                  <option value="BN">বাংলা</option>
                  <option value="HI">हिंदी</option>
                </select>
              </div>

              <div className="flex items-center justify-between text-xs px-3">
                <span className="text-slate-400 font-medium">Theme Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition font-bold border border-slate-700"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" /> <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5" /> <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {currentUser && (
                <button
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 font-extrabold text-xs hover:bg-rose-500 hover:text-white transition"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
