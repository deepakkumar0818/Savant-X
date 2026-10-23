import tx from '@/content/text/app/expertise/websites/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Globe } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.website_development,
  description:
    tx.high_performance_professionally_designed,
  path: '/expertise/websites',
});

export default function WebsitesPage() {

  const websiteTypes = [
    {
      id: 'corporate',
      title: tx.corporate_websites,
      icon: '🏢',
      description: tx.professional_corporate_websites_that_est,
      features: [tx.company_branding, tx.about_us_pages, tx.contact_information, tx.service_showcase, tx.team_profiles, tx.news_updates],
      pricing: tx.starting_at_2_500,
      timeline: '2-4 weeks'
    },
    {
      id: 'portfolio',
      title: tx.portfolio_websites,
      icon: '🎨',
      description: tx.creative_portfolio_websites_to_showcase,
      features: [tx.project_galleries, tx.case_studies, tx.client_testimonials, tx.blog_integration, tx.contact_forms, tx.social_media_integration],
      pricing: tx.starting_at_1_800,
      timeline: '1-3 weeks'
    },
    {
      id: 'landing',
      title: tx.landing_pages,
      icon: '🚀',
      description: tx.high_converting_landing_pages_designed,
      features: [tx.a_b_testing_ready, tx.lead_capture_forms, tx.analytics_integration, tx.mobile_optimized, tx.fast_loading, tx.seo_optimized],
      pricing: tx.starting_at_800,
      timeline: '1-2 weeks'
    },
    {
      id: 'blog',
      title: tx.blog_websites,
      icon: '📝',
      description: tx.content_focused_websites_perfect_for,
      features: [tx.cms_integration, tx.comment_system, tx.social_sharing, tx.email_newsletter, tx.search_functionality, tx.multi_author_support],
      pricing: tx.starting_at_1_200,
      timeline: '2-3 weeks'
    }
  ];

  const technologies = [
    { name: tx.next_js, icon: '⚡', description: tx.react_framework_for_production },
    { name: tx.react, icon: '⚛️', description: tx.modern_javascript_library },
    { name: tx.typescript, icon: '🔷', description: tx.type_safe_javascript },
    { name: tx.tailwind_css, icon: '🎨', description: tx.utility_first_css_framework },
    { name: tx.framer_motion, icon: '🎬', description: tx.animation_library },
    { name: tx.headless_cms, icon: '📄', description: tx.content_management_solutions }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.discovery_planning,
      description: tx.we_start_by_understanding_your,
      duration: '1-2 days'
    },
    {
      step: '02',
      title: tx.design_wireframing,
      description: tx.creating_user_centered_designs_and,
      duration: '3-5 days'
    },
    {
      step: '03',
      title: tx.development,
      description: tx.building_your_website_with_modern,
      duration: '1-3 weeks'
    },
    {
      step: '04',
      title: tx.testing_launch,
      description: tx.thorough_testing_across_devices_and,
      duration: '2-3 days'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.website_development_2}
        eyebrowIcon={Globe}
        title={tx.professional}
        highlight={tx.website_solutions}
        description={tx.we_create_stunning_high_performance}
        highlights={["Corporate Websites", "Portfolio Websites", "Landing Pages", "Blog Websites"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "98%", label: tx.client_satisfaction },
          { value: "2-4", label: tx.week_delivery },
          { value: "24/7", label: tx.support },
        ]}
      />

      {/* Website Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.website_types}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.we_build}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_simple_landing_pages_to}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {type.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                    {type.features.length > 3 && (
                      <div className="text-sm text-slate-500">
                        +{type.features.length - 3}{" "}{tx.more_features}</div>
                    )}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">{tx.starting_price}</span>
                      <span className="text-sm font-bold text-blue-600">{type.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">{tx.timeline}</span>
                      <span className="text-sm font-bold text-green-600">{type.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.modern}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_cutting_edge_technologies}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.how_we}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.build_websites}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_proven_4_step_process}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-6 border border-blue-200">{tx.step}{" "}{step.step}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-600">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build_your}<span className="block text-blue-100 mt-2">{tx.dream_website}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_project}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_our_work}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
