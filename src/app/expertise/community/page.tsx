import tx from '@/content/text/app/expertise/community/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { UsersRound } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.community_platforms,
  description:
    tx.online_community_platforms_that_connect,
  path: '/expertise/community',
});

export default function CommunityPage() {

  const communityServices = [
    {
      id: 'community-platforms',
      title: tx.community_platforms_2,
      icon: '🌐',
      description: tx.build_and_manage_online_community,
      features: [tx.forums_discussions, tx.user_profiles, tx.moderation_tools, tx.event_management, tx.content_sharing, tx.community_analytics],
      pricing: tx.starting_at_8_000,
      timeline: '8-16 weeks',
      complexity: tx.advanced,
      features_count: '35+'
    },
    {
      id: 'social-networks',
      title: tx.social_networks,
      icon: '👥',
      description: tx.custom_social_networking_platforms_tailo,
      features: [tx.social_feed, tx.friend_connections, tx.messaging_system, tx.groups_communities, tx.content_creation, tx.privacy_controls],
      pricing: tx.starting_at_12_000,
      timeline: '12-24 weeks',
      complexity: tx.enterprise,
      features_count: '45+'
    },
    {
      id: 'membership-sites',
      title: tx.membership_sites,
      icon: '🎫',
      description: tx.exclusive_membership_platforms_with_tier,
      features: [tx.membership_tiers, tx.premium_content, tx.payment_integration, tx.member_dashboard, tx.access_control, tx.subscription_management],
      pricing: tx.starting_at_6_000,
      timeline: '6-12 weeks',
      complexity: tx.standard,
      features_count: '25+'
    },
    {
      id: 'event-communities',
      title: tx.event_communities,
      icon: '🎪',
      description: tx.community_platforms_focused_on_events,
      features: [tx.event_listings, tx.registration_system, tx.networking_tools, tx.live_streaming, tx.event_analytics, tx.feedback_system],
      pricing: tx.starting_at_5_000,
      timeline: '5-10 weeks',
      complexity: tx.standard,
      features_count: '30+'
    }
  ];

  const communityTypes = [
    {
      category: 'Professional Communities',
      types: [
        { name: tx.industry_networks, icon: '🏢', description: tx.professional_networks_for_specific_indus },
        { name: tx.freelancer_platforms, icon: '💼', description: tx.platforms_connecting_freelancers_and_cli },
        { name: tx.mentorship_networks, icon: '👨‍🏫', description: tx.mentor_mentee_matching_platforms },
        { name: tx.skill_sharing, icon: '🎯', description: tx.communities_for_sharing_and_learning },
        { name: tx.job_boards, icon: '💼', description: tx.community_driven_job_posting_and },
        { name: tx.professional_events, icon: '🎤', description: tx.event_platforms_for_professional_gatheri }
      ]
    },
    {
      category: 'Interest-Based Communities',
      types: [
        { name: tx.hobby_groups, icon: '🎨', description: tx.communities_around_shared_hobbies_and },
        { name: tx.learning_communities, icon: '📚', description: tx.educational_and_learning_focused_platfor },
        { name: tx.creative_networks, icon: '🎭', description: tx.platforms_for_artists_and_creative },
        { name: tx.sports_communities, icon: '⚽', description: tx.sports_teams_and_fan_communities },
        { name: tx.tech_communities, icon: '💻', description: tx.technology_and_developer_communities },
        { name: tx.health_wellness, icon: '🧘', description: tx.health_fitness_and_wellness_communities }
      ]
    },
    {
      category: 'Geographic Communities',
      types: [
        { name: tx.local_communities, icon: '🏘️', description: tx.location_based_community_platforms },
        { name: tx.neighborhood_networks, icon: '🏠', description: tx.local_neighborhood_communication_platfor },
        { name: tx.city_events, icon: '🌆', description: tx.city_wide_event_and_activity },
        { name: tx.regional_groups, icon: '🗺️', description: tx.regional_community_organization_platform },
        { name: tx.virtual_meetups, icon: '🌐', description: tx.online_meetup_and_gathering_platforms },
        { name: tx.cultural_exchange, icon: '🌍', description: tx.cultural_and_international_exchange_plat }
      ]
    },
    {
      category: 'Specialized Communities',
      types: [
        { name: tx.support_groups, icon: '🤝', description: tx.support_and_peer_assistance_communities },
        { name: tx.parenting_networks, icon: '👶', description: tx.parenting_advice_and_support_platforms },
        { name: tx.elderly_communities, icon: '👴', description: tx.communities_for_senior_citizens },
        { name: tx.student_networks, icon: '🎓', description: tx.student_and_educational_communities },
        { name: tx.volunteer_platforms, icon: '🙋', description: tx.volunteer_coordination_and_management },
        { name: tx.crisis_support, icon: '🆘', description: tx.emergency_and_crisis_support_communities }
      ]
    }
  ];

  const communityFeatures = [
    {
      title: tx.user_management,
      description: tx.comprehensive_user_registration_profiles,
      icon: '👤'
    },
    {
      title: tx.content_moderation,
      description: tx.ai_powered_and_human_moderation,
      icon: '🛡️'
    },
    {
      title: tx.real_time_chat,
      description: tx.instant_messaging_group_chats_and,
      icon: '💬'
    },
    {
      title: tx.event_management_2,
      description: tx.create_manage_and_promote_community,
      icon: '📅'
    },
    {
      title: tx.content_sharing_2,
      description: tx.rich_media_sharing_blogs_forums,
      icon: '📤'
    },
    {
      title: tx.analytics_dashboard,
      description: tx.community_insights_engagement_metrics_an,
      icon: '📊'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.community_discovery,
      description: tx.understanding_community_needs_goals_and,
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.platform_architecture,
      description: tx.designing_scalable_community_platform_ar,
      duration: '2-3 weeks',
      icon: '🏗️'
    },
    {
      step: '03',
      title: tx.feature_development,
      description: tx.building_core_community_features_and,
      duration: '8-20 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: tx.community_tools,
      description: tx.implementing_moderation_analytics_and_co,
      duration: '2-4 weeks',
      icon: '🛠️'
    },
    {
      step: '05',
      title: tx.testing_launch,
      description: tx.comprehensive_testing_community_onboardi,
      duration: '2-3 weeks',
      icon: '🚀'
    },
    {
      step: '06',
      title: tx.community_growth,
      description: tx.ongoing_support_community_management_and,
      duration: tx.ongoing,
      icon: '📈'
    }
  ];

  const deliverables = [
    {
      title: tx.community_platform,
      description: tx.full_featured_community_platform_with,
      icon: '🌐'
    },
    {
      title: tx.mobile_apps,
      description: tx.ios_and_android_mobile_applications,
      icon: '📱'
    },
    {
      title: tx.admin_dashboard,
      description: tx.comprehensive_admin_panel_for_community,
      icon: '⚙️'
    },
    {
      title: tx.analytics_system,
      description: tx.advanced_analytics_and_reporting_for,
      icon: '📊'
    },
    {
      title: tx.moderation_tools_2,
      description: tx.content_moderation_and_community_managem,
      icon: '🛡️'
    },
    {
      title: tx.integration_apis,
      description: tx.apis_for_third_party_integrations,
      icon: '🔌'
    }
  ];

  const benefits = [
    {
      title: tx.community_engagement,
      description: tx.build_active_engaged_communities_that,
      icon: '💬'
    },
    {
      title: tx.user_retention,
      description: tx.increase_user_retention_through_communit,
      icon: '🔄'
    },
    {
      title: tx.content_generation,
      description: tx.user_generated_content_that_enriches,
      icon: '📝'
    },
    {
      title: tx.brand_loyalty,
      description: tx.strong_community_connections_lead_to,
      icon: '❤️'
    },
    {
      title: tx.market_research,
      description: tx.direct_access_to_user_feedback,
      icon: '🔍'
    },
    {
      title: tx.revenue_generation,
      description: tx.multiple_monetization_opportunities_thro,
      icon: '💰'
    }
  ];

  const communityMetrics = [
    {
      title: tx.user_engagement,
      description: tx.measure_daily_active_users_session,
      icon: '📈'
    },
    {
      title: tx.community_growth_2,
      description: tx.track_member_acquisition_retention_rates,
      icon: '🌱'
    },
    {
      title: tx.content_activity,
      description: tx.monitor_posts_comments_shares_and,
      icon: '📊'
    },
    {
      title: tx.event_participation,
      description: tx.track_event_attendance_registration_rate,
      icon: '🎪'
    },
    {
      title: tx.moderation_efficiency,
      description: tx.measure_content_moderation_effectiveness,
      icon: '🛡️'
    },
    {
      title: tx.revenue_impact,
      description: tx.analyze_community_impact_on_revenue,
      icon: '💎'
    }
  ];

  const communityTechnologies = [
    { name: tx.react, icon: '⚛️', description: tx.frontend_development_framework, category: 'Frontend' },
    { name: tx.node_js, icon: '🟢', description: tx.backend_server_runtime, category: 'Backend' },
    { name: tx.mongodb, icon: '🍃', description: tx.nosql_database_for_community_data, category: 'Database' },
    { name: tx.socket_io, icon: '🔌', description: tx.real_time_communication, category: 'Real-time' },
    { name: tx.redis, icon: '🔴', description: tx.caching_and_session_management, category: 'Cache' },
    { name: 'AWS', icon: '☁️', description: tx.cloud_infrastructure_and_hosting, category: 'Cloud' },
    { name: tx.stripe, icon: '💳', description: tx.payment_processing_for_memberships, category: 'Payments' },
    { name: tx.sendgrid, icon: '📧', description: tx.email_notifications_and_marketing, category: 'Email' }
  ];

  const successStories = [
    {
      title: tx.professional_network,
      description: tx.built_a_10_000_member,
      icon: '💼'
    },
    {
      title: tx.learning_community,
      description: tx.created_an_educational_community_with,
      icon: '🎓'
    },
    {
      title: tx.local_community,
      description: tx.developed_a_neighborhood_platform_connec,
      icon: '🏘️'
    },
    {
      title: tx.hobby_network,
      description: tx.launched_a_creative_community_platform,
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.community_solutions}
        eyebrowIcon={UsersRound}
        title={tx.community}
        highlight={tx.experience}
        description={tx.build_thriving_online_communities_that}
        highlights={["Community Platforms", "Social Networks", "Membership Sites", "Event Communities"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "500K+", label: tx.active_users },
          { value: "95%", label: tx.user_satisfaction },
          { value: "24/7", label: tx.community_support },
        ]}
      />

      {/* Community Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.community}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_community_platform_solutio}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={service.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 sm:grid-cols-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.complexity}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.features_count}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.features}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section id="community-types" className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.community_types}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.types_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.communities}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_build_communities_for_various}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {communityTypes.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.types.map((type, typeIndex) => (
                      <div key={typeIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={type.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{type.name}</h4>
                          <p className="text-sm text-slate-600">{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.community_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.essential}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_features_that_make_communi}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.success_stories}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.community}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.success_stories}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.real_examples_of_thriving_communities}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={story.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.community}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_successf}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-blue-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-blue-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.community_metrics}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.measuring}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.community_success}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_metrics_to_track_and}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={metric.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {metric.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.community_technologies}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.technology}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.stack}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.modern_technologies_and_tools_we}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {communityTechnologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tech.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_community_platform_deliverables}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {deliverable.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {deliverable.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_community_platforms}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.community_building}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.community_platforms_provide_significant}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build_your}<span className="block text-blue-100 mt-2">{tx.community_platform_2}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_work_together_to}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_community_project}</Link>
            <Link href="#community-types" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_community_types}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
