'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">Contact Us</span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Get in Touch</h1>
        <p className="text-sm text-slate-400">We&apos;re here to help! Reach out to us via any channel below.</p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <MapPin className="w-5 h-5" />, title: 'BD Office', details: ['House 42, Road 11, Banani', 'Dhaka 1213, Bangladesh'], color: 'text-blue-500' },
          { icon: <MapPin className="w-5 h-5" />, title: 'IN Office', details: ['204, Park Avenue, Indiranagar', 'Bengaluru 560038, India'], color: 'text-indigo-500' },
          { icon: <Phone className="w-5 h-5" />, title: 'Call Us', details: ['BD: +880 9612-345678', 'IN: +91 1800-419-011'], color: 'text-emerald-500' },
          { icon: <Mail className="w-5 h-5" />, title: 'Email', details: ['support@autoflow.com', 'sales@autoflow.com'], color: 'text-amber-500' },
        ].map((card, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className={`${card.color} p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit`}>{card.icon}</div>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{card.title}</h3>
            {card.details.map((d, i) => <p key={i} className="text-xs text-slate-400">{d}</p>)}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-extrabold text-white">Message Sent!</h3>
              <p className="text-xs text-slate-400">We&apos;ll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" /> Send a Message
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Your Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white p-3 rounded-xl outline-none border border-transparent focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Email Address</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white p-3 rounded-xl outline-none border border-transparent focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Subject</label>
                <input type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white p-3 rounded-xl outline-none border border-transparent focus:border-blue-500" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Message</label>
                <textarea rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white p-3 rounded-xl outline-none border border-transparent focus:border-blue-500 resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Hours */}
      <div className="text-center p-6 rounded-3xl bg-slate-900/60 border border-slate-800 max-w-md mx-auto">
        <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
        <h3 className="text-sm font-extrabold text-white mb-1">Business Hours</h3>
        <p className="text-xs text-slate-400">Sunday — Thursday: 9:00 AM — 8:00 PM (BST/IST)</p>
        <p className="text-xs text-slate-400">Friday — Saturday: 10:00 AM — 6:00 PM</p>
      </div>
    </div>
  );
}
