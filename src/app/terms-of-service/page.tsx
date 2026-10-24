import tx from '@/content/text/app/terms-of-service/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { COMPANY } from '@/lib/company';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/hero/PageHero';
import { FileText } from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: tx.terms_of_service,
  description:
    tx.the_terms_and_conditions_that,
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        compact
        eyebrow={tx.legal_information}
        eyebrowIcon={FileText}
        title={tx.terms_of}
        highlight={tx.service}
        description={tx.these_terms_and_conditions_outline}
        note={tx.last_updated_december_2024}
      />

      {/* Table of Contents */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">{tx.table_of_contents}</h2>
              <p className="text-slate-600">{tx.navigate_through_our_terms_and}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#acceptance" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.acceptance_of_terms}</span>
                </a>
                <a href="#services" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.our_services}</span>
                </a>
                <a href="#user-obligations" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.user_obligations}</span>
                </a>
                <a href="#intellectual-property" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">4</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.intellectual_property}</span>
                </a>
                <a href="#payment-terms" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">5</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.payment_terms}</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#limitation-liability" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">6</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.limitation_of_liability}</span>
                </a>
                <a href="#termination" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">7</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.termination}</span>
                </a>
                <a href="#governing-law" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">8</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.governing_law}</span>
                </a>
                <a href="#changes-terms" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">9</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.changes_to_terms}</span>
                </a>
                <a href="#contact" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">10</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.contact_information}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
              
            {/* Acceptance of Terms */}
            <div id="acceptance" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_1_acceptance_of_terms}</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <p className="text-slate-700 leading-relaxed mb-4 font-medium text-lg">{tx.by_accessing_and_using_savantx}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{tx.if_you_do_not_agree}</p>
                <div className="bg-white/60 rounded-lg p-4 mt-4">
                  <p className="text-slate-600 text-sm">
                    <strong>{tx.important}</strong>{" "}{tx.by_continuing_to_use_our}</p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div id="services" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_2_our_services}</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.savantx_technologies_pvt_ltd_provides}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.web_development_design}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.mobile_application_development}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.ui_ux_design_services}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.zoho_integration_services}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.e_commerce_solutions}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.technical_consulting}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-lg p-4 mt-6">
                  <p className="text-slate-600 text-sm">
                    <strong>{tx.service_availability}</strong>{" "}{tx.we_reserve_the_right_to}</p>
                </div>
              </div>
            </div>

            {/* User Obligations */}
            <div id="user-obligations" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_3_user_obligations}</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.as_a_user_of_our}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.provide_accurate_and_complete_informatio}</span>
                    </div>
                    <div className="flex items-start p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.use_services_only_for_lawful}</span>
                    </div>
                    <div className="flex items-start p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.respect_intellectual_property_rights}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.maintain_confidentiality_of_account_cred}</span>
                    </div>
                    <div className="flex items-start p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.report_any_security_breaches_or}</span>
                    </div>
                    <div className="flex items-start p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.comply_with_all_applicable_laws}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div id="intellectual-property" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_4_intellectual_property}</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.all_intellectual_property_rights_in}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>{tx.our_rights}</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>{tx.all_website_content_and_designs}</li>
                      <li>{tx.software_and_source_code}</li>
                      <li>{tx.trademarks_and_logos}</li>
                      <li>{tx.documentation_and_materials}</li>
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>{tx.client_rights}</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>{tx.ownership_of_final_deliverables}</li>
                      <li>{tx.rights_to_use_completed_work}</li>
                      <li>{tx.custom_solutions_ownership}</li>
                      <li>{tx.source_code_access_where_applicable}</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/60 rounded-lg p-4 mt-6">
                  <p className="text-slate-600 text-sm">
                    <strong>{tx.important}</strong>{" "}{tx.you_may_not_copy_modify}</p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div id="payment-terms" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_5_payment_terms}</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.payment_terms_and_conditions_for}</p>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white/50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">{tx.payment_schedule}</h4>
                      <p className="text-slate-600 text-sm">{tx.payment_terms_will_be_specified}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">{tx.late_payment}</h4>
                      <p className="text-slate-600 text-sm">{tx.late_payments_may_incur_additional}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">{tx.refund_policy}</h4>
                      <p className="text-slate-600 text-sm">{tx.refund_terms_will_be_outlined}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div id="limitation-liability" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_6_limitation_of_liability}</h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.to_the_maximum_extent_permitted}</p>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.service_availability_2}</h4>
                    <p className="text-slate-600 text-sm">{tx.we_do_not_guarantee_uninterrupted}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.third_party_services}</h4>
                    <p className="text-slate-600 text-sm">{tx.we_are_not_responsible_for}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.data_loss}</h4>
                    <p className="text-slate-600 text-sm">{tx.while_we_implement_security_measures}</p>
                  </div>
                </div>
                <div className="bg-white/60 rounded-lg p-4 mt-6">
                  <p className="text-slate-600 text-sm">
                    <strong>{tx.maximum_liability}</strong>{" "}{tx.our_total_liability_shall_not}</p>
                </div>
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
                <h2 className="text-3xl font-bold text-slate-800">{tx.contact_information}</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">{tx.if_you_have_any_questions}</p>
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
