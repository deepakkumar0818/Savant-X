import tx from '@/content/text/components/Footer.json';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';
import { COMPANY, OFFICES, SOCIAL_LINKS as SOCIAL, formatOfficeAddress, officeMapUrl } from '@/lib/company';

const SOCIAL_LINKS = [
  {
    href: SOCIAL.x,
    label: tx.x_twitter,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: SOCIAL.linkedin,
    label: tx.linkedin,
    icon: <Linkedin className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />,
  },
  {
    href: SOCIAL.facebook,
    label: tx.facebook,
    icon: <Facebook className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />,
  },
  {
    href: SOCIAL.instagram,
    label: tx.instagram,
    icon: <Instagram className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />,
  },
  {
    href: SOCIAL.threads,
    label: tx.threads,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.277.676c-.533-1.886-1.406-3.271-2.605-4.124-1.154-.824-2.652-1.283-4.453-1.296-2.867.024-5.044 1.103-6.293 3.074-.953 1.505-1.435 3.533-1.435 6.027v.017c0 2.493.482 4.522 1.435 6.027 1.249 1.972 3.426 3.05 6.293 3.074 1.801-.013 3.299-.472 4.453-1.296 1.199-.853 2.072-2.238 2.605-4.124l2.277.676c-.651 2.337-1.832 4.177-3.509 5.467-1.783 1.373-4.08 2.078-6.826 2.098z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <img
              src="/images/logos/Logo.png"
              alt={tx.savantx_technologies_pvt_ltd_logo}
              width={124}
              height={44}
              loading="lazy"
              className="mb-5 h-11 w-auto object-contain"
            />
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600">{tx.software_integrations_and_electronics_fr}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm ring-1 ring-slate-100/80 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md"
                >
                  {icon}
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{tx.quick_links}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 transition hover:text-indigo-700">{tx.about}</Link>
              </li>
              <li>
                <Link href="/expertise/what-we-do" className="text-slate-600 transition hover:text-indigo-700">{tx.services}</Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-600 transition hover:text-indigo-700">{tx.work}</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 transition hover:text-indigo-700">{tx.products}</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 transition hover:text-indigo-700">{tx.contact}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{tx.expertise}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/expertise/websites" className="text-slate-600 transition hover:text-indigo-700">{tx.web_development}</Link>
              </li>
              <li>
                <Link href="/expertise/mobile-apps" className="text-slate-600 transition hover:text-indigo-700">{tx.mobile_apps}</Link>
              </li>
              <li>
                <Link href="/expertise/hardware-electronics" className="text-slate-600 transition hover:text-indigo-700">{tx.hardware_electronics}</Link>
              </li>
              <li>
                <Link href="/expertise/iot-embedded-systems" className="text-slate-600 transition hover:text-indigo-700">{tx.iot_embedded}</Link>
              </li>
              <li>
                <Link href="/expertise/pcb-design" className="text-slate-600 transition hover:text-indigo-700">{tx.pcb_design}</Link>
              </li>
              <li>
                <Link href="/expertise/ui-ux-design" className="text-slate-600 transition hover:text-indigo-700">{tx.ui_ux}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{tx.offices_contact}</h4>
            <ul className="space-y-2.5 text-sm">
              {OFFICES.map((office) => (
                <li key={office.id}>
                  <a
                    href={officeMapUrl(office)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={formatOfficeAddress(office)}
                    className="text-slate-600 transition hover:text-indigo-700"
                  >
                    {office.city}, {office.region}
                  </a>
                </li>
              ))}
              <li>
                <a href={COMPANY.phone.href} className="text-slate-600 transition hover:text-indigo-700">
                  {COMPANY.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="break-all text-slate-600 transition hover:text-indigo-700">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{tx.partners_platforms}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{tx.aws_zoho_next_js_iot}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}{tx.all_rights_reserved}</p>
          <div className="flex flex-wrap justify-center gap-x-3">
            <Link href="/privacy-policy" className="inline-flex min-h-[44px] items-center px-2 transition hover:text-slate-800">{tx.privacy}</Link>
            <Link href="/terms-of-service" className="inline-flex min-h-[44px] items-center px-2 transition hover:text-slate-800">{tx.terms}</Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center px-2 transition hover:text-slate-800">{tx.cookies}</Link>
            <Link href="/refund-cancellation" className="inline-flex min-h-[44px] items-center px-2 transition hover:text-slate-800">{tx.refunds}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
