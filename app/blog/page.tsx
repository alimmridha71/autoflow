'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function BlogPage() {
  const { blogPosts } = useStore();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

  const filtered = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10 py-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">Autoflow Blog</span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Tech News & Buying Guides</h1>
        <p className="text-sm text-slate-400">Stay updated with the latest tech trends, reviews, and expert buying guides.</p>
      </div>

      {/* Search & Categories */}
      <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
        <div className="relative flex-1 w-full">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search articles..." className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white pl-10 pr-4 py-3 rounded-xl outline-none focus:border-blue-500" />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-500'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <article key={post.id} className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
            {/* Cover Image */}
            <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </Link>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 space-y-3">
              <div className="flex items-center gap-3 text-[10px] text-slate-400">
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-bold">{post.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-blue-500 transition line-clamp-2">
                  {post.title}
                </h2>
              </Link>

              <p className="text-xs text-slate-400 line-clamp-3 flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5" />
                  <span className="font-medium">{post.author}</span>
                  <span>•</span>
                  <span>{post.publishedAt}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-blue-500 flex items-center gap-1 hover:gap-2 transition-all">
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="text-xl font-extrabold text-slate-500">No articles found</p>
          <p className="text-sm text-slate-400">Try different search terms or categories.</p>
        </div>
      )}
    </div>
  );
}
