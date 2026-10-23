'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CalendarDays, CheckCircle2, Loader2, X } from 'lucide-react';
import { useDialog } from '@/lib/useDialog';
import { trackEvent } from '@/lib/analytics';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';
import { BUDGETS, campaignParams, EMAIL_PATTERN, MIN_MESSAGE, PHONE_PATTERN } from './leadForm';

/**
 * Each label maps to a Lead Type / IT Lead Subcategory in Zoho CRM (see classifyService in
 * src/lib/zohoLeads.ts). Keep the keywords if you reword them.
 */
const SERVICES = [
  'Website Development',
  'Mobile App Development',
  'Zoho Development',
  'ERP Solutions',
  'AI / ML & Analytics',
  'Automation & Integrations',
  'Shopify Store',
  'IoT & Embedded Hardware',
  'Not sure yet',
] as const;

type Fields = { name: string; email: string; phone: string; company: string; service: string; budget: string; message: string; website: string };
type Status = { state: 'idle' } | { state: 'submitting' } | { state: 'success'; message: string } | { state: 'error'; message: string };

const EMPTY: Fields = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', website: '' };

const input =
  'mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100';

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(f.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!PHONE_PATTERN.test(f.phone.trim())) errors.phone = 'Please enter a phone number so we can schedule the call.';
  if (!f.company.trim()) errors.company = 'Please enter your company name.';
  if (!f.service) errors.service = 'Please choose what you need help with.';
  if (!f.budget) errors.budget = 'Please choose a budget range.';
  if (f.message.trim().length < MIN_MESSAGE) errors.message = `Please tell us about your project in at least ${MIN_MESSAGE} characters.`;
  return errors;
}

/**
 * "Schedule a Consultation" form. Submits to /api/leads, which creates a Zoho CRM Lead
 * (Lead Source: Website) and emails the team. Success is shown only after the server confirms.
 */
export default function ConsultationDialog({ source, onClose }: { source: string; onClose: () => void }) {
  const id = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const submitting = status.state === 'submitting';
  useDialog(true, () => !submitting && onClose(), panelRef);

  const update = (key: keyof Fields, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (status.state === 'error') setStatus({ state: 'idle' });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) return;
    const found = validate(form);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }

    setStatus({ state: 'submitting' });
    try {
      const res = await fetchWithTimeout('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          budget: form.budget,
          message: [form.message.trim(), ...campaignParams()].join('\n'),
          source,
          website: form.website,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };
      if (!res.ok) {
        setStatus({ state: 'error', message: data.error || 'We could not send your request. Please try again.' });
        return;
      }
      trackEvent('generate_lead', { form: 'consultation', service: form.service, budget: form.budget });
      setStatus({ state: 'success', message: data.message || 'Thank you! We have received your request.' });
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please check your connection and try again. Your details are still here.' });
    }
  };

  const field = (key: keyof Fields) => ({
    id: `${id}-${key}`,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined,
  });
  const border = (key: keyof Fields) => (errors[key] ? 'border-rose-400' : 'border-slate-200');
  const error = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-1.5 text-xs font-medium text-rose-600">
        {errors[key]}
      </p>
    ) : null;
  const label = (key: keyof Fields, text: string) => (
    <label htmlFor={`${id}-${key}`} className="text-sm font-semibold text-slate-700">
      {text} <span className="text-rose-500">*</span>
    </label>
  );

  return (
    <div
      className="fixed inset-0 z-[85] flex items-end justify-center sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && !submitting && onClose()}
    >
      <div aria-hidden className="product-fade pointer-events-none absolute inset-0 bg-slate-950/50 backdrop-blur-sm" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        tabIndex={-1}
        className="product-zoom relative max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl outline-none sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-6 py-5 backdrop-blur sm:px-7">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <CalendarDays className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 id={`${id}-title`} className="text-xl font-bold tracking-tight text-slate-900">
                Schedule a Consultation
              </h2>
              <p className="mt-0.5 text-sm text-slate-500">Tell us about your project. Our team will contact you to set up a call.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Close"
            className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-50"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {status.state === 'success' ? (
          <div role="status" aria-live="polite" className="flex flex-col items-center px-6 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-lg font-semibold text-slate-900">{status.message}</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">Our team will call or email you to arrange a time for your consultation.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="grid gap-4 px-6 py-6 sm:grid-cols-2 sm:px-7">
            <div className="hidden" aria-hidden>
              <label htmlFor={`${id}-website`}>Website</label>
              <input id={`${id}-website`} tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} />
            </div>

            <div>
              {label('name', 'Full name')}
              <input {...field('name')} autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} className={`${input} ${border('name')}`} />
              {error('name')}
            </div>
            <div>
              {label('email', 'Email')}
              <input {...field('email')} type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={`${input} ${border('email')}`} />
              {error('email')}
            </div>
            <div>
              {label('phone', 'Phone')}
              <input
                {...field('phone')}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 …"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={`${input} ${border('phone')}`}
              />
              {error('phone')}
            </div>
            <div>
              {label('company', 'Company')}
              <input {...field('company')} autoComplete="organization" value={form.company} onChange={(e) => update('company', e.target.value)} className={`${input} ${border('company')}`} />
              {error('company')}
            </div>
            <div>
              {label('service', 'What do you need help with?')}
              <select {...field('service')} value={form.service} onChange={(e) => update('service', e.target.value)} className={`${input} ${border('service')}`}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {error('service')}
            </div>
            <div>
              {label('budget', 'Budget')}
              <select {...field('budget')} value={form.budget} onChange={(e) => update('budget', e.target.value)} className={`${input} ${border('budget')}`}>
                <option value="">Select a budget range</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              {error('budget')}
            </div>
            <div className="sm:col-span-2">
              {label('message', 'Tell us about your project')}
              <textarea
                {...field('message')}
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Your goals, timeline, and any specific challenges you'd like to discuss."
                className={`${input} resize-y ${border('message')}`}
              />
              {error('message')}
            </div>

            <div className="sm:col-span-2">
              {status.state === 'error' && (
                <p role="alert" className="mb-4 flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700 ring-1 ring-rose-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                {submitting ? 'Sending…' : 'Schedule my consultation'}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                We use these details only to arrange your consultation. See our{' '}
                <Link href="/privacy-policy" className="font-medium text-indigo-700 hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
