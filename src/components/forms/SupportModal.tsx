'use client';

import { useId, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, X } from 'lucide-react';
import { useDialog } from '@/lib/useDialog';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

type Props = {
  open: boolean;
  onClose: () => void;
};

const EMPTY = { name: '', email: '', subject: '', message: '', website: '' };

type Status = { state: 'idle' } | { state: 'submitting' } | { state: 'success'; message: string } | { state: 'error'; message: string };

const fieldClass =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500';

/** Support requests are emailed to the team and created as Zoho CRM leads (Lead Source: Contact Form). */
export default function SupportModal({ open, onClose }: Props) {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.state === 'error') setStatus({ state: 'idle' });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.state === 'submitting') return;
    setStatus({ state: 'submitting' });

    try {
      const res = await fetchWithTimeout('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'support', ...form }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };

      if (!res.ok) {
        setStatus({ state: 'error', message: data.error || 'Something went wrong. Please try again.' });
        return;
      }
      setForm(EMPTY);
      setStatus({ state: 'success', message: data.message || 'Thank you! Our support team will get back to you soon.' });
    } catch {
      setStatus({
        state: 'error',
        message: 'We could not reach the server. Check your connection and try again — your message is still here.',
      });
    }
  };

  const submitting = status.state === 'submitting';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 p-4 backdrop-blur-md"
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
        className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-lg bg-white shadow-2xl outline-none"
      >
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 id={titleId} className="text-2xl font-bold text-slate-900">
              Contact Support
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Close dialog"
              className="rounded-full p-1 text-slate-400 transition-colors hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>

          {status.state === 'success' ? (
            <div className="space-y-5 text-center" role="status" aria-live="polite">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" aria-hidden />
              <p className="font-semibold text-slate-900">{status.message}</p>
              <button
                type="button"
                onClick={close}
                className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
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

              <div>
                <label htmlFor={`${id}-name`} className="mb-1 block text-sm font-medium text-slate-700">
                  Full Name <span aria-hidden>*</span>
                </label>
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
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor={`${id}-email`} className="mb-1 block text-sm font-medium text-slate-700">
                  Email Address <span aria-hidden>*</span>
                </label>
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
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor={`${id}-subject`} className="mb-1 block text-sm font-medium text-slate-700">
                  Subject <span aria-hidden>*</span>
                </label>
                <input
                  id={`${id}-subject`}
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  required
                  maxLength={200}
                  className={fieldClass}
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label htmlFor={`${id}-message`} className="mb-1 block text-sm font-medium text-slate-700">
                  Message <span aria-hidden>*</span>
                </label>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={4}
                  maxLength={5000}
                  className={fieldClass}
                  placeholder="Please describe your issue or question..."
                />
              </div>

              <div aria-live="assertive">
                {status.state === 'error' && (
                  <p role="alert" className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
                    {status.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={close}
                  disabled={submitting}
                  className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-60"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                  {submitting ? 'Sending…' : 'Send Support Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
