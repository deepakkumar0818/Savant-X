import tx from '@/content/text/app/privacy-policy/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { COMPANY } from '@/lib/company';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/hero/PageHero';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: tx.privacy_policy,
  description:
    tx.how_savantx_technologies_collects_uses,
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        compact
        eyebrow={tx.legal_information}
        eyebrowIcon={ShieldCheck}
        title={tx.privacy}
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
              <p className="text-slate-600">{tx.navigate_through_our_privacy_policy}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#introduction" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.introduction}</span>
                </a>
                <a href="#information-collection" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.information_we_collect}</span>
                </a>
                <a href="#how-we-use" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.how_we_use_your_information}</span>
                </a>
                <a href="#information-sharing" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">4</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.information_sharing}</span>
                </a>
                <a href="#data-security" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">5</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.data_security}</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#cookies" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">6</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.cookies_tracking}</span>
                </a>
                <a href="#your-rights" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">7</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.your_rights}</span>
                </a>
                <a href="#data-retention" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">8</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.data_retention}</span>
                </a>
                <a href="#third-party" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">9</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{tx.third_party_links}</span>
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

      {/* Privacy Policy Content */}
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
                <p className="text-slate-600 leading-relaxed">{tx.this_privacy_policy_explains_how}</p>
              </div>
            </div>

            {/* Information We Collect */}
            <div id="information-collection" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_2_information_we_collect}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>{tx.personal_information}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{tx.we_may_collect_personal_information}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.name_and_contact_information_email}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.company_information_and_job_title}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.project_requirements_and_specifications}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.communication_preferences}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.payment_information_processed_securely_t}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>{tx.automatically_collected_information}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{tx.when_you_visit_our_website}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.ip_address_and_location_data}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.browser_type_and_version}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.operating_system}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.pages_visited_and_time_spent}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.referring_website_addresses}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.device_information}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div id="how-we-use" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_3_how_we_use_your}</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.we_use_the_collected_information}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.providing_and_maintaining_our_services}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.processing_your_requests_and_inquiries}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.communicating_about_projects_and_service}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.improving_our_website_and_services}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.analyzing_usage_patterns_and_trends}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.marketing_communications_with_consent}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{tx.legal_compliance_and_protection}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div id="information-sharing" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_4_information_sharing}</h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.we_do_not_sell_trade}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>{tx.with_your_consent}</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>{tx.with_your_explicit_consent}</li>
                      <li>{tx.when_you_request_specific_services}</li>
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>{tx.legal_requirements}</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>{tx.when_required_by_law}</li>
                      <li>{tx.to_protect_our_rights_and}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div id="data-security" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{tx.t_5_data_security}</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">{tx.we_implement_comprehensive_security_meas}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.ssl_encryption}</h4>
                    <p className="text-sm text-slate-600">{tx.secure_data_transmission}</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.secure_servers}</h4>
                    <p className="text-sm text-slate-600">{tx.protected_data_storage}</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">{tx.regular_updates}</h4>
                    <p className="text-sm text-slate-600">{tx.continuous_security_monitoring}</p>
                  </div>
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
                <h2 className="text-3xl font-bold text-slate-800">{tx.contact_us}</h2>
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
