'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Loader2, X } from 'lucide-react';
import { useDialog } from '@/lib/useDialog';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

type Props = {
  open: boolean;
  onClose: () => void;
  /** Recorded with the lead so the team knows which page it came from. */
  source: string;
};

const PROJECT_TYPES = [
  'Website Development',
  'Web Application',
  'Mobile App',
  'E-commerce',
  'Zoho / CRM / ERP',
  'IoT & Hardware',
  'Technology Consulting',
  'Other',
];

const EMPTY = { name: '', email: '', company: '', phone: '', projectType: '', message: '', website: '' };

type Status = { state: 'idle' } | { state: 'submitting' } | { state: 'success'; message: string } | { state: 'error'; message: string };

const fieldClass =
  'w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200';

export default function ConsultationModal({ open, onClose, source }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const titleId = `${id}-title`;

  const close = () => {
    if (status.state === 'success') setStatus({ state: 'idle' });
    onClose();
  };

  useDialog(open, close, panelRef);

  if (!open) return null;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.state === 'error') setStatus({ state: 'idle' });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.state === 'submitting') return;
    setStatus({ state: 'submitting' });

    try {
      const res = await fetchWithTimeout('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: form.projectType || 'Consultation request',
          source,
          message: form.message,
          website: form.website,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };

      if (!res.ok) {
        setStatus({ state: 'error', message: data.error || 'Something went wrong. Please try again.' });
        return;
      }
      setForm(EMPTY);
      setStatus({ state: 'success', message: data.message || 'Thank you! We will get back to you soon.' });
    } catch {
      setStatus({
        state: 'error',
        message: 'We could not reach the server. Check your connection and try again — your details are still here.',
      });
    }
  };

  const submitting = status.state === 'submitting';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 p-4 backdrop-blur-md animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !submitting) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl outline-none animate-scale-in"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <div>
            <h2 id={titleId} className="mb-1 text-2xl font-bold text-white">
              Schedule a Consultation
            </h2>
            <p className="text-sm text-blue-100">Let&apos;s discuss how we can help your business grow</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close dialog"
            className="rounded-full p-2 text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        {status.state === 'success' ? (
          <div className="space-y-5 p-8 text-center" role="status" aria-live="polite">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" aria-hidden />
            <p className="text-lg font-semibold text-slate-900">{status.message}</p>
            <button
              type="button"
              onClick={close}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-indigo-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 p-6">
            {/* Honeypot: hidden from people, tempting to bots. */}
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
              <label htmlFor={`${id}-website`}>Website</label>
              <input
                id={`${id}-website`}
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={onChange}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field id={`${id}-name`} label="Full Name" required>
                <input
                  id={`${id}-name`}
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  maxLength={200}
                  className={fieldClass}
                />
              </Field>
              <Field id={`${id}-email`} label="Email Address" required>
                <input
                  id={`${id}-email`}
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  maxLength={200}
                  className={fieldClass}
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field id={`${id}-company`} label="Company Name" required>
                <input
                  id={`${id}-company`}
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={onChange}
                  required
                  maxLength={200}
                  className={fieldClass}
                />
              </Field>
              <Field id={`${id}-phone`} label="Phone Number">
                <input
                  id={`${id}-phone`}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange}
                  maxLength={40}
                  className={fieldClass}
                  placeholder="+91 …"
                />
              </Field>
            </div>

            <Field id={`${id}-type`} label="What do you need help with?">
              <select id={`${id}-type`} name="projectType" value={form.projectType} onChange={onChange} className={fieldClass}>
                <option value="">Select a service (optional)</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <Field id={`${id}-message`} label="Tell us about your project" required>
              <textarea
                id={`${id}-message`}
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={4}
                maxLength={5000}
                className={`${fieldClass} resize-none`}
                placeholder="Your goals, timeline, and any specific challenges you'd like to discuss…"
              />
            </Field>

            <div aria-live="assertive">
              {status.state === 'error' && (
                <p role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
                  {status.message}
                </p>
              )}
            </div>

            <p className="text-xs text-slate-500">
              By submitting, you agree that we may contact you about your enquiry as described in our{' '}
              <Link href="/privacy-policy" className="font-medium text-blue-600 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={close}
                disabled={submitting}
                className="flex-1 rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                {submitting ? 'Sending…' : 'Send Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500" aria-hidden>*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      {children}
    </div>
  );
}
