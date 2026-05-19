import Link from 'next/link';

const cases = [
  {
    client: 'Regional logistics operator',
    industry: 'Supply chain',
    metric: '60%',
    metricLabel: 'less manual coordination',
    challenge: 'Dispatch lived in spreadsheets with no shared SLA view.',
    solution: 'Fleet console with live GPS, history, and ERP-aligned tickets.',
  },
  {
    client: 'Manufacturing SME',
    industry: 'ERP',
    metric: '45%',
    metricLabel: 'faster planning cycles',
    challenge: 'Shop floor and finance saw different inventory truth.',
    solution: 'Workflow module with scanning and finance alignment.',
  },
  {
    client: 'Digital publisher',
    industry: 'Media',
    metric: '2×',
    metricLabel: 'digital engagement',
    challenge: 'Editorial throughput blocked by fragmented tooling.',
    solution: 'Headless CMS, approvals, and unified analytics.',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative border-y border-slate-200/80 bg-white px-4 py-[100px] sm:px-6 lg:px-8 lg:py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(59,130,246,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Case studies</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Outcomes that compound
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Representative engagements—names anonymized where required. Each pairs a clear metric with systems your
            team can run.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-6">
          {cases.map((c) => (
            <article
              key={c.client}
              className="group flex flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{c.industry}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{c.client}</h3>
              <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 px-4 py-3">
                <p className="text-3xl font-semibold tracking-tight text-indigo-700">{c.metric}</p>
                <p className="text-sm font-medium text-indigo-900/80">{c.metricLabel}</p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                <span className="font-medium text-slate-800">Challenge — </span>
                {c.challenge}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <span className="font-medium text-slate-800">Solution — </span>
                {c.solution}
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/work"
                  className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                  View portfolio →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
