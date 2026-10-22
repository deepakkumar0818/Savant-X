import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { UsersRound } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Community Platforms',
  description:
    'Online community platforms that connect people and encourage meaningful interaction around shared interests.',
  path: '/expertise/community',
});

export default function CommunityPage() {

  const communityServices = [
    {
      id: 'community-platforms',
      title: 'Community Platforms',
      icon: '🌐',
      description: 'Build and manage online community platforms that connect people and foster meaningful relationships.',
      features: ['Forums & Discussions', 'User Profiles', 'Moderation Tools', 'Event Management', 'Content Sharing', 'Community Analytics'],
      pricing: 'Starting at $8,000',
      timeline: '8-16 weeks',
      complexity: 'Advanced',
      features_count: '35+'
    },
    {
      id: 'social-networks',
      title: 'Social Networks',
      icon: '👥',
      description: 'Custom social networking platforms tailored to specific communities and interests.',
      features: ['Social Feed', 'Friend Connections', 'Messaging System', 'Groups & Communities', 'Content Creation', 'Privacy Controls'],
      pricing: 'Starting at $12,000',
      timeline: '12-24 weeks',
      complexity: 'Enterprise',
      features_count: '45+'
    },
    {
      id: 'membership-sites',
      title: 'Membership Sites',
      icon: '🎫',
      description: 'Exclusive membership platforms with tiered access, premium content, and member benefits.',
      features: ['Membership Tiers', 'Premium Content', 'Payment Integration', 'Member Dashboard', 'Access Control', 'Subscription Management'],
      pricing: 'Starting at $6,000',
      timeline: '6-12 weeks',
      complexity: 'Standard',
      features_count: '25+'
    },
    {
      id: 'event-communities',
      title: 'Event Communities',
      icon: '🎪',
      description: 'Community platforms focused on events, conferences, and gatherings with networking features.',
      features: ['Event Listings', 'Registration System', 'Networking Tools', 'Live Streaming', 'Event Analytics', 'Feedback System'],
      pricing: 'Starting at $5,000',
      timeline: '5-10 weeks',
      complexity: 'Standard',
      features_count: '30+'
    }
  ];

  const communityTypes = [
    {
      category: 'Professional Communities',
      types: [
        { name: 'Industry Networks', icon: '🏢', description: 'Professional networks for specific industries' },
        { name: 'Freelancer Platforms', icon: '💼', description: 'Platforms connecting freelancers and clients' },
        { name: 'Mentorship Networks', icon: '👨‍🏫', description: 'Mentor-mentee matching platforms' },
        { name: 'Skill Sharing', icon: '🎯', description: 'Communities for sharing and learning skills' },
        { name: 'Job Boards', icon: '💼', description: 'Community-driven job posting and application' },
        { name: 'Professional Events', icon: '🎤', description: 'Event platforms for professional gatherings' }
      ]
    },
    {
      category: 'Interest-Based Communities',
      types: [
        { name: 'Hobby Groups', icon: '🎨', description: 'Communities around shared hobbies and interests' },
        { name: 'Learning Communities', icon: '📚', description: 'Educational and learning-focused platforms' },
        { name: 'Creative Networks', icon: '🎭', description: 'Platforms for artists and creative professionals' },
        { name: 'Sports Communities', icon: '⚽', description: 'Sports teams and fan communities' },
        { name: 'Tech Communities', icon: '💻', description: 'Technology and developer communities' },
        { name: 'Health & Wellness', icon: '🧘', description: 'Health, fitness, and wellness communities' }
      ]
    },
    {
      category: 'Geographic Communities',
      types: [
        { name: 'Local Communities', icon: '🏘️', description: 'Location-based community platforms' },
        { name: 'Neighborhood Networks', icon: '🏠', description: 'Local neighborhood communication platforms' },
        { name: 'City Events', icon: '🌆', description: 'City-wide event and activity platforms' },
        { name: 'Regional Groups', icon: '🗺️', description: 'Regional community organization platforms' },
        { name: 'Virtual Meetups', icon: '🌐', description: 'Online meetup and gathering platforms' },
        { name: 'Cultural Exchange', icon: '🌍', description: 'Cultural and international exchange platforms' }
      ]
    },
    {
      category: 'Specialized Communities',
      types: [
        { name: 'Support Groups', icon: '🤝', description: 'Support and peer assistance communities' },
        { name: 'Parenting Networks', icon: '👶', description: 'Parenting advice and support platforms' },
        { name: 'Elderly Communities', icon: '👴', description: 'Communities for senior citizens' },
        { name: 'Student Networks', icon: '🎓', description: 'Student and educational communities' },
        { name: 'Volunteer Platforms', icon: '🙋', description: 'Volunteer coordination and management' },
        { name: 'Crisis Support', icon: '🆘', description: 'Emergency and crisis support communities' }
      ]
    }
  ];

  const communityFeatures = [
    {
      title: 'User Management',
      description: 'Comprehensive user registration, profiles, and authentication systems.',
      icon: '👤'
    },
    {
      title: 'Content Moderation',
      description: 'AI-powered and human moderation tools to maintain community standards.',
      icon: '🛡️'
    },
    {
      title: 'Real-time Chat',
      description: 'Instant messaging, group chats, and video conferencing capabilities.',
      icon: '💬'
    },
    {
      title: 'Event Management',
      description: 'Create, manage, and promote community events and gatherings.',
      icon: '📅'
    },
    {
      title: 'Content Sharing',
      description: 'Rich media sharing, blogs, forums, and knowledge base features.',
      icon: '📤'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Community insights, engagement metrics, and growth analytics.',
      icon: '📊'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Community Discovery',
      description: 'Understanding community needs, goals, and target audience.',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Platform Architecture',
      description: 'Designing scalable community platform architecture and user flows.',
      duration: '2-3 weeks',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'Feature Development',
      description: 'Building core community features and user management systems.',
      duration: '8-20 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Community Tools',
      description: 'Implementing moderation, analytics, and community management tools.',
      duration: '2-4 weeks',
      icon: '🛠️'
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Comprehensive testing, community onboarding, and platform launch.',
      duration: '2-3 weeks',
      icon: '🚀'
    },
    {
      step: '06',
      title: 'Community Growth',
      description: 'Ongoing support, community management, and growth strategies.',
      duration: 'Ongoing',
      icon: '📈'
    }
  ];

  const deliverables = [
    {
      title: 'Community Platform',
      description: 'Full-featured community platform with user management and engagement tools.',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android mobile applications for community access.',
      icon: '📱'
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel for community management and moderation.',
      icon: '⚙️'
    },
    {
      title: 'Analytics System',
      description: 'Advanced analytics and reporting for community insights.',
      icon: '📊'
    },
    {
      title: 'Moderation Tools',
      description: 'Content moderation and community management tools.',
      icon: '🛡️'
    },
    {
      title: 'Integration APIs',
      description: 'APIs for third-party integrations and custom functionality.',
      icon: '🔌'
    }
  ];

  const benefits = [
    {
      title: 'Community Engagement',
      description: 'Build active, engaged communities that drive meaningful interactions.',
      icon: '💬'
    },
    {
      title: 'User Retention',
      description: 'Increase user retention through community features and social connections.',
      icon: '🔄'
    },
    {
      title: 'Content Generation',
      description: 'User-generated content that enriches your platform and reduces content costs.',
      icon: '📝'
    },
    {
      title: 'Brand Loyalty',
      description: 'Strong community connections lead to increased brand loyalty and advocacy.',
      icon: '❤️'
    },
    {
      title: 'Market Research',
      description: 'Direct access to user feedback and insights for product development.',
      icon: '🔍'
    },
    {
      title: 'Revenue Generation',
      description: 'Multiple monetization opportunities through community features and memberships.',
      icon: '💰'
    }
  ];

  const communityMetrics = [
    {
      title: 'User Engagement',
      description: 'Measure daily active users, session duration, and interaction rates.',
      icon: '📈'
    },
    {
      title: 'Community Growth',
      description: 'Track member acquisition, retention rates, and community expansion.',
      icon: '🌱'
    },
    {
      title: 'Content Activity',
      description: 'Monitor posts, comments, shares, and user-generated content creation.',
      icon: '📊'
    },
    {
      title: 'Event Participation',
      description: 'Track event attendance, registration rates, and community gatherings.',
      icon: '🎪'
    },
    {
      title: 'Moderation Efficiency',
      description: 'Measure content moderation effectiveness and community safety metrics.',
      icon: '🛡️'
    },
    {
      title: 'Revenue Impact',
      description: 'Analyze community impact on revenue, subscriptions, and monetization.',
      icon: '💎'
    }
  ];

  const communityTechnologies = [
    { name: 'React', icon: '⚛️', description: 'Frontend development framework', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', description: 'Backend server runtime', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for community data', category: 'Database' },
    { name: 'Socket.io', icon: '🔌', description: 'Real-time communication', category: 'Real-time' },
    { name: 'Redis', icon: '🔴', description: 'Caching and session management', category: 'Cache' },
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure and hosting', category: 'Cloud' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing for memberships', category: 'Payments' },
    { name: 'SendGrid', icon: '📧', description: 'Email notifications and marketing', category: 'Email' }
  ];

  const successStories = [
    {
      title: 'Professional Network',
      description: 'Built a 10,000+ member professional networking platform with job matching and mentorship features.',
      icon: '💼'
    },
    {
      title: 'Learning Community',
      description: 'Created an educational community with 5,000+ active learners and instructor collaboration tools.',
      icon: '🎓'
    },
    {
      title: 'Local Community',
      description: 'Developed a neighborhood platform connecting 2,000+ local residents with events and services.',
      icon: '🏘️'
    },
    {
      title: 'Hobby Network',
      description: 'Launched a creative community platform with 8,000+ artists sharing and collaborating on projects.',
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Community Solutions"
        eyebrowIcon={UsersRound}
        title="Community"
        highlight="Experience"
        description="Build thriving online communities that connect people, foster relationships, and create meaningful interactions. Our community platforms bring people together around shared interests and goals."
        highlights={["Community Platforms", "Social Networks", "Membership Sites", "Event Communities"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "500K+", label: "Active Users" },
          { value: "95%", label: "User Satisfaction" },
          { value: "24/7", label: "Community Support" },
        ]}
      />

      {/* Community Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Community
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive community platform solutions designed to connect people and build lasting relationships.
            </p>
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
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.features_count}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Features</div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Community Types
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Types of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Communities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We build communities for various purposes, from professional networks to interest-based groups.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Community Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Essential
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive features that make communities engaging, safe, and easy to manage.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Success Stories
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Community
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Real examples of thriving communities we&apos;ve built and the impact they&apos;ve created.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Community
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures successful community platform development and launch.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Community Metrics
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Measuring
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Community Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key metrics to track and measure the health and success of your community platform.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Community Technologies
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Technology
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Modern technologies and tools we use to build scalable and engaging community platforms.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Deliverables
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What You&apos;ll
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete community platform deliverables that provide engagement and growth capabilities.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Why Community Platforms
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Community Building</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Community platforms provide significant advantages for engagement, retention, and business growth.
            </p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Build Your
            <span className="block text-blue-100 mt-2">Community Platform?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s work together to create a thriving community platform that connects people and drives meaningful engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Community Project
            </Link>
            <Link href="#community-types" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Community Types
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
