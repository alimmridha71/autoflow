'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, Clock, User, Tag, ArrowLeft, MessageCircle, Send, Share2 } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function BlogPostClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { blogPosts, addBlogComment, currentUser } = useStore();
  const post = blogPosts.find((p) => p.slug === slug);

  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');

  if (!post) {
    return (
      <div className="text-center py-20 space-y-4">
        <h1 className="text-3xl font-extrabold text-white">Article Not Found</h1>
        <Link href="/blog" className="text-blue-500 font-bold hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addBlogComment(post.id, {
      id: `bc-${Date.now()}`,
      author: commentAuthor || currentUser?.name || 'Anonymous',
      email: commentEmail || currentUser?.email || '',
      content: commentText,
      date: new Date().toISOString().split('T')[0]
    });
    setCommentText('');
    setCommentAuthor('');
    setCommentEmail('');
  };

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-500 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      {/* Article Header */}
      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.publishedAt}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.comments.length} comments</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="rounded-3xl overflow-hidden h-64 md:h-80 bg-slate-100 dark:bg-slate-800">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Article Content */}
      <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-xl font-extrabold text-slate-900 dark:text-white mt-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="text-base font-extrabold text-slate-900 dark:text-white mt-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-1 text-xs text-slate-400">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx} className="text-sm text-slate-400 leading-relaxed">{paragraph}</p>;
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2">
        <Tag className="w-4 h-4 text-slate-400" />
        {post.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Share */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <Share2 className="w-4 h-4 text-slate-400" />
        <span className="text-xs font-bold text-slate-400">Share this article:</span>
        <button className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold">Twitter</button>
        <button className="px-3 py-1 rounded-lg bg-blue-800 text-white text-xs font-bold">Facebook</button>
        <button className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold">WhatsApp</button>
      </div>

      {/* Comments */}
      <div className="space-y-6">
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-500" /> Comments ({post.comments.length})
        </h3>

        {post.comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {comment.author[0]}
              </div>
              <span className="font-bold text-slate-900 dark:text-white">{comment.author}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{comment.date}</span>
            </div>
            <p className="text-xs text-slate-400 pl-10">{comment.content}</p>
          </div>
        ))}

        {/* Comment Form */}
        <form onSubmit={handleComment} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Leave a Comment</h4>
          {!currentUser && (
            <div className="grid sm:grid-cols-2 gap-3">
              <input type="text" value={commentAuthor} onChange={(e) => setCommentAuthor(e.target.value)} placeholder="Your Name" className="bg-slate-50 dark:bg-slate-800 text-sm text-white p-3 rounded-xl outline-none" />
              <input type="email" value={commentEmail} onChange={(e) => setCommentEmail(e.target.value)} placeholder="Your Email" className="bg-slate-50 dark:bg-slate-800 text-sm text-white p-3 rounded-xl outline-none" />
            </div>
          )}
          <textarea rows={3} value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Write your comment..." className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-white p-3 rounded-xl outline-none resize-none" />
          <button type="submit" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-2">
            <Send className="w-4 h-4" /> Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}
