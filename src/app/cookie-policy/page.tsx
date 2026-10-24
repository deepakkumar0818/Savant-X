import tx from '@/content/text/app/cookie-policy/page.json';
import Footer from '@/components/Footer';
import { COMPANY } from '@/lib/company';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/hero/PageHero';
import { Cookie } from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: tx.cookie_policy,
  description:
    tx.how_savantx_technologies_uses_cookies,
  path: '/cookie-policy',
});

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        compact
        eyebrow={tx.legal_information}
        eyebrowIcon={Cookie}
        title={tx.cookie}
        highlight={tx.policy}
        description={tx.how_savantx_technologies_uses_cookies_2}
        note={tx.last_updated_november_5_2024}
      />

      {/* Content Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_1_introduction}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.this_cookie_policy_explains_how}</p>
              <p className="text-slate-600 leading-relaxed">{tx.by_using_our_website_you}</p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_2_what_are_cookies}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.cookies_are_small_text_files}</p>
              <p className="text-slate-600 leading-relaxed">{tx.cookies_can_be_persistent_or}</p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_3_types_of_cookies_we}</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tx.t_3_1_essential_cookies}</h3>
                <p className="text-slate-600 leading-relaxed">{tx.these_cookies_are_necessary_for}</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tx.t_3_2_analytics_cookies}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{tx.we_use_analytics_cookies_to}</p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>{tx.google_analytics}</strong>{" "}{tx.we_use_google_analytics_to}</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tx.t_3_3_functionality_cookies}</h3>
                <p className="text-slate-600 leading-relaxed">{tx.these_cookies_enable_the_website}</p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tx.t_3_4_marketing_cookies}</h3>
                <p className="text-slate-600 leading-relaxed">{tx.these_cookies_are_used_to}</p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_4_third_party_cookies}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.in_addition_to_our_own}</p>
              <p className="text-slate-600 leading-relaxed">{tx.third_party_services_we_use}</p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed ml-4 mt-3 space-y-2">
                <li>{tx.google_analytics_for_website_analytics}</li>
                <li>{tx.social_media_platforms_for_social}</li>
                <li>{tx.marketing_platforms_for_advertising_and}</li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_5_how_to_manage_cookies}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.you_have_the_right_to}</p>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.you_can_also_set_or}</p>
              <p className="text-slate-600 leading-relaxed mb-3">{tx.most_web_browsers_allow_some}</p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed ml-4 space-y-2">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{tx.www_allaboutcookies_org}</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{tx.www_youronlinechoices_com}</a></li>
              </ul>
            </div>

            {/* Browser-Specific Instructions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_6_browser_specific_instructions}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.to_disable_cookies_through_your}</p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">{tx.google_chrome}</h3>
                  <p className="text-slate-600 text-sm">{tx.settings_privacy_and_security_cookies}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">{tx.mozilla_firefox}</h3>
                  <p className="text-slate-600 text-sm">{tx.options_privacy_security_cookies_and}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">{tx.safari}</h3>
                  <p className="text-slate-600 text-sm">{tx.preferences_privacy_cookies_and_website}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">{tx.microsoft_edge}</h3>
                  <p className="text-slate-600 text-sm">{tx.settings_cookies_and_site_permissions}</p>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_7_updates_to_this_policy}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.we_may_update_this_cookie}</p>
              <p className="text-slate-600 leading-relaxed">{tx.we_encourage_you_to_review}</p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{tx.t_8_contact_us}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{tx.if_you_have_any_questions}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">{tx.email}</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-blue-600 hover:underline break-all">{COMPANY.email}</a>
                      <br />
                      <a href={`mailto:${COMPANY.infoEmail}`} className="text-blue-600 hover:underline break-all">{COMPANY.infoEmail}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">{tx.phone}</p>
                    <a href={COMPANY.phone.href} className="text-blue-600 hover:underline">{COMPANY.phone.display}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">{tx.office_locations}</p>
                    <p className="text-slate-600">{tx.panchanpur_gaya_bihar_824236_india}</p>
                    <p className="text-slate-600">{tx.sector_71_mohali_punjab_160071}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">{tx.important_note}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{tx.if_you_disable_cookies_some}</p>
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

