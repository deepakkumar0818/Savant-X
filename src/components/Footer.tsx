import tx from '@/content/text/components/Footer.json';
import Image from 'next/image';
import Link from 'next/link';
import { Box, ChevronRight, Facebook, Instagram, Layers, Link2, Linkedin, Mail, MapPin, Phone, Radar, type LucideIcon } from 'lucide-react';
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
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
      </svg>
    ),
  },
] as const;

const QUICK_LINKS = [
  { href: '/about', label: tx.about },
  { href: '/expertise/what-we-do', label: tx.services },
  { href: '/work', label: tx.work },
  { href: '/products', label: tx.products },
  { href: '/contact', label: tx.contact },
];

const EXPERTISE_LINKS = [
  { href: '/expertise/websites', label: tx.web_development },
  { href: '/expertise/mobile-apps', label: tx.mobile_apps },
  { href: '/expertise/hardware-electronics', label: tx.hardware_electronics },
  { href: '/expertise/iot-embedded-systems', label: tx.iot_embedded },
  { href: '/expertise/pcb-design', label: tx.pcb_design },
  { href: '/expertise/ui-ux-design', label: tx.ui_ux },
];

/** Platforms we build on: a logo image, or an icon when there is no logo file. */
const PLATFORMS: { name: string; logo?: string; icon?: LucideIcon }[] = [
  { name: tx.aws, logo: '/images/icons/aws1.png' },
  { name: tx.zoho, logo: '/images/footer/zoho-logo.webp' },
  { name: tx.next_js, logo: '/images/icons/nextjs.png' },
  { name: tx.iot_edge, icon: Radar },
  { name: tx.postgresql, logo: '/images/icons/postgresql.png' },
  { name: tx.kubernetes, logo: '/images/icons/kubernatives.png' },
];

const LEGAL_LINKS = [
  { href: '/privacy-policy', label: tx.privacy },
  { href: '/terms-of-service', label: tx.terms },
  { href: '/cookie-policy', label: tx.cookies },
  { href: '/refund-cancellation', label: tx.refunds },
];

function ColumnHeading({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <h4 className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-slate-900">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-[0_8px_20px_-10px_rgba(79,70,229,0.5)] ring-1 ring-slate-200/80">
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      </span>
      {children}
    </h4>
  );
}

const linkRow =
  'group flex items-center justify-between gap-3 rounded-lg py-1.5 text-[15px] text-slate-700 transition hover:text-indigo-700';

function ContactRow({ href, icon: Icon, external, title, children }: { href: string; icon: LucideIcon; external?: boolean; title?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      title={title}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-indigo-700 xl:text-[15px]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span className="min-w-0 break-words">{children}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-[#f7f8ff] to-white text-slate-800">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <img
              src="/images/logos/Logo.png"
              alt={tx.savantx_technologies_pvt_ltd_logo}
              width={124}
              height={44}
              loading="lazy"
              className="mb-5 h-12 w-auto object-contain"
            />
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600">{tx.software_integrations_and_electronics_fr}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:text-indigo-700 hover:ring-indigo-200"
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

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-slate-200/80 pt-10 sm:grid-cols-2 xl:grid-cols-[0.85fr_1fr_1.45fr_1.3fr] xl:gap-0 xl:divide-x xl:divide-slate-200/80">
          <div className="xl:pr-8">
            <ColumnHeading icon={Link2}>{tx.quick_links}</ColumnHeading>
            <ul className="space-y-1.5">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkRow}>
                    {label}
                    <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-600" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:px-8">
            <ColumnHeading icon={Box}>{tx.expertise}</ColumnHeading>
            <ul className="space-y-1.5">
              {EXPERTISE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkRow}>
                    {label}
                    <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-600" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:px-8">
            <ColumnHeading icon={MapPin}>{tx.offices_contact}</ColumnHeading>
            <ul className="space-y-3">
              {OFFICES.map((office) => (
                <li key={office.id}>
                  <ContactRow href={officeMapUrl(office)} icon={MapPin} external title={formatOfficeAddress(office)}>
                    {office.city}, {office.region}
                  </ContactRow>
                </li>
              ))}
              <li>
                <ContactRow href={COMPANY.phone.href} icon={Phone}>
                  {COMPANY.phone.display}
                </ContactRow>
              </li>
              {[COMPANY.email, COMPANY.infoEmail].map((email) => (
                <li key={email}>
                  <ContactRow href={`mailto:${email}`} icon={Mail}>
                    {email}
                  </ContactRow>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:pl-8">
            <ColumnHeading icon={Layers}>{tx.partners_platforms}</ColumnHeading>
            <ul className="grid grid-cols-3 gap-3">
              {PLATFORMS.map(({ name, logo, icon: Icon }) => (
                <li key={name} className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/80 px-2 py-4 text-center ring-1 ring-slate-200/70">
                  <span className="flex h-10 items-center justify-center">
                    {logo ? (
                      <Image src={logo} alt="" width={64} height={40} className="h-10 w-auto max-w-[4.5rem] object-contain mix-blend-multiply" />
                    ) : (
                      Icon && <Icon className="h-8 w-8 text-sky-500" strokeWidth={1.6} aria-hidden />
                    )}
                  </span>
                  <span className="text-xs font-semibold text-slate-800">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}
            {tx.all_rights_reserved}
          </p>
          <ul className="flex flex-wrap items-center justify-center divide-x divide-slate-300">
            {LEGAL_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="inline-flex min-h-[44px] items-center px-4 transition hover:text-slate-800">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
