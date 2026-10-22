'use client';

import { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Lock, MonitorSmartphone, Send } from 'lucide-react';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

const EMPTY_FORM = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  hardwareService: '',
  message: '',
  budget: '',
  website: '',
};

const FIELD =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100';
const LABEL = 'mb-1.5 block text-sm font-semibold text-slate-700';

function Required() {
  return (
    <span className="text-rose-500" aria-hidden>
      {' '}
      *
    </span>
  );
}

/** Contact page enquiry form. Success is shown only once /api/leads confirms Zoho CRM created the lead. */
export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      // Reset hardwareService when service is changed to non-hardware option
      if (name === 'service' && value !== 'hardware-development') {
        return { ...prev, [name]: value, hardwareService: '' };
      }
      return { ...prev, [name]: value };
    });
  };

  const optionLabel = (selectId: string, value: string) => {
    if (!value) return '';
    const select = document.getElementById(selectId) as HTMLSelectElement | null;
    return select?.querySelector<HTMLOptionElement>(`option[value="${value}"]`)?.textContent?.trim() || value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const service = [optionLabel('service', formData.service), optionLabel('hardwareService', formData.hardwareService)]
      .filter(Boolean)
      .join(' — ');

    try {
      const response = await fetchWithTimeout('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service,
          source: 'Contact page',
          budget: optionLabel('budget', formData.budget),
          message: formData.message,
          website: formData.website,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(EMPTY_FORM);
      } else {
        // Keep what the visitor typed so they can retry.
        setErrorMessage(data.error || '');
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-35px_rgba(79,70,229,0.4)] ring-1 ring-slate-200/80 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <MonitorSmartphone className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Start Your Project</h2>
          <p className="mt-1 text-sm text-slate-500">Tell us about your project and we&apos;ll make it happen.</p>
        </div>
      </div>

      <div aria-live="polite">
        {submitStatus === 'success' && (
          <div role="status" className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">Message sent successfully</p>
              <p className="text-sm">Thank you! We&apos;ll get back to you soon.</p>
            </div>
          </div>
        )}
        {submitStatus === 'error' && (
          <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            {errorMessage || 'Sorry, there was an error sending your message. Please try again or contact us directly.'}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="relative mt-7 space-y-5">
        {/* Honeypot: hidden from people, tempting to bots. */}
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleInputChange} />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={LABEL}>
              Full Name
              <Required />
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required autoComplete="name" suppressHydrationWarning className={FIELD} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email" className={LABEL}>
              Email Address
              <Required />
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required autoComplete="email" suppressHydrationWarning className={FIELD} placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="company" className={LABEL}>
              Company
              <Required />
            </label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} required autoComplete="organization" suppressHydrationWarning className={FIELD} placeholder="Your company name" />
          </div>
          <div>
            <label htmlFor="phone" className={LABEL}>
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" suppressHydrationWarning className={FIELD} placeholder="+91 …" />
          </div>
          <div>
            <label htmlFor="service" className={LABEL}>
              Service Interested
              <Required />
            </label>
            <select id="service" name="service" value={formData.service} onChange={handleInputChange} required suppressHydrationWarning className={FIELD}>
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-apps">Mobile Applications</option>
              <option value="ai-analytics">AI & Analytics</option>
              <option value="enterprise-solutions">Enterprise Solutions</option>
              <option value="hardware-development">Hardware & Electronics</option>
              <option value="zoho-integration">Zoho Integration</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={LABEL}>
              Budget Range
            </label>
            <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} suppressHydrationWarning className={FIELD}>
              <option value="">Select budget range</option>
              <option value="under-10l">Under ₹10,00,000</option>
              <option value="10l-25l">₹10,00,000 - ₹25,00,000</option>
              <option value="25l-50l">₹25,00,000 - ₹50,00,000</option>
              <option value="50l-1cr">₹50,00,000 - ₹1,00,00,000</option>
              <option value="over-1cr">Over ₹1,00,00,000</option>
            </select>
          </div>
        </div>

        {formData.service === 'hardware-development' && (
          <div className="animate-fade-in">
            <label htmlFor="hardwareService" className={LABEL}>
              Which Hardware Service?
              <Required />
            </label>
            <select id="hardwareService" name="hardwareService" value={formData.hardwareService} onChange={handleInputChange} required suppressHydrationWarning className={FIELD}>
              <option value="">Select hardware service</option>
              <option value="iot-solutions">IoT Solutions</option>
              <option value="embedded-systems">Embedded Systems Development</option>
              <option value="pcb-design">PCB Design & Circuit Engineering</option>
              <option value="firmware-development">Firmware Development</option>
              <option value="3d-printing-design">3D Printing and Designing</option>
              <option value="hardware-prototyping">Hardware Prototyping & Testing</option>
              <option value="industrial-automation">Industrial Automation</option>
              <option value="electronics-design">Electronics Design & Integration</option>
              <option value="product-development">Complete Product Development</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className={LABEL}>
            Project Details
            <Required />
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            suppressHydrationWarning
            className={`${FIELD} resize-none`}
            placeholder="Tell us about your project, goals, and any specific requirements…"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          suppressHydrationWarning
          className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
              Sending message…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden />
              Send Message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </>
          )}
        </button>
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <Lock className="h-3.5 w-3.5" aria-hidden />
          We respect your privacy. Your information is only used to reply to you.
        </p>
      </form>
    </div>
  );
}
