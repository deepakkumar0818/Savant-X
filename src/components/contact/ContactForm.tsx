'use client';

import tx from '@/content/text/components/contact/ContactForm.json';
import { useId, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Lock, MonitorSmartphone, Send } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';
import { LEAD_SENT_EVENT } from '@/lib/leadPopup';
import { goToThankYou } from '@/lib/thankYou';
import forms from '@/content/forms.json';
import { BUDGETS, campaignParams, EMAIL_PATTERN, MIN_MESSAGE, PHONE_PATTERN } from '@/components/forms/leadForm';

/**
 * Service options are edited in the admin (Forms). Each label maps to a Lead Type / IT Lead
 * Subcategory in Zoho CRM (see classifyService in src/lib/zohoLeads.ts); the admin shows the mapping.
 */
const SERVICES: string[] = forms.contact.services;
/** The service that shows the second "Which hardware service?" list. */
const HARDWARE = forms.contact.hardwareService;

/** Each maps to an Electronics Lead Subcategory in Zoho CRM. */
const HARDWARE_SERVICES: string[] = forms.contact.hardwareServices;

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  hardwareService: string;
  budget: string;
  message: string;
  website: string; // honeypot
};

const EMPTY_FORM: Fields = { name: '', email: '', company: '', phone: '', service: '', hardwareService: '', budget: '', message: '', website: '' };

type Status = { state: 'idle' } | { state: 'submitting' } | { state: 'success' } | { state: 'error'; message: string };

const FIELD =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100';
const LABEL = 'mb-1.5 block text-sm font-semibold text-slate-700';

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(f.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!f.company.trim()) errors.company = 'Please enter your company name.';
  if (!PHONE_PATTERN.test(f.phone.trim())) errors.phone = 'Please enter a phone number so we can reach you.';
  if (!f.service) errors.service = 'Please choose the service you are interested in.';
  if (!f.budget) errors.budget = 'Please choose a budget range.';
  if (f.service === HARDWARE && !f.hardwareService) errors.hardwareService = 'Please choose the hardware service.';
  if (f.message.trim().length < MIN_MESSAGE) errors.message = `Please tell us about your project in at least ${MIN_MESSAGE} characters.`;
  return errors;
}

/** Contact page enquiry form. Success is shown only once /api/leads confirms Zoho CRM created the lead. */
export default function ContactForm() {
  const id = useId();
  const [form, setForm] = useState<Fields>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const submitting = status.state === 'submitting';

  const update = (key: keyof Fields, value: string) => {
    // A non-hardware service clears the hardware choice.
    setForm((f) => ({ ...f, [key]: value, ...(key === 'service' && value !== HARDWARE ? { hardwareService: '' } : {}) }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (status.state === 'error' || status.state === 'success') setStatus({ state: 'idle' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const response = await fetchWithTimeout('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: [form.service, form.hardwareService].filter(Boolean).join(' — '),
          budget: form.budget,
          message: [form.message.trim(), ...campaignParams()].join('\n'),
          source: 'Contact page',
          website: form.website,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        // Keep what the visitor typed so they can retry.
        setStatus({ state: 'error', message: data.error || 'Sorry, there was an error sending your message. Please try again or contact us directly.' });
        return;
      }
      trackEvent('generate_lead', { form: 'contact', service: form.service, budget: form.budget });
      window.dispatchEvent(new Event(LEAD_SENT_EVENT));
      setStatus({ state: 'success' });
      setForm(EMPTY_FORM);
      goToThankYou('contact');
    } catch {
      setStatus({ state: 'error', message: tx.network_error_please_check_your });
    }
  };

  const field = (key: keyof Fields) => ({
    id: `${id}-${key}`,
    name: key,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined,
    className: `${FIELD} ${errors[key] ? 'border-rose-400' : 'border-slate-200'}`,
  });
  const error = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-1.5 text-xs font-medium text-rose-600">
        {errors[key]}
      </p>
    ) : null;
  const label = (key: keyof Fields, text: string) => (
    <label htmlFor={`${id}-${key}`} className={LABEL}>
      {text}
      <span className="text-rose-500" aria-hidden>
        {' '}
        *
      </span>
    </label>
  );

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-35px_rgba(79,70,229,0.4)] ring-1 ring-slate-200/80 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <MonitorSmartphone className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{tx.start_your_project}</h2>
          <p className="mt-1 text-sm text-slate-500">{tx.tell_us_about_your_project}</p>
        </div>
      </div>

      <div aria-live="polite">
        {status.state === 'success' && (
          <div role="status" className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">{tx.message_sent_successfully}</p>
              <p className="text-sm">{tx.thank_you_we_ll_get}</p>
            </div>
          </div>
        )}
        {status.state === 'error' && (
          <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            {status.message}
          </div>
        )}
      </div>

      <form noValidate onSubmit={handleSubmit} className="relative mt-7 space-y-5">
        {/* Honeypot: hidden from people, tempting to bots. */}
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor={`${id}-website`}>{tx.website}</label>
          <input id={`${id}-website`} type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            {label('name', 'Full Name')}
            <input {...field('name')} type="text" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder={tx.your_full_name} />
            {error('name')}
          </div>
          <div>
            {label('email', 'Email Address')}
            <input {...field('email')} type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" />
            {error('email')}
          </div>
          <div>
            {label('company', 'Company')}
            <input {...field('company')} type="text" autoComplete="organization" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder={tx.your_company_name} />
            {error('company')}
          </div>
          <div>
            {label('phone', 'Phone Number')}
            <input {...field('phone')} type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 …" />
            {error('phone')}
          </div>
          <div>
            {label('service', 'Service Interested')}
            <select {...field('service')} value={form.service} onChange={(e) => update('service', e.target.value)}>
              <option value="">{tx.select_a_service}</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {error('service')}
          </div>
          <div>
            {label('budget', 'Budget Range')}
            <select {...field('budget')} value={form.budget} onChange={(e) => update('budget', e.target.value)}>
              <option value="">{tx.select_budget_range}</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            {error('budget')}
          </div>
        </div>

        {form.service === HARDWARE && (
          <div className="animate-fade-in">
            {label('hardwareService', 'Which Hardware Service?')}
            <select {...field('hardwareService')} value={form.hardwareService} onChange={(e) => update('hardwareService', e.target.value)}>
              <option value="">{tx.select_hardware_service}</option>
              {HARDWARE_SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {error('hardwareService')}
          </div>
        )}

        <div>
          {label('message', 'Project Details')}
          <textarea
            {...field('message')}
            rows={5}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder={tx.tell_us_about_your_project_2}
          />
          {error('message')}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden />{tx.sending_message}</>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden />{tx.send_message}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </>
          )}
        </button>
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <Lock className="h-3.5 w-3.5" aria-hidden />{tx.we_respect_your_privacy_your}</p>
      </form>
    </div>
  );
}
