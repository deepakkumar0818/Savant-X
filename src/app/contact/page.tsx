import tx from '@/content/text/app/contact/page.json';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Cpu,
  FileText,
  Headphones,
  LayoutGrid,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Send,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactOffices from '@/components/contact/ContactOffices';
import ContactFaq from '@/components/contact/ContactFaq';
import { COMPANY, COMPANY_METRICS, OFFICES, formatOfficeAddress, officeMapUrl } from '@/lib/company';

const HERO_STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Clock, value: '24hrs', label: tx.response_time },
  { icon: Users, value: `${COMPANY_METRICS[0].value}${COMPANY_METRICS[0].suffix}`, label: COMPANY_METRICS[0].label },
  { icon: FileText, value: `${COMPANY_METRICS[1].value}${COMPANY_METRICS[1].suffix}`, label: COMPANY_METRICS[1].label },
];

const REASONS: { icon: LucideIcon; title: string; text: string; tile: string }[] = [
  { icon: MessagesSquare, title: tx.clear_communication, text: tx.you_ll_always_know_the, tile: 'bg-blue-50 text-blue-600' },
  { icon: CalendarCheck, title: tx.on_time_delivery, text: tx.we_value_your_time_and, tile: 'bg-emerald-50 text-emerald-600' },
  { icon: Cpu, title: tx.expert_team, text: tx.experienced_in_web_mobile_zoho, tile: 'bg-orange-50 text-orange-600' },
  { icon: Headphones, title: tx.ongoing_support, text: tx.we_are_here_even_after, tile: 'bg-violet-50 text-violet-600' },
];

const delay = (s: number) => ({ '--hero-delay': `${s}s` }) as CSSProperties;

