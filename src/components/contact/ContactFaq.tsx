'use client';

import tx from '@/content/text/components/contact/ContactFaq.json';
import { useId, useState } from 'react';
import { HelpCircle, MessageCircle, Plus } from 'lucide-react';
import SupportModal from '@/components/forms/SupportModal';

const FAQS = [
  {
    question: tx.how_long_does_a_typical,
    answer:
      tx.project_timelines_vary_based_on,
  },
  {
    question: tx.do_you_provide_ongoing_support,
    answer:
      tx.yes_we_offer_maintenance_and,
  },
  {
    question: tx.what_technologies_do_you_specialize,
    answer:
      tx.we_specialize_in_modern_web,
  },
  {
    question: tx.how_do_you_ensure_project,
    answer:
      tx.we_follow_industry_best_practices,
  },
  {
    question: tx.can_you_work_with_our,
    answer:
      tx.absolutely_we_integrate_with_existing,
  },
  {
    question: tx.what_is_your_development_process,
    answer:
      tx.we_follow_an_agile_development,
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`rounded-2xl bg-white transition ${open ? 'shadow-md ring-1 ring-indigo-200' : 'shadow-sm ring-1 ring-slate-200/80'}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-slate-900"
        >
          {question}
          <Plus className={`h-5 w-5 shrink-0 text-indigo-600 transition-transform duration-200 ${open ? 'rotate-45' : ''}`} aria-hidden />
        </button>
      </h3>
      <div id={id} hidden={!open} className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
        {answer}
      </div>
    </div>
  );
}

/** Two-column FAQ accordion with a route to the support form for anything not covered. */
export default function ContactFaq() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const half = Math.ceil(FAQS.length / 2);

  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />{tx.frequently_asked_questions}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{tx.common_questions}</h2>
            <p className="mt-3 text-slate-600">{tx.find_answers_to_the_most}</p>
          </div>
          <button
            type="button"
            onClick={() => setIsSupportOpen(true)}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full px-6 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-300 transition hover:bg-indigo-50 sm:self-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />{tx.ask_support}</button>
        </div>

        {/* Two independent columns so opening an answer does not stretch its neighbour. */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[FAQS.slice(0, half), FAQS.slice(half)].map((column, i) => (
            <div key={i} className="flex flex-col gap-4">
              {column.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <SupportModal open={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </section>
  );
}
