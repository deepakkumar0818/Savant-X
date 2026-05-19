'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter subscriber',
          email: email.trim(),
          company: '',
          phone: '',
          service: 'Newsletter',
          message: 'Please add this address to the SavantX newsletter list.',
          budget: '',
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) setEmail('');
    } catch {
      setStatus('err');
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Newsletter</p>
      <h4 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">Engineering &amp; product notes</h4>
      <p className="mt-1 text-sm text-slate-600">Quarterly updates—no fluff.</p>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          className="min-h-[44px] flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/15"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      {status === 'ok' && <p className="mt-2 text-sm text-emerald-700">Thanks — you&apos;re on the list.</p>}
      {status === 'err' && (
        <p className="mt-2 text-sm text-amber-800">
          Could not subscribe. Try{' '}
          <a href="/contact" className="font-medium underline underline-offset-2">
            contact
          </a>
          .
        </p>
      )}
    </div>
  );
}
