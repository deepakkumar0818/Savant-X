'use client';

import tx from '@/content/text/components/thank-you/ThankYouContent.json';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Mail, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import type { ThankYouForm } from '@/lib/thankYou';

const COPY: Partial<Record<ThankYouForm, { title: string; body: string }>> = {
  support: { title: tx.support_title, body: tx.support_body },
  newsletter: { title: tx.newsletter_title, body: tx.newsletter_body },
};

/** Message after a form is sent; the wording follows the `form` query parameter set by goToThankYou. */
export default function ThankYouContent({ form }: { form?: string | null }) {
  const params = useSearchParams();
  const id = (form === undefined ? params.get('form') : form) as ThankYouForm | null;
  const copy = (id && COPY[id]) || { title: tx.lead_title, body: tx.lead_body };
  const email = id?.startsWith('zoho') ? COMPANY.zohoEmail : COMPANY.email;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f6ff] to-white px-4 py-20 sm:px-6 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">{tx.thank_you}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{copy.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">{copy.body}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
          >{tx.back_to_home}</Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:ring-indigo-300"
          >{tx.see_our_work}</Link>
        </div>

        {id !== 'newsletter' && (
          <div className="mx-auto mt-12 max-w-md rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="font-semibold text-slate-900">{tx.need_to_talk_sooner}</p>
            <div className="mt-3 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-6">
              <a href={COMPANY.phone.href} className="inline-flex items-center gap-2 font-medium text-indigo-700 hover:text-indigo-900">
                <Phone className="h-4 w-4" aria-hidden />
                {COMPANY.phone.display}
              </a>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 font-medium text-indigo-700 hover:text-indigo-900">
                <Mail className="h-4 w-4" aria-hidden />
                {email}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
