'use client';

import tx from '@/content/text/components/NewsletterSignup.json';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetchWithTimeout('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'newsletter',
          email: email.trim(),
          message: 'Please add this address to the SavantX newsletter list.',
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) setEmail('');
    } catch {
      setStatus('err');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f5f6ff] to-[#eef0ff] p-6 shadow-[0_24px_60px_-40px_rgba(79,70,229,0.5)] ring-1 ring-slate-200/80 sm:p-8">
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-indigo-100/70 blur-2xl" />
      <Image
        src="/images/footer/paper-plane.webp"
        alt=""
        width={520}
        height={315}
        sizes="200px"
        className="pointer-events-none absolute right-3 top-3 hidden w-36 mix-blend-multiply sm:block xl:w-44"
      />
      <div className="relative sm:pr-36 xl:pr-44">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">{tx.newsletter}</p>
        <h4 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{tx.engineering_product_notes}</h4>
        <p className="mt-1 text-[15px] text-slate-600">{tx.quarterly_updates_no_fluff}</p>
      </div>
      <form onSubmit={submit} className="relative mt-5 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label htmlFor="footer-newsletter-email" className="sr-only">{tx.email}</label>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" aria-hidden />
          <input
            id="footer-newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder={tx.work_email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/15"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110 disabled:opacity-60"
        >
          {status === 'loading' ? tx.sending : tx.subscribe}
          {status !== 'loading' && <ArrowRight className="h-4 w-4" aria-hidden />}
        </button>
      </form>
      <div aria-live="polite" className="relative">
        {status === 'idle' && <p className="mt-3 text-xs text-slate-500">{tx.no_spam_unsubscribe_anytime}</p>}
        {status === 'ok' && <p role="status" className="mt-3 text-sm text-emerald-700">{tx.thanks_you_re_on_the}</p>}
        {status === 'err' && (
          <p role="alert" className="mt-3 text-sm text-amber-800">{tx.could_not_subscribe_try}{' '}
            <a href="/contact" className="font-medium underline underline-offset-2">{tx.contact}</a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