/** Without `href` the card is not a link, so its children can hold their own links. */
function InfoCard({ icon: Icon, title, href, external, children }: { icon: LucideIcon; title: string; href?: string; external?: boolean; children: React.ReactNode }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      {...(href ? { href } : {})}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/80 transition hover:shadow-md hover:ring-indigo-200"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1 text-sm">
        <span className="block font-bold text-slate-900">{title}</span>
        {children}
      </span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Tag>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8faff_0%,#ffffff_40%,#f8faff_100%)]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8faff_0%,#eef2ff_55%,#e0e7ff_100%)] px-6 sm:px-8 lg:px-12">
        <div aria-hidden className="absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 pb-12 pt-14 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:pb-14 lg:pt-20">
          <div>
            <p
              className="hero-enter inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700"
              style={delay(0)}
            >
              <Send className="h-3.5 w-3.5" aria-hidden />{tx.get_in_touch}</p>
            <h1
              className="hero-enter mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-[3.3rem] xl:text-[3.8rem]"
              style={delay(0.05)}
            >{tx.let_s_build_something}<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.great_together}</span>
            </h1>
            <p className="hero-enter mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg" style={delay(0.1)}>{tx.tell_us_about_your_idea}</p>
            <div className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row" style={delay(0.15)}>
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110"
              >
                <Send className="h-4 w-4" aria-hidden />{tx.start_your_project}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href={COMPANY.phone.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 transition hover:ring-indigo-200"
              >
                <Phone className="h-4 w-4" aria-hidden />{tx.call_us}</a>
            </div>
            <ul className="hero-enter mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-3" style={delay(0.2)}>
              {HERO_STATS.map(({ icon: Icon, value, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xl font-bold text-slate-900">{value}</span>
                    <span className="block text-xs text-slate-500">{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative -mx-6 sm:mx-0 lg:-mr-10">
            <Image
              src="/images/contact/contact-hero.webp"
              alt={tx.a_developer_at_a_desk}
              width={1200}
              height={800}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_60%,transparent_100%)]"
            />
          </div>
        </div>
      </section>

      {/* Form and contact details */}
      <section id="contact-form" className="scroll-mt-24 px-6 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ContactForm />

          <div className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-35px_rgba(79,70,229,0.4)] ring-1 ring-slate-200/80 sm:p-8 lg:self-start">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <LayoutGrid className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">{tx.get_in_touch_2}</h2>
                <p className="mt-1 text-sm text-slate-500">{tx.choose_a_convenient_way_to}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <InfoCard icon={Mail} title={tx.email_us}>
                <span className="mt-0.5 block text-slate-500">{tx.send_us_an_email_anytime}</span>
                {[COMPANY.email, COMPANY.infoEmail].map((email) => (
                  <a key={email} href={`mailto:${email}`} className="mt-1 block break-all font-semibold text-indigo-600 hover:underline">
                    {email}
                  </a>
                ))}
              </InfoCard>
              <InfoCard icon={Phone} title={tx.call_us} href={COMPANY.phone.href}>
                <span className="mt-0.5 block text-slate-500">{tx.mon_fri_9_00_am}</span>
                <span className="mt-1 block font-semibold text-indigo-600">{COMPANY.phone.display}</span>
              </InfoCard>
              <InfoCard icon={MapPin} title={tx.visit_us} href={officeMapUrl(OFFICES[0])} external>
                <span className="mt-0.5 block text-slate-500">{tx.our_office_locations}</span>
                {OFFICES.map((office) => (
                  <span key={office.id} className="mt-2 block">
                    <span className="block font-semibold text-slate-800">{office.name}</span>
                    <span className="block text-slate-500">{formatOfficeAddress(office)}</span>
                  </span>
                ))}
              </InfoCard>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/80">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div className="text-sm">
                  <h3 className="font-bold text-slate-900">{tx.business_hours}</h3>
                  <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-slate-500">
                    <dt>{tx.mon_fri}</dt>
                    <dd>{tx.t_9_00_am_6_00}</dd>
                    <dt>{tx.sat}</dt>
                    <dd>{tx.t_10_00_am_4_00}</dd>
                    <dt>{tx.sun}</dt>
                    <dd>{tx.closed}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response promise */}
      <section className="px-6 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-xl shadow-indigo-600/20 sm:p-8 lg:flex-row lg:items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
            <Zap className="h-7 w-7" aria-hidden />
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-bold sm:text-2xl">{tx.quick_response_guarantee}</h2>
            <p className="mt-1.5 max-w-xl text-sm text-indigo-100 sm:text-base">{tx.we_promise_to_respond_to}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:min-w-[22rem] [&>div]:px-3 sm:[&>div]:px-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-indigo-700">
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              <span>
                <span className="block text-xl font-bold">{tx.t_24hrs}</span>
                <span className="block text-xs text-slate-500">{tx.response_promise}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-indigo-700">
              <CalendarCheck className="h-5 w-5 shrink-0" aria-hidden />
              <span>
                <span className="block whitespace-nowrap text-xl font-bold">{tx.mon_sat}</span>
                <span className="block text-xs text-slate-500">{tx.working_days}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <ContactOffices />

      {/* Why work with us */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
            <Users className="h-3.5 w-3.5" aria-hidden />{tx.why_work_with_us}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{tx.more_than_a_service_a}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{tx.long_term_partner}</span>
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map(({ icon: Icon, title, text, tile }) => (
              <li key={title} className="flex items-start gap-4">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tile}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-bold text-slate-900">{title}</span>
                  <span className="mt-1 block text-sm text-slate-500">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactFaq />

      {/* Closing call to action */}
      <section className="px-6 pb-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#1e1b4b_0%,#312e81_55%,#4338ca_100%)] p-7 text-white sm:p-10 md:flex-row md:items-center">
          <div aria-hidden className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Send className="h-8 w-8" aria-hidden />
          </span>
          <div className="relative flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">{tx.ready_to_get_started}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{tx.let_s_turn_your_idea}</h2>
            <p className="mt-2 text-indigo-100">{tx.get_in_touch_with_our}</p>
          </div>
          <a
            href="#contact-form"
            className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-800 shadow-lg transition hover:bg-indigo-50"
          >{tx.start_your_project}<ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
