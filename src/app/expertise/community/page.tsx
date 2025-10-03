'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  const [activeType, setActiveType] = useState('community-platforms');

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Community Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">😊</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🌐</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">👥</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">🤝</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">😊</span>
              Community Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Community
              <span className="block text-blue-600 mt-2">Experience</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Build thriving online communities that connect people, foster relationships, and create meaningful 
              interactions. Our community platforms bring people together around shared interests and goals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Communities Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Community
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive community platform solutions designed to connect people and build lasting relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityServices.map((service, index) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-3xl">{service.icon}</span>
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
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600 mb-1">{service.features_count}</div>
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Community Types
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Types of
              <span className="block text-blue-600 mt-2">Communities</span>
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
                        <div className="text-2xl">{type.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Community Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Essential
              <span className="block text-blue-600 mt-2">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive features that make communities engaging, safe, and easy to manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Community
              <span className="block text-blue-600 mt-2">Success Stories</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Real examples of thriving communities we&apos;ve built and the impact they&apos;ve created.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{story.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Community
              <span className="block text-blue-600 mt-2">Development Process</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Community Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Measuring
              <span className="block text-blue-600 mt-2">Community Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key metrics to track and measure the health and success of your community platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{metric.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Community Technologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technology
              <span className="block text-blue-600 mt-2">Stack</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Modern technologies and tools we use to build scalable and engaging community platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {communityTechnologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{tech.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What You&apos;ll
              <span className="block text-blue-600 mt-2">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete community platform deliverables that provide engagement and growth capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{deliverable.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Why Community Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Community Building</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Community platforms provide significant advantages for engagement, retention, and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Community Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Community Types
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
