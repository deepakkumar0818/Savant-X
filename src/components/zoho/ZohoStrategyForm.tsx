'use client';

import tx from '@/content/text/components/zoho/ZohoStrategyForm.json';
import { useId, useState } from 'react';
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
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

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
  htmlFor,
  children,
}: {
  icon: typeof User;
  label: string;
  labelClassName: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClassName}>{label}</label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
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
  const fid = useId();
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

      const res = await fetchWithTimeout('/api/zoho-form', {
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
                <FieldWrap icon={User} label={tx.full_name} labelClassName={labelClass} htmlFor={`${fid}-fullName`}>
                  <input id={`${fid}-fullName`} type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className={fieldClass} placeholder={tx.your_name} suppressHydrationWarning />
                </FieldWrap>
                <FieldWrap icon={Building2} label={tx.company} labelClassName={labelClass} htmlFor={`${fid}-companyName`}>
                  <input id={`${fid}-companyName`} type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required className={fieldClass} placeholder={tx.company_2} suppressHydrationWarning />
                </FieldWrap>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor={`${fid}-fullName`} className={labelClass}>{tx.full_name}</label>
                  <input id={`${fid}-fullName`} type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className={fieldClass} placeholder={tx.your_name} suppressHydrationWarning />
                </div>
                <div>
                  <label htmlFor={`${fid}-companyName`} className={labelClass}>{tx.company}</label>
                  <input id={`${fid}-companyName`} type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required className={fieldClass} placeholder={tx.company_2} suppressHydrationWarning />
                </div>
              </>
            )
          ) : (
            <>
              <div>
                <label htmlFor={`${fid}-fullName`} className={labelClass}>{tx.full_name}</label>
                <input id={`${fid}-fullName`}
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder={tx.your_name}
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label htmlFor={`${fid}-companyName`} className={labelClass}>{tx.company_name}</label>
                <input id={`${fid}-companyName`}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder={tx.company_name_2}
                  suppressHydrationWarning
                />
              </div>
            </>
          )}
        </div>
        <div className={`grid gap-2.5 ${isPopup ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 sm:gap-4'}`}>
          {popup ? (
            <>
              <FieldWrap icon={Mail} label={tx.email} labelClassName={labelClass} htmlFor={`${fid}-email`}>
                <input id={`${fid}-email`} type="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldClass} placeholder="you@company.com" suppressHydrationWarning />
              </FieldWrap>
              <FieldWrap icon={Phone} label={tx.phone} labelClassName={labelClass} htmlFor={`${fid}-phone`}>
                <input id={`${fid}-phone`} type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={fieldClass} placeholder="+91 98765 43210" suppressHydrationWarning />
              </FieldWrap>
            </>
          ) : (
            <>
              <div>
                <label htmlFor={`${fid}-email`} className={labelClass}>{tx.email}</label>
                <input id={`${fid}-email`} type="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldClass} placeholder="you@company.com" suppressHydrationWarning />
              </div>
              <div>
                <label htmlFor={`${fid}-phone`} className={labelClass}>{tx.phone}</label>
                <input id={`${fid}-phone`} type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={fieldClass} placeholder={compact ? '+91 98765 43210' : '+1 234 567 8900'} suppressHydrationWarning />
              </div>
            </>
          )}
        </div>
        {isPopup ? (
          popup ? (
            <div className="grid grid-cols-2 gap-3">
              <FieldWrap icon={Layers} label={tx.zoho_apps} labelClassName={labelClass} htmlFor={`${fid}-zohoApps`}>
                <input id={`${fid}-zohoApps`} type="text" name="zohoApps" value={formData.zohoApps} onChange={handleInputChange} className={fieldClass} placeholder={tx.e_g_crm_books} suppressHydrationWarning />
              </FieldWrap>
              <FieldWrap icon={Target} label={tx.your_goal} labelClassName={labelClass} htmlFor={`${fid}-lookingToBuild`}>
                <input id={`${fid}-lookingToBuild`} type="text" name="lookingToBuild" value={formData.lookingToBuild} onChange={handleInputChange} className={fieldClass} placeholder={tx.brief_goal} suppressHydrationWarning />
              </FieldWrap>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${fid}-zohoApps`} className={labelClass}>{tx.zoho_apps}</label>
                <input id={`${fid}-zohoApps`} type="text" name="zohoApps" value={formData.zohoApps} onChange={handleInputChange} className={fieldClass} placeholder={tx.e_g_crm_books} suppressHydrationWarning />
              </div>
              <div>
                <label htmlFor={`${fid}-lookingToBuild`} className={labelClass}>{tx.your_goal}</label>
                <input id={`${fid}-lookingToBuild`} type="text" name="lookingToBuild" value={formData.lookingToBuild} onChange={handleInputChange} className={fieldClass} placeholder={tx.brief_goal} suppressHydrationWarning />
              </div>
            </div>
          )
        ) : (
          <>
            <div>
              <label htmlFor={`${fid}-zohoApps`} className={labelClass}>{tx.which_zoho_apps_are_you}</label>
              <input id={`${fid}-zohoApps`}
                type="text"
                name="zohoApps"
                value={formData.zohoApps}
                onChange={handleInputChange}
                className={fieldClass}
                placeholder={tx.e_g_crm_books_creator}
                suppressHydrationWarning
              />
            </div>
            <div>
              <label htmlFor={`${fid}-lookingToBuild`} className={labelClass}>{tx.what_are_you_looking_to}</label>
              <textarea id={`${fid}-lookingToBuild`}
                name="lookingToBuild"
                value={formData.lookingToBuild}
                onChange={handleInputChange}
                rows={2}
                className={`${fieldClass} resize-none`}
                placeholder={tx.brief_description_of_your_goals}
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
              <Loader2 className="h-4 w-4 animate-spin" />{tx.submitting}</span>
          ) : popup ? (
            <span className="inline-flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4" />{tx.book_my_free_call}</span>
          ) : (
            tx.submit
          )}
        </button>
        {popup && (
          <p className="text-center text-[10px] leading-relaxed text-slate-400">{tx.free_30_min_audit_no}</p>
        )}
      </form>
      {!isPopup && (
        <p className="mt-4 text-center text-xs text-slate-500">{tx.we_use_your_details_only}</p>
      )}
    </>
  );
}
