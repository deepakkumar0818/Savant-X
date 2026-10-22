import Image from 'next/image';
import { BarChart3, Code2, Cpu, Database, Gem, Handshake, Layers, Rocket, Trophy, Users, type LucideIcon } from 'lucide-react';
import { COMPANY_METRICS } from '@/lib/company';

const MILESTONES: { year: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    year: '2019',
    title: 'Company Foundation',
    description: 'Established SavantX with a mission to deliver technology solutions that create real business value.',
    icon: Rocket,
  },
  {
    year: '2020',
    title: 'First Major Implementations',
    description: 'Delivered our first Zoho and ERP projects, helping businesses streamline operations and improve efficiency.',
    icon: BarChart3,
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our engineering team and expanded into custom software development and system integrations.',
    icon: Users,
  },
  {
    year: '2022',
    title: 'Advanced Capabilities',
    description: 'Introduced AI and automation solutions, enabling smarter workflows and better decision-making for clients.',
    icon: Cpu,
  },
  {
    year: '2024',
    title: 'Stronger Partnerships',
    description: 'Built long-term relationships with clients across industries and expanded our presence through strategic collaborations.',
    icon: Trophy,
  },
];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Layers, value: `${COMPANY_METRICS[1].value}${COMPANY_METRICS[1].suffix}`, label: COMPANY_METRICS[1].label },
  { icon: Database, value: `${COMPANY_METRICS[0].value}${COMPANY_METRICS[0].suffix}`, label: COMPANY_METRICS[0].label },
  { icon: Code2, value: '25+', label: 'Technologies' },
];

const PRINCIPLES: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Gem, title: 'Engineering Excellence', body: 'Thoughtful, reliable and scalable technical solutions.' },
  { icon: BarChart3, title: 'Business-First Thinking', body: 'Technology aligned with real operational needs.' },
  { icon: Handshake, title: 'Long-Term Partnership', body: 'Support that continues beyond launch.' },
];

const panel = 'rounded-2xl bg-white shadow-[0_20px_45px_-25px_rgba(30,58,138,0.35)] ring-1 ring-slate-200/80';

export default function AboutJourneySection() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f7ff_100%)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">Our journey</p>
          <h2 id="journey-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            From a small team to a technology partner{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">that helps businesses transform.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            A journey driven by innovation, people and a commitment to create meaningful impact for our clients.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          {/* Photo with floating cards */}
          <div className="relative mx-auto w-full max-w-xl sm:pb-16 lg:max-w-none">
            <div aria-hidden className="absolute -left-10 top-4 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />
            <div aria-hidden className="absolute -left-4 top-24 hidden h-24 w-16 bg-[radial-gradient(circle,#c4b5fd_1.5px,transparent_1.5px)] [background-size:12px_12px] sm:block" />

            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-35px_rgba(30,58,138,0.5)] ring-1 ring-slate-900/5">
              <Image
                src="/images/about/savantx-team-collaboration.jpg"
                alt="SavantX team collaborating on a project"
                width={1448}
                height={1086}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className={`${panel} absolute -left-6 top-6 hidden items-center gap-3 px-4 py-3 sm:flex`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BarChart3 className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">Collaborative problem solving</span>
                <span className="block text-xs text-slate-500">Turning ideas into real solutions</span>
              </span>
            </div>

            <ul className={`${panel} relative mx-3 -mt-10 grid grid-cols-3 divide-x divide-slate-100 p-4 sm:absolute sm:bottom-0 sm:mx-0 sm:-ml-2 sm:mt-0 sm:w-[24rem]`}>
              {STATS.map(({ icon: Icon, value, label }) => (
                <li key={label} className="px-3 first:pl-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="mt-2 text-xl font-bold tracking-tight text-slate-900">{value}</p>
                  <p className="text-xs leading-snug text-slate-500">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-4">
            <span aria-hidden className="absolute bottom-8 left-[5px] top-8 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-indigo-400 to-violet-500" />
            {MILESTONES.map(({ year, title, description, icon: Icon }, i) => {
              const violet = i % 2 === 1;
              return (
                <li key={year} className="relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 pl-7 sm:grid-cols-[4.5rem_minmax(0,1fr)]">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ring-4 ring-white ${violet ? 'bg-violet-500' : 'bg-blue-600'}`}
                  />
                  <span
                    className={`col-span-2 mb-2 w-fit rounded-lg px-2.5 py-1 text-xs font-bold sm:col-span-1 sm:mb-0 ${
                      violet ? 'bg-violet-50 text-violet-700' : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {year}
                  </span>
                  <div className={`col-span-2 flex items-start gap-4 p-5 transition duration-300 hover:-translate-y-0.5 hover:ring-indigo-200 sm:col-span-1 ${panel}`}>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        violet ? 'bg-violet-50 text-violet-600' : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <ul className={`${panel} mt-16 grid gap-6 p-6 sm:p-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-100`}>
          {PRINCIPLES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex items-center gap-4 md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
