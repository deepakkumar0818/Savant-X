'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { BUDGET_OPTIONS, SERVICE_OPTIONS, type ServiceId } from './data';
import { SELECT_SERVICE_EVENT } from './SelectServiceLink';

/** Fired on window once the server confirms a lead was delivered. */
export const LEAD_SENT_EVENT = 'zoho:lead-sent';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: ServiceId | '';
  budget: string;
  message: string;
  website: string; // honeypot
};

type Status = { state: 'idle' } | { state: 'submitting' } | { state: 'success'; message: string } | { state: 'error'; message: string };

const EMPTY: Fields = { name: '', email: '', company: '', phone: '', service: '', budget: '', message: '', website: '' };
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

/** Campaign parameters on the current URL, so the lead keeps its source. */
function campaignParams() {
  const params = new URLSearchParams(window.location.search);
  return UTM_KEYS.filter((k) => params.get(k)).map((k) => `${k}: ${params.get(k)}`);
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE = 20;

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(f.email.trim())) errors.email = 'Please enter a valid business email.';
  if (!f.company.trim()) errors.company = 'Please enter your company name.';
  if (f.phone.trim() && !PHONE_PATTERN.test(f.phone.trim())) errors.phone = 'Please enter a valid phone number, or leave it blank.';
  if (!f.service) errors.service = 'Please choose the service you are interested in.';
  if (!f.budget) errors.budget = 'Please choose a budget range.';
  if (f.message.trim().length < MIN_MESSAGE)
    errors.message = `Please describe your business challenge in at least ${MIN_MESSAGE} characters.`;
  return errors;
}

const inputClass =
  'mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20';

/** Zoho enquiry form. Submits to /api/leads, which creates a Zoho CRM lead and then emails the team. */
export default function ZohoEnquiryForm({
  service,
  listenForServiceLinks = true,
}: {
  /** Pre-selects this service, and again whenever it changes. */
  service?: ServiceId;
  /** Follow the page's "Get started" buttons. Off when the lead popup handles them instead. */
  listenForServiceLinks?: boolean;
} = {}) {
  const id = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<Fields>(() => ({ ...EMPTY, service: service ?? '' }));
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  useEffect(() => {
    if (!service) return;
    setForm((f) => ({ ...f, service }));
    setErrors((e) => ({ ...e, service: undefined }));
  }, [service]);

  // "Get started" buttons elsewhere on the page pre-select a service.
  useEffect(() => {
    if (!listenForServiceLinks) return;
    const onSelect = (event: Event) => {
      const service = (event as CustomEvent<ServiceId>).detail;
      setForm((f) => ({ ...f, service }));
      setErrors((e) => ({ ...e, service: undefined }));
      setStatus((s) => (s.state === 'success' ? { state: 'idle' } : s));
      requestAnimationFrame(() => nameRef.current?.focus({ preventScroll: true }));
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, [listenForServiceLinks]);

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (status.state === 'error') setStatus({ state: 'idle' });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.state === 'submitting') return;

    const found = validate(form);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`${id}-${firstInvalid}`)?.focus();
      return;
    }

    setStatus({ state: 'submitting' });
    const serviceLabel = SERVICE_OPTIONS.find((s) => s.id === form.service)?.label ?? form.service;
    try {
      const res = await fetchWithTimeout('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: serviceLabel.startsWith('ERP: ') ? serviceLabel : `Zoho: ${serviceLabel}`,
          budget: form.budget,
          message: [form.message, ...campaignParams()].join('\n'),
          source: 'Zoho page',
          website: form.website,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };
      if (!res.ok) {
        setStatus({ state: 'error', message: data.error || 'We could not send your enquiry. Please try again.' });
        return;
      }
      // Only after the server confirms delivery.
      trackEvent('generate_lead', { form: 'zoho_consultation', service: form.service, budget: form.budget });
      setStatus({ state: 'success', message: data.message || 'Thank you! We have received your enquiry.' });
      setForm(EMPTY);
      window.dispatchEvent(new Event(LEAD_SENT_EVENT));
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  if (status.state === 'success') {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center px-6 py-14 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <p className="mt-4 text-lg font-semibold text-slate-900">{status.message}</p>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Next step: our Zoho team will review your requirements and contact you by email or phone to arrange
          your free consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: 'idle' })}
          className="mt-6 rounded-lg px-4 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200 transition hover:bg-indigo-50"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status.state === 'submitting';
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

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
      <div className="hidden" aria-hidden>
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={`${id}-name`} className="text-sm font-medium text-slate-700">
          Full name
        </label>
        <input
          ref={nameRef}
          {...field('name')}
          autoComplete="name"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={`${inputClass} ${border('name')}`}
        />
        {error('name')}
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="text-sm font-medium text-slate-700">
          Business email
        </label>
        <input
          {...field('email')}
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className={`${inputClass} ${border('email')}`}
        />
        {error('email')}
      </div>
      <div>
        <label htmlFor={`${id}-company`} className="text-sm font-medium text-slate-700">
          Company
        </label>
        <input
          {...field('company')}
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
          className={`${inputClass} ${border('company')}`}
        />
        {error('company')}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="text-sm font-medium text-slate-700">
          Phone <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          {...field('phone')}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className={`${inputClass} ${border('phone')}`}
        />
        {error('phone')}
      </div>
      <div>
        <label htmlFor={`${id}-service`} className="text-sm font-medium text-slate-700">
          Service
        </label>
        <select
          {...field('service')}
          value={form.service}
          onChange={(e) => update('service', e.target.value as ServiceId)}
          className={`${inputClass} ${border('service')}`}
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
        {error('service')}
      </div>
      <div>
        <label htmlFor={`${id}-budget`} className="text-sm font-medium text-slate-700">
          Budget range
        </label>
        <select
          {...field('budget')}
          value={form.budget}
          onChange={(e) => update('budget', e.target.value)}
          className={`${inputClass} ${border('budget')}`}
        >
          <option value="">Select a budget</option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {error('budget')}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className="text-sm font-medium text-slate-700">
          What business challenge do you want to solve?
        </label>
        <textarea
          {...field('message')}
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="For example: we use Zoho CRM but follow-ups are missed, and we want quotes sent from CRM with manager approval."
          className={`${inputClass} ${border('message')} resize-y`}
        />
        {error('message')}
      </div>

      <div className="sm:col-span-2">
        {status.state === 'error' && (
          <p role="alert" className="mb-4 rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700 ring-1 ring-rose-200">
            {status.message}
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          {submitting ? 'Sending…' : 'Book free consultation'}
        </button>
        <p className="mt-3 text-xs text-slate-500">
          We use these details only to respond to your enquiry. See our{' '}
          <Link href="/privacy-policy" className="font-medium text-indigo-700 underline-offset-2 hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
