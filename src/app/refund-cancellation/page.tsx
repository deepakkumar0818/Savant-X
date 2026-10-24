import tx from '@/content/text/app/refund-cancellation/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { COMPANY } from '@/lib/company';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/hero/PageHero';
import { ReceiptText } from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: tx.refund_cancellation_policy,
  description:
    tx.terms_for_refunds_and_cancellations,
  path: '/refund-cancellation',
});

export default function RefundCancellationPage() {

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        compact
        eyebrow={tx.legal_information}
        eyebrowIcon={ReceiptText}
        title={tx.refund_cancellation}
        highlight={tx.policy}
        description={tx.savantx_technologies_pvt_ltd_is}
        note={tx.last_updated_december_2024}
      />

      {/* Table of Contents */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">{tx.table_of_contents}</h2>
              <p className="text-slate-600">{tx.navigate_through_our_refund_and}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#introduction" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.introduction}</span>
                </a>
                <a href="#refund-policy" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.refund_policy}</span>
                </a>
                <a href="#cancellation-policy" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.cancellation_policy}</span>
                </a>
                <a href="#refund-process" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">4</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.refund_process}</span>
                </a>
                <a href="#non-refundable" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">5</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.non_refundable_services}</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#partial-refunds" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">6</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.partial_refunds}</span>
                </a>
                <a href="#processing-time" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">7</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.processing_time}</span>
                </a>
                <a href="#disputes" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">8</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.disputes_appeals}</span>
                </a>
                <a href="#modifications" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">9</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.policy_modifications}</span>
                </a>
                <a href="#contact" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">10</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.contact_us}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
              
            {/* Introduction */}
            <div id="introduction" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_1_introduction}</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <p className="text-slate-700 leading-relaxed mb-4 font-medium text-lg">{tx.savantx_technologies_pvt_ltd_we}</p>
                <p className="text-slate-600 leading-relaxed">{tx.this_refund_and_cancellation_policy}</p>
              </div>
            </div>

            {/* Refund Policy */}
            <div id="refund-policy" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_2_refund_policy}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>{tx.full_refunds}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{tx.full_refunds_are_available_under}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.cancellation_within_24_hours_of}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.service_not_delivered_as_per}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.technical_failure_on_our_part}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.duplicate_payment_or_billing_error}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>{tx.refund_eligibility}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{tx.to_be_eligible_for_a}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.submit_a_refund_request_within}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.provide_valid_reason_and_supporting}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.not_have_violated_terms_of}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.return_any_deliverables_if_applicable}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div id="cancellation-policy" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_3_cancellation_policy}</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.you_may_cancel_your_service}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>{tx.before_work_begins}</h4>
                      <p className="text-slate-600 text-sm">{tx.t_100_refund_if_cancelled_before}</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>{tx.during_development_0_25}</h4>
                      <p className="text-slate-600 text-sm">{tx.t_75_refund_if_cancelled_during}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>{tx.mid_development_25_50}</h4>
                      <p className="text-slate-600 text-sm">{tx.t_50_refund_if_cancelled_during}</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>{tx.late_stage_50}</h4>
                      <p className="text-slate-600 text-sm">{tx.no_refund_if_cancelled_after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div id="refund-process" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_4_refund_process}</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.to_request_a_refund_please}</p>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">1</div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-700 mb-2">{tx.submit_refund_request}</h4>
                      <p className="text-slate-600 text-sm break-words">{tx.contact_us_via_email_at}{" "}{COMPANY.email}{" "}{tx.with_your_order_number_and}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">{tx.review_verification}</h4>
                      <p className="text-slate-600 text-sm">{tx.we_will_review_your_request}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">{tx.approval_processing}</h4>
                      <p className="text-slate-600 text-sm">{tx.upon_approval_refund_will_be}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">{tx.confirmation}</h4>
                      <p className="text-slate-600 text-sm">{tx.you_will_receive_email_confirmation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Refundable Services */}
            <div id="non-refundable" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_5_non_refundable_services}</h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.the_following_services_are_non}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">{tx.completed_and_delivered_services}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">{tx.custom_development_work_after_50}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">{tx.third_party_service_fees_and}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">{tx.services_cancelled_due_to_client}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">{tx.one_time_consultation_fees}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">{tx.domain_registration_and_hosting_fees}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partial Refunds */}
            <div id="partial-refunds" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_6_partial_refunds}</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.partial_refunds_may_be_issued}</p>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.project_cancellation_during_development}</h4>
                    <p className="text-slate-600 text-sm">{tx.refund_amount_calculated_based_on}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.scope_reduction}</h4>
                    <p className="text-slate-600 text-sm">{tx.if_project_scope_is_reduced}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.service_modifications}</h4>
                    <p className="text-slate-600 text-sm">{tx.refund_difference_if_service_is}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div id="processing-time" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_7_processing_time}</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.refund_processing_timelines}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.review_period}</h4>
                    <p className="text-sm text-slate-600">{tx.t_2_3_business_days}</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.processing_time}</h4>
                    <p className="text-sm text-slate-600">{tx.t_5_10_business_days}</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.bank_processing}</h4>
                    <p className="text-sm text-slate-600">{tx.t_3_5_business_days}</p>
                  </div>
                </div>
                <p className="text-center text-slate-600 mt-6 text-sm">{tx.total_time_10_18_business}</p>
              </div>
            </div>

            {/* Disputes & Appeals */}
            <div id="disputes" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_8_disputes_appeals}</h2>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.if_you_disagree_with_a}</p>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>{tx.request_review}</h4>
                    <p className="text-slate-600 text-sm">{tx.submit_additional_documentation_or_evide}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>{tx.escalation}</h4>
                    <p className="text-slate-600 text-sm">{tx.request_escalation_to_management_for}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>{tx.resolution}</h4>
                    <p className="text-slate-600 text-sm">{tx.we_aim_to_resolve_all}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Modifications */}
            <div id="modifications" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_9_policy_modifications}</h2>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-100">
                <p className="text-slate-700 leading-relaxed mb-4">{tx.savantx_technologies_pvt_ltd_reserves}</p>
                <p className="text-slate-600 leading-relaxed">{tx.your_continued_use_of_our}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div id="contact" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_10_contact_us}</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">{tx.for_refund_requests_cancellations_or}</p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">{tx.email}</h4>
                    <p className="text-blue-100 break-all">
                      <a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a>
                      <br />
                      <a href={`mailto:${COMPANY.infoEmail}`} className="hover:underline">{COMPANY.infoEmail}</a>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">{tx.phone}</h4>
                    <p className="text-blue-100">
                      <a href={COMPANY.phone.href} className="hover:underline">{COMPANY.phone.display}</a>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">{tx.office}</h4>
                    <p className="text-blue-100 text-sm">{tx.sector_71_mohali_punjab}</p>
                    <p className="text-blue-100 text-sm">{tx.panchanpur_tekari_gaya_bihar}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >{tx.contact_us_today}</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
