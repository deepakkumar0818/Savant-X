/**
 * Visual & messaging themes inspired by each Zoho product website.
 * Colors drawn from Zoho brand guidelines + product marketing sites.
 * Zoho brand primaries: Red #E42527, Green #089949, Blue #226DB4, Yellow #F9B21D
 */

export type ZohoAppTheme = {
  /** Official-style hero headline (inspired by zoho.com product pages) */
  officialHeadline: string;
  /** Short supporting line matching product site tone */
  officialSubhead: string;
  /** Trust / social-proof pills under hero */
  trustPills: string[];
  /** Highlight metrics strip (inspired by Zoho product stats) */
  stats: { value: string; label: string }[];
  /** Feature section eyebrow matching product site language */
  capabilitiesEyebrow: string;
  /** CTA label style */
  ctaLabel: string;
  /** Official product URL for reference link */
  officialUrl: string;
  /** CSS color tokens */
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    soft: string;
    softBorder: string;
    glow: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    badgeText: string;
    iconFrom: string;
    iconTo: string;
  };
};

export const zohoAppThemes: Record<string, ZohoAppTheme> = {
  'zoho-crm': {
    officialHeadline: 'The easiest AI CRM for growth.',
    officialSubhead:
      'Intelligent automation meets intuitive design. Built with AI at its core — we customize Zoho CRM so your team sells smarter without the overhead.',
    trustPills: ['300K+ businesses worldwide', 'Zia AI-ready', '1,000+ integrations'],
    stats: [
      { value: '27%', label: 'Higher productivity*' },
      { value: '50%', label: 'Faster implementation*' },
      { value: '360°', label: 'Customer view' },
    ],
    capabilitiesEyebrow: 'Sales force automation',
    ctaLabel: 'Get Free CRM Strategy Call',
    officialUrl: 'https://www.zoho.com/crm/',
    colors: {
      primary: '#E42527',
      primaryDark: '#C41E20',
      secondary: '#226DB4',
      soft: '#FEF2F2',
      softBorder: '#FECACA',
      glow: 'rgba(228, 37, 39, 0.18)',
      gradientFrom: '#E42527',
      gradientVia: '#DC2626',
      gradientTo: '#226DB4',
      badgeText: '#B91C1C',
      iconFrom: '#E42527',
      iconTo: '#F97316',
    },
  },
  'zoho-books': {
    officialHeadline: 'AI-ready accounting for growing businesses.',
    officialSubhead:
      'Manage end-to-end accounting — from invoicing to inventory & expenses. We set up Zoho Books so finance stays clean, compliant, and connected to sales.',
    trustPills: ['GST-ready setup', 'CRM-linked billing', 'Bank sync & automation'],
    stats: [
      { value: '14-day', label: 'Typical discovery' },
      { value: 'GST', label: 'India-ready config' },
      { value: '1 source', label: 'Of financial truth' },
    ],
    capabilitiesEyebrow: 'Cloud accounting',
    ctaLabel: 'Get Free Books Strategy Call',
    officialUrl: 'https://www.zoho.com/books/',
    colors: {
      primary: '#006FDA',
      primaryDark: '#0064A5',
      secondary: '#089949',
      soft: '#F0F7FF',
      softBorder: '#BFDBFE',
      glow: 'rgba(0, 111, 218, 0.16)',
      gradientFrom: '#006FDA',
      gradientVia: '#226DB4',
      gradientTo: '#089949',
      badgeText: '#1D4ED8',
      iconFrom: '#006FDA',
      iconTo: '#089949',
    },
  },
  'zoho-creator': {
    officialHeadline: 'Prompt. Build. Launch.',
    officialSubhead:
      'AI-powered low-code for internal tools, portals, and core systems. We build the Zoho Creator apps your process actually needs — without traditional development delays.',
    trustPills: ['6M+ users worldwide', '7M+ apps built', '1,000+ integrations'],
    stats: [
      { value: '10×', label: 'Faster than custom code' },
      { value: 'Web+iOS', label: 'Android from one build' },
      { value: 'Deluge', label: 'Powerful automation' },
    ],
    capabilitiesEyebrow: 'Low-code application platform',
    ctaLabel: 'Get Free Creator Strategy Call',
    officialUrl: 'https://www.zoho.com/creator/',
    colors: {
      primary: '#E60000',
      primaryDark: '#C40000',
      secondary: '#1E293B',
      soft: '#FFF1F1',
      softBorder: '#FECACA',
      glow: 'rgba(230, 0, 0, 0.16)',
      gradientFrom: '#E60000',
      gradientVia: '#E42527',
      gradientTo: '#7F1D1D',
      badgeText: '#B91C1C',
      iconFrom: '#E60000',
      iconTo: '#F97316',
    },
  },
  'zoho-recruit': {
    officialHeadline: 'Hire smarter. Track every candidate.',
    officialSubhead:
      'Applicant tracking built for HR teams and staffing agencies. We configure Zoho Recruit pipelines, career pages, and interview workflows so great hires never slip away.',
    trustPills: ['Corporate + agency ATS', 'Career site ready', 'Interview scorecards'],
    stats: [
      { value: 'Faster', label: 'Time-to-hire' },
      { value: '1 ATS', label: 'For every role' },
      { value: 'Full', label: 'Hiring visibility' },
    ],
    capabilitiesEyebrow: 'Talent acquisition',
    ctaLabel: 'Get Free Recruit Strategy Call',
    officialUrl: 'https://www.zoho.com/recruit/',
    colors: {
      primary: '#0D9488',
      primaryDark: '#0F766E',
      secondary: '#226DB4',
      soft: '#F0FDFA',
      softBorder: '#99F6E4',
      glow: 'rgba(13, 148, 136, 0.16)',
      gradientFrom: '#0D9488',
      gradientVia: '#14B8A6',
      gradientTo: '#226DB4',
      badgeText: '#0F766E',
      iconFrom: '#0D9488',
      iconTo: '#226DB4',
    },
  },
  'zoho-analytics': {
    officialHeadline: 'From data to insights in minutes.',
    officialSubhead:
      'Agentic AI-powered self-service BI. We connect Zoho CRM, Books, Desk, and more into live dashboards — so leadership stops waiting on spreadsheet reports.',
    trustPills: ['500+ data connectors', 'Ask Zia AI', '75M+ reports created'],
    stats: [
      { value: '500+', label: 'Data sources' },
      { value: '50+', label: 'Visualizations' },
      { value: 'AI', label: 'Ask Zia insights' },
    ],
    capabilitiesEyebrow: 'Business intelligence',
    ctaLabel: 'Get Free Analytics Strategy Call',
    officialUrl: 'https://www.zoho.com/analytics/',
    colors: {
      primary: '#7C3AED',
      primaryDark: '#6D28D9',
      secondary: '#226DB4',
      soft: '#F5F3FF',
      softBorder: '#DDD6FE',
      glow: 'rgba(124, 58, 237, 0.16)',
      gradientFrom: '#7C3AED',
      gradientVia: '#6366F1',
      gradientTo: '#226DB4',
      badgeText: '#6D28D9',
      iconFrom: '#7C3AED',
      iconTo: '#226DB4',
    },
  },
  'zoho-desk': {
    officialHeadline: 'Helpdesk software that actually helps.',
    officialSubhead:
      'Omnichannel customer service with context, SLAs, and AI. We implement Zoho Desk so agents resolve faster — and customers feel the difference.',
    trustPills: ['100K+ companies trust Desk', 'Omnichannel inbox', '50% faster implementation*'],
    stats: [
      { value: '24/7', label: 'Channel coverage' },
      { value: 'SLA', label: 'Accountability built-in' },
      { value: 'CSAT', label: 'Happiness tracking' },
    ],
    capabilitiesEyebrow: 'Customer service platform',
    ctaLabel: 'Get Free Desk Strategy Call',
    officialUrl: 'https://www.zoho.com/desk/',
    colors: {
      primary: '#EA580C',
      primaryDark: '#C2410C',
      secondary: '#F9B21D',
      soft: '#FFF7ED',
      softBorder: '#FED7AA',
      glow: 'rgba(234, 88, 12, 0.16)',
      gradientFrom: '#EA580C',
      gradientVia: '#F97316',
      gradientTo: '#F9B21D',
      badgeText: '#C2410C',
      iconFrom: '#EA580C',
      iconTo: '#F9B21D',
    },
  },
  'zoho-salesiq': {
    officialHeadline: 'Discover the future of customer engagement.',
    officialSubhead:
      'Live chat, visitor intelligence, and chatbots in one platform. We deploy Zoho SalesIQ so marketing, sales, and support engage the right visitor at the right time.',
    trustPills: ['Live chat + analytics', 'Codeless chatbots', 'CRM lead sync'],
    stats: [
      { value: 'Real-time', label: 'Visitor tracking' },
      { value: '24/7', label: 'Bot engagement' },
      { value: 'CRM', label: 'Auto lead sync' },
    ],
    capabilitiesEyebrow: 'Customer engagement platform',
    ctaLabel: 'Get Free SalesIQ Strategy Call',
    officialUrl: 'https://www.zoho.com/salesiq/',
    colors: {
      primary: '#2563EB',
      primaryDark: '#1D4ED8',
      secondary: '#06B6D4',
      soft: '#EFF6FF',
      softBorder: '#BFDBFE',
      glow: 'rgba(37, 99, 235, 0.16)',
      gradientFrom: '#2563EB',
      gradientVia: '#226DB4',
      gradientTo: '#06B6D4',
      badgeText: '#1D4ED8',
      iconFrom: '#2563EB',
      iconTo: '#06B6D4',
    },
  },
  'zoho-campaigns': {
    officialHeadline: 'Email marketing software that grows as you go.',
    officialSubhead:
      'Unified email & SMS marketing with CRM-synced audiences. We set up Zoho Campaigns templates, drips, and deliverability so every send moves pipeline forward.',
    trustPills: ['Email + SMS', 'CRM-synced lists', 'Pre-built workflows'],
    stats: [
      { value: 'Minutes', label: 'To first campaign' },
      { value: 'A/B', label: 'Optimization built-in' },
      { value: 'Inbox', label: 'Deliverability focus' },
    ],
    capabilitiesEyebrow: 'Email & SMS marketing',
    ctaLabel: 'Get Free Campaigns Strategy Call',
    officialUrl: 'https://www.zoho.com/campaigns/',
    colors: {
      primary: '#DB2777',
      primaryDark: '#BE185D',
      secondary: '#E42527',
      soft: '#FDF2F8',
      softBorder: '#FBCFE8',
      glow: 'rgba(219, 39, 119, 0.16)',
      gradientFrom: '#DB2777',
      gradientVia: '#E42527',
      gradientTo: '#F9B21D',
      badgeText: '#BE185D',
      iconFrom: '#DB2777',
      iconTo: '#E42527',
    },
  },
  'zoho-inventory': {
    officialHeadline: 'Stock, orders, and warehouses — under control.',
    officialSubhead:
      'Inventory and order management that stays in sync with finance. We configure Zoho Inventory so available-to-sell matches reality across every channel.',
    trustPills: ['Multi-warehouse', 'Books-synced valuation', 'Purchase & sales orders'],
    stats: [
      { value: 'Live', label: 'Stock visibility' },
      { value: 'Multi', label: 'Warehouse ready' },
      { value: 'Books', label: 'Finance lockstep' },
    ],
    capabilitiesEyebrow: 'Inventory & order management',
    ctaLabel: 'Get Free Inventory Strategy Call',
    officialUrl: 'https://www.zoho.com/inventory/',
    colors: {
      primary: '#089949',
      primaryDark: '#067A3A',
      secondary: '#F9B21D',
      soft: '#F0FDF4',
      softBorder: '#BBF7D0',
      glow: 'rgba(8, 153, 73, 0.16)',
      gradientFrom: '#089949',
      gradientVia: '#16A34A',
      gradientTo: '#F9B21D',
      badgeText: '#067A3A',
      iconFrom: '#089949',
      iconTo: '#CA8A04',
    },
  },
  'zoho-projects': {
    officialHeadline: 'Plan. Track. Deliver — on time.',
    officialSubhead:
      'Project management with Gantt, tasks, and timesheets. We implement Zoho Projects so delivery connects to CRM wins and Books billing — not just another to-do list.',
    trustPills: ['Gantt & dependencies', 'Timesheets', 'CRM → project handoff'],
    stats: [
      { value: 'On-time', label: 'Delivery focus' },
      { value: 'Templates', label: 'Repeatable quality' },
      { value: 'Billable', label: 'Time visibility' },
    ],
    capabilitiesEyebrow: 'Project & work management',
    ctaLabel: 'Get Free Projects Strategy Call',
    officialUrl: 'https://www.zoho.com/projects/',
    colors: {
      primary: '#0284C7',
      primaryDark: '#0369A1',
      secondary: '#089949',
      soft: '#F0F9FF',
      softBorder: '#BAE6FD',
      glow: 'rgba(2, 132, 199, 0.16)',
      gradientFrom: '#0284C7',
      gradientVia: '#226DB4',
      gradientTo: '#089949',
      badgeText: '#0369A1',
      iconFrom: '#0284C7',
      iconTo: '#089949',
    },
  },
};

export function getZohoAppTheme(slug: string): ZohoAppTheme {
  return zohoAppThemes[slug] ?? zohoAppThemes['zoho-crm'];
}
