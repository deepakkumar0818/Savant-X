'use client';

import { useState } from 'react';
import {
  Building2,
  CheckCircle2,
  Layers,
  Loader2,
  Mail,
  Phone,
  Sparkles,
  Target,
  User,
} from 'lucide-react';
import ZohoCrmAnalytics from '@/components/zoho/ZohoCrmAnalytics';

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  zohoApps: string;
  lookingToBuild: string;
  honeypot: string;
};

type Props = {
  defaultZohoApps?: string;
  onSuccess?: () => void;
  submitClassName?: string;
  submitStyle?: React.CSSProperties;
  compact?: boolean;
  popup?: boolean;
  accentFrom?: string;
  accentTo?: string;
};

const emptyForm = (defaultZohoApps = ''): FormData => ({
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  zohoApps: defaultZohoApps,
  lookingToBuild: '',
  honeypot: '',
});

/** Must live outside the form so inputs don't remount (and lose focus) on each keystroke. */
function FieldWrap({
  icon: Icon,
  label,
  labelClassName,
  children,
}: {
  icon: typeof User;
  label: string;
  labelClassName: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClassName}>{label}</label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        {children}
      </div>
    </div>
  );
}

export default function ZohoStrategyForm({
  defaultZohoApps = '',
  onSuccess,
  submitClassName,
  submitStyle,
  compact = false,
  popup = false,
  accentFrom = '#226DB4',
  accentTo = '#1a5f9e',
}: Props) {
  const [formData, setFormData] = useState<FormData>(() => emptyForm(defaultZohoApps));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(
    "Thank you! We've received your request and will reach out soon."
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setSuccessMessage("Thank you! We've received your request and will reach out soon.");
    try {
      const serviceParam =
        typeof window !== 'undefined'
          ? new URLSearchParams(window.location.search).get('service')
          : null;

      const res = await fetch('/api/zoho-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          zohoApps: formData.zohoApps,
          requirement: formData.lookingToBuild,
          honeypot: formData.honeypot,
          service:
            serviceParam === 'smarturl' ? serviceParam : undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setSubmitStatus('success');
      setSuccessMessage(
        data.message || "Thank you! We've received your request and will reach out soon."
      );
      setFormData(emptyForm(defaultZohoApps));
      onSuccess?.();
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPopup = popup || compact;

  const defaultSubmitClass = popup
    ? 'group relative w-full overflow-hidden rounded-xl py-3 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70'
    : compact
      ? 'w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed'
      : 'w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed';

  const fieldClass = popup
    ? 'w-full rounded-xl border border-slate-200/90 bg-slate-50/80 py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/15'
    : compact
      ? 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20'
      : 'w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20';

  const labelClass = popup
    ? 'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500'
    : compact
      ? 'mb-1 block text-xs font-semibold text-slate-700'
      : 'mb-1.5 block text-sm font-semibold text-slate-700';

  const statusClass = popup
    ? 'flex items-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-medium'
    : compact
      ? 'rounded-lg border py-2 px-3 text-xs font-medium text-center'
      : 'rounded-xl border py-3 px-4 text-sm font-medium text-center';

  const popupSubmitStyle: React.CSSProperties = {
    background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
    boxShadow: `0 10px 24px -8px color-mix(in srgb, ${accentFrom} 55%, transparent)`,
    ...submitStyle,
  };

  return (
    <>
      <ZohoCrmAnalytics />
      <form onSubmit={handleSubmit} className={popup ? 'space-y-3' : isPopup ? 'space-y-2.5' : 'space-y-4'} suppressHydrationWarning>
        {/* Honeypot — required by Zoho CRM Web-to-Lead */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <div className={popup ? 'grid grid-cols-2 gap-3' : isPopup ? 'grid grid-cols-2 gap-2.5' : 'space-y-4'}>
          {isPopup ? (
            popup ? (
              <>
                <FieldWrap icon={User} label="Full Name *" labelClassName={labelClass}>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className={fieldClass} placeholder="Your name" suppressHydrationWarning />
                </FieldWrap>
                <FieldWrap icon={Building2} label="Company *" labelClassName={labelClass}>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required className={fieldClass} placeholder="Company" suppressHydrationWarning />
                </FieldWrap>
              </>
            ) : (
              <>
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className={fieldClass} placeholder="Your name" suppressHydrationWarning />
                </div>
                <div>
                  <label className={labelClass}>Company *</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required className={fieldClass} placeholder="Company" suppressHydrationWarning />
                </div>
              </>
            )
          ) : (
            <>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="Your name"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className={labelClass}>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="Company name"
                  suppressHydrationWarning
                />
              </div>
            </>
          )}
        </div>
        <div className={`grid gap-2.5 ${isPopup ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 sm:gap-4'}`}>
          {popup ? (
            <>
              <FieldWrap icon={Mail} label="Email *" labelClassName={labelClass}>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldClass} placeholder="you@company.com" suppressHydrationWarning />
              </FieldWrap>
              <FieldWrap icon={Phone} label="Phone *" labelClassName={labelClass}>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={fieldClass} placeholder="+91 98765 43210" suppressHydrationWarning />
              </FieldWrap>
            </>
          ) : (
            <>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldClass} placeholder="you@company.com" suppressHydrationWarning />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={fieldClass} placeholder={compact ? '+91 98765 43210' : '+1 234 567 8900'} suppressHydrationWarning />
              </div>
            </>
          )}
        </div>
        {isPopup ? (
          popup ? (
            <div className="grid grid-cols-2 gap-3">
              <FieldWrap icon={Layers} label="Zoho Apps" labelClassName={labelClass}>
                <input type="text" name="zohoApps" value={formData.zohoApps} onChange={handleInputChange} className={fieldClass} placeholder="e.g. CRM, Books" suppressHydrationWarning />
              </FieldWrap>
              <FieldWrap icon={Target} label="Your Goal" labelClassName={labelClass}>
                <input type="text" name="lookingToBuild" value={formData.lookingToBuild} onChange={handleInputChange} className={fieldClass} placeholder="Brief goal" suppressHydrationWarning />
              </FieldWrap>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className={labelClass}>Zoho Apps</label>
                <input type="text" name="zohoApps" value={formData.zohoApps} onChange={handleInputChange} className={fieldClass} placeholder="e.g. CRM, Books" suppressHydrationWarning />
              </div>
              <div>
                <label className={labelClass}>Your Goal</label>
                <input type="text" name="lookingToBuild" value={formData.lookingToBuild} onChange={handleInputChange} className={fieldClass} placeholder="Brief goal" suppressHydrationWarning />
              </div>
            </div>
          )
        ) : (
          <>
            <div>
              <label className={labelClass}>Which Zoho Apps Are You Using?</label>
              <input
                type="text"
                name="zohoApps"
                value={formData.zohoApps}
                onChange={handleInputChange}
                className={fieldClass}
                placeholder="e.g. CRM, Books, Creator"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className={labelClass}>What Are You Looking To Build?</label>
              <textarea
                name="lookingToBuild"
                value={formData.lookingToBuild}
                onChange={handleInputChange}
                rows={2}
                className={`${fieldClass} resize-none`}
                placeholder="Brief description of your goals"
                suppressHydrationWarning
              />
            </div>
          </>
        )}
        {submitStatus === 'success' && (
          <p className={`${statusClass} ${popup ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-emerald-50 border-emerald-200 text-emerald-800 text-center'}`}>
            {popup && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
            {successMessage}
          </p>
        )}
        {submitStatus === 'error' && (
          <p className={`${statusClass} bg-red-50 border-red-200 text-red-800 ${popup ? '' : 'text-center'}`}>
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={submitClassName ?? defaultSubmitClass}
          style={popup ? popupSubmitStyle : submitStyle}
          suppressHydrationWarning
        >
          {isSubmitting ? (
            <span className="inline-flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </span>
          ) : popup ? (
            <span className="inline-flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4" />
              Book My Free Call
            </span>
          ) : (
            'Submit'
          )}
        </button>
        {popup && (
          <p className="text-center text-[10px] leading-relaxed text-slate-400">
            Free 30-min audit · No spam · Official Zoho Partner
          </p>
        )}
      </form>
      {!isPopup && (
        <p className="mt-4 text-center text-xs text-slate-500">
          We use your details only to contact you about your Zoho strategy. We do not share them with
          third parties.
        </p>
      )}
    </>
  );
}
