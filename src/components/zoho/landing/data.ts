/**
 * Content for the Zoho landing page (/expertise/zoho-integrations).
 *
 * Prices and plan names come from SavantX. Membership terms describe how the plan works
 * without committing to numbers that have not been published: development capacity and
 * response times are confirmed in each client's membership agreement. Package deliverables
 * are typical scope, not a quote. Review with the business before changing any of it.
 */

/** Values sent with enquiries; each `label` is what the visitor sees in the form. */
export const SERVICE_OPTIONS = [
  { id: 'consultation', label: 'Free consultation (not sure yet)' },
  { id: 'membership', label: 'Zoho Development Membership' },
  { id: 'crm-quickstart', label: 'Zoho CRM QuickStart' },
  { id: 'creator-mini-app', label: 'Zoho Creator Mini-App' },
  { id: 'books-setup', label: 'Zoho Books Setup' },
  { id: 'workflow-automation', label: 'Workflow Automation' },
  { id: 'zoho-integration', label: 'Zoho Integration' },
  { id: 'zoho-migration', label: 'Zoho Migration (up to 10 users)' },
  { id: 'people-setup', label: 'Zoho People Setup' },
  { id: 'recruit-setup', label: 'Zoho Recruit Setup' },
  { id: 'automation-integrations', label: 'Business Automation & Integrations' },
  { id: 'enterprise', label: 'Enterprise Zoho Solution' },
  { id: 'erp-starter', label: 'ERP: Manufacturing ERP Starter' },
  { id: 'erp-custom', label: 'ERP: Custom Manufacturing ERP' },
  { id: 'erp-discovery', label: 'ERP: Enterprise ERP Discovery Sprint' },
  { id: 'erp-integration', label: 'ERP: Integration & Automation Program' },
  { id: 'erp-multi-department', label: 'ERP: Multi-Department ERP Implementation' },
  { id: 'erp-improvement', label: 'ERP: Continuous Improvement Plan' },
] as const;

export type ServiceId = (typeof SERVICE_OPTIONS)[number]['id'];

export const BUDGET_OPTIONS = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  'Above ₹1,00,000',
  'Monthly membership (₹14,999/month)',
  'Not sure yet',
] as const;

export const MEMBERSHIP = {
  name: 'Zoho Development Membership',
  apps: ['Zoho CRM', 'Zoho Creator'],
  monthly: '₹14,999',
  minimumMonths: 3,
  minimumTotal: '₹44,997',
  tagline: 'Your dedicated Zoho development partner for ongoing customisation, automation and enhancements.',
  /** Types of development request covered. */
  requestTypes: [
    { title: 'Zoho CRM customisation', detail: 'Modules, fields, layouts and views' },
    { title: 'Zoho Creator development', detail: 'Forms, reports and workflows' },
    { title: 'Deluge scripting', detail: 'Custom logic and automation' },
    { title: 'Workflow automation', detail: 'Approvals, notifications and scheduled tasks' },
    { title: 'Bug fixes and improvements', detail: 'To your existing setup' },
    { title: 'CRM and Creator integrations', detail: 'Within the agreed scope' },
    { title: 'Monthly progress review', detail: 'Track completed work and plan next steps' },
    { title: 'One priority queue', detail: 'You choose the order; we work one task at a time' },
  ],
  /** How requests are submitted and prioritised. */
  process: [
    { title: 'Send a request', body: 'Tell us what you need changed or built in CRM or Creator.' },
    { title: 'We estimate it', body: 'Larger requests are estimated first, so you know the effort.' },
    { title: 'You set the priority', body: 'Requests go into one queue. We work on one task at a time.' },
    { title: 'Monthly review', body: 'We review what was delivered and agree on next priorities.' },
  ],
  exclusions: [
    'Zoho licence and subscription fees',
    'Third-party app, API or service costs',
    'Large or multi-system integrations',
    'Data migration projects',
    'Work on Zoho apps other than CRM and Creator',
  ],
  /** Shown as-is; capacity and response times are not yet published. */
  capacity:
    'A defined amount of development work each month, set out in your membership agreement. Not unlimited hours or simultaneous tasks.',
  timelines: 'Response and delivery times are confirmed in your membership agreement before you start.',
};

export const PACKAGES: { id: ServiceId; name: string; price: string; benefit: string; deliverables: string[] }[] = [
  {
    id: 'crm-quickstart',
    name: 'Zoho CRM QuickStart',
    price: '₹9,999',
    benefit: 'Get your sales team working in a CRM set up for how you actually sell.',
    deliverables: ['Sales pipeline and deal stages', 'Lead and contact layouts', 'Assignment and follow-up rules', 'Team walkthrough'],
  },
  {
    id: 'creator-mini-app',
    name: 'Zoho Creator Mini-App',
    price: '₹14,999',
    benefit: 'Replace a spreadsheet or paper process with a small custom app.',
    deliverables: ['Forms and reports for one process', 'Simple approval workflow', 'User roles and access', 'Testing with your team'],
  },
  {
    id: 'books-setup',
    name: 'Zoho Books Setup',
    price: '₹7,999',
    benefit: 'Start invoicing and tracking payments with your books set up correctly.',
    deliverables: ['Organisation and GST settings', 'Invoice and quote templates', 'Chart of accounts review'],
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    price: '₹7,499',
    benefit: 'Remove repetitive manual steps from a process your team runs every day.',
    deliverables: ['Process mapping', 'Workflow rules and alerts', 'Testing with your team'],
  },
  {
    id: 'zoho-integration',
    name: 'Zoho Integration',
    price: '₹19,999',
    benefit: 'Connect Zoho to another system so data moves without re-typing.',
    deliverables: ['One integration between two systems', 'Field mapping', 'Error handling and alerts', 'Handover documentation'],
  },
  {
    id: 'zoho-migration',
    name: 'Zoho Migration',
    price: '₹3,999',
    benefit: 'Move a team of up to 10 users onto Zoho with their data and access set up correctly.',
    deliverables: ['Migration for up to 10 users', 'User accounts and roles', 'Data check after go-live'],
  },
  {
    id: 'people-setup',
    name: 'Zoho People Setup',
    price: '₹5,999',
    benefit: 'Run employee records, leave and attendance in one HR system.',
    deliverables: ['Employee records and departments', 'Leave and attendance setup', 'Employee self-service access'],
  },
  {
    id: 'recruit-setup',
    name: 'Zoho Recruit Setup',
    price: '₹6,999',
    benefit: 'Complete setup to track every opening and candidate from application to offer.',
    deliverables: ['Job openings and hiring pipeline', 'Career page and application forms', 'Interview and email templates'],
  },
];

export const INTEGRATION = {
  price: '₹19,999',
  problem: 'Teams re-enter the same customer, order and invoice data in several systems, and errors creep in.',
  solution:
    'We connect Zoho apps to each other and to your other systems using native Zoho integrations, Zoho Flow, REST APIs and webhooks, where the systems support them.',
  nodes: ['Zoho CRM', 'Zoho Creator', 'Zoho Books', 'Zoho Inventory', 'Zoho Desk', 'Your website', 'External apps', 'REST APIs', 'Webhooks'],
};

export const ENTERPRISE = {
  problem: 'Large or multi-team operations outgrow a single app and need several Zoho apps designed to work as one system.',
  solution: 'We plan the architecture, build custom applications and workflows, migrate your data and connect the systems around Zoho.',
  points: [
    'Custom business applications',
    'Complex, multi-step workflows',
    'Multi-application Zoho implementation',
    'Data migration from existing systems',
    'Reporting and management dashboards',
    'Integration architecture',
  ],
};

/** Apps shown in the trust strip and app cards. Logos exist for these in /public/images. */
export const ZOHO_LOGOS: Record<string, string | undefined> = {
  'Zoho CRM': '/images/zoho-crm.webp',
  'Zoho Creator': '/images/ZohoCreator.png',
  'Zoho Books': '/images/zohoBooks.png',
  'Zoho Inventory': '/images/ZohoInventary.png',
  'Zoho Desk': '/images/ZohoDesk.png',
  'Zoho Analytics': '/images/ZohoAnalytics.png',
  'Zoho Projects': '/images/ZohoProjects.png',
  'Zoho Recruit': '/images/ZohoRecruit.png',
  // No approved logo files yet for Flow and Sign; the page shows an icon instead.
  'Zoho Flow': undefined,
  'Zoho Sign': undefined,
};

export const TRUST_APPS = [
  'Zoho CRM',
  'Zoho Creator',
  'Zoho Books',
  'Zoho Inventory',
  'Zoho Desk',
  'Zoho Flow',
  'Zoho Analytics',
  'Zoho Sign',
  'Zoho Projects',
];

/** `slug` links to the existing app page; apps without one link to the enquiry form. */
export type AppVisual = 'crm' | 'creator' | 'books' | 'inventory' | 'desk' | 'flow' | 'analytics' | 'sign';

export const APP_CARDS: { name: string; slug?: string; service: ServiceId; visual: AppVisual; tagline: string; features: string[] }[] = [
  {
    name: 'Zoho CRM',
    slug: 'zoho-crm',
    service: 'crm-quickstart',
    visual: 'crm',
    tagline: 'Manage leads, customers and sales with a complete CRM solution.',
    features: ['Lead and deal management', 'Sales pipeline and forecasting', 'Workflow automation', 'Reports and analytics'],
  },
  {
    name: 'Zoho Creator',
    slug: 'zoho-creator',
    service: 'creator-mini-app',
    visual: 'creator',
    tagline: 'Build custom business applications without complex coding.',
    features: ['Custom forms and workflows', 'Role-based access', 'Reports and dashboards', 'Replace manual processes'],
  },
  {
    name: 'Zoho Books',
    slug: 'zoho-books',
    service: 'books-setup',
    visual: 'books',
    tagline: 'Invoicing, payments and GST in one place, linked to your business data.',
    features: ['Invoicing and payments', 'Expense management', 'GST and tax compliance', 'Financial reports'],
  },
  {
    name: 'Zoho Inventory',
    slug: 'zoho-inventory',
    service: 'automation-integrations',
    visual: 'inventory',
    tagline: 'Track stock, sales orders and purchases in real time.',
    features: ['Inventory and warehouse', 'Sales and purchase orders', 'Stock tracking and alerts', 'Multi-warehouse support'],
  },
  {
    name: 'Zoho Desk',
    slug: 'zoho-desk',
    service: 'workflow-automation',
    visual: 'desk',
    tagline: 'Manage customer support with tickets, SLAs and automation.',
    features: ['Ticket management', 'Automated assignment rules', 'SLA tracking and escalation', 'Knowledge base and reports'],
  },
  {
    name: 'Zoho Flow',
    service: 'zoho-integration',
    visual: 'flow',
    tagline: 'Connect your apps and automate data between them.',
    features: ['App integrations', 'Automated workflows', 'Data synchronisation', 'Less manual work'],
  },
  {
    name: 'Zoho Analytics',
    slug: 'zoho-analytics',
    service: 'automation-integrations',
    visual: 'analytics',
    tagline: 'Turn your data into clear reports and dashboards.',
    features: ['Interactive dashboards', 'Business insights', 'Data from multiple sources', 'Shareable reports'],
  },
  {
    name: 'Zoho Sign',
    service: 'workflow-automation',
    visual: 'sign',
    tagline: 'Send, sign and manage documents online with full visibility.',
    features: ['Send documents for signature', 'Track signature status', 'Legally valid e-signatures', 'Works with CRM and other apps'],
  },
];

export const USE_CASES: { title: string; challenge: string; apps: string; workflow: string; steps: string[]; outcome: string; service: ServiceId }[] = [
  {
    title: 'Lead management and follow-ups',
    challenge: 'Leads from the website and ads sit in inboxes, and follow-ups depend on memory.',
    apps: 'Zoho CRM',
    workflow: 'Capture each lead, assign it by rule and create follow-up tasks automatically.',
    outcome: 'Faster responses and fewer missed opportunities.',
    steps: ['Capture leads from website and ads', 'Assign each lead by rule', 'Create follow-up tasks automatically'],
    service: 'crm-quickstart',
  },
  {
    title: 'Quotation and approval automation',
    challenge: 'Quotes are built by hand, and discounts are approved over phone or chat.',
    apps: 'Zoho CRM, Zoho Sign',
    workflow: 'Generate quotes from deals, route discounts for approval and collect signatures online.',
    outcome: 'Consistent quotes and a clear approval trail.',
    steps: ['Generate quotes from deals', 'Route discounts for approval', 'Collect signatures online'],
    service: 'workflow-automation',
  },
  {
    title: 'Inventory and order management',
    challenge: 'Stock levels are checked manually, and orders are not linked to purchases.',
    apps: 'Zoho Inventory, Zoho CRM',
    workflow: 'Link sales orders to stock and raise purchase orders when items run low.',
    outcome: 'Fewer stock-outs and less manual checking.',
    steps: ['Link sales orders to stock', 'Raise purchase orders automatically', 'Alerts when stock runs low'],
    service: 'automation-integrations',
  },
  {
    title: 'Customer support and SLA automation',
    challenge: 'Requests arrive by email and phone with no tracking or response targets.',
    apps: 'Zoho Desk',
    workflow: 'Turn emails into tickets, assign them by rule and escalate before SLAs are missed.',
    outcome: 'Every request tracked and answered on time.',
    steps: ['Turn emails into tickets', 'Assign to teams by rule', 'Track SLAs and escalate'],
    service: 'workflow-automation',
  },
  {
    title: 'Accounting integrations',
    challenge: 'Won deals are re-entered in accounts, and payment status is unknown to sales.',
    apps: 'Zoho Books, Zoho CRM',
    workflow: 'Create invoices from won deals and sync payment status back to CRM.',
    outcome: 'No double entry between sales and finance.',
    steps: ['Create invoices from won deals', 'Sync payment status to CRM', 'Match sales with accounts'],
    service: 'zoho-integration',
  },
  {
    title: 'Reporting and management dashboards',
    challenge: 'Management reports are compiled by hand and are out of date when read.',
    apps: 'Zoho Analytics',
    workflow: 'Bring CRM, Books and operations data into dashboards that refresh automatically.',
    outcome: 'Up-to-date numbers without manual reporting.',
    steps: ['Combine CRM, Books and operations data', 'Dashboards that refresh automatically', 'Scheduled report emails'],
    service: 'automation-integrations',
  },
];

export const WHY = [
  { title: 'Custom solutions for real workflows', body: 'We configure Zoho around how your team already works, so people adopt it instead of working around it.' },
  { title: 'Zoho CRM and Creator development', body: 'From CRM customisation to complete Creator applications, built and maintained by the same team.' },
  { title: 'Deluge scripting and API integrations', body: 'Custom Deluge functions and REST API connections for the cases configuration alone cannot handle.' },
  { title: 'Cross-application automation', body: 'CRM, Books, Inventory, Desk and Creator working together, so data entered once appears everywhere.' },
  { title: 'Clear scope and milestones', body: 'Every project starts with agreed scope, milestones and price, so you know what you are paying for.' },
  { title: 'Ongoing development and support', body: 'Keep improving after go-live through support or the Zoho Development Membership.' },
];

export const FAQS = [
  {
    q: 'What does the ₹14,999 monthly membership include?',
    a: 'Ongoing development on Zoho CRM and Zoho Creator: CRM customisation, Creator forms, reports and workflows, Deluge scripting, workflow automation, bug fixes, integrations within the agreed scope, and a monthly progress review. The monthly development capacity is set out in your membership agreement.',
  },
  {
    q: 'Why is there a three-month minimum?',
    a: 'Understanding your processes, building changes, testing them with your team and refining them takes more than a few weeks. The three-month minimum (₹44,997 before applicable taxes) gives enough time to deliver and review meaningful improvements.',
  },
  {
    q: 'Are Zoho licenses included?',
    a: 'No. Zoho licences and subscriptions are bought directly from Zoho and billed separately, as are any third-party app or API costs. Our fees cover SavantX development and implementation work only.',
  },
  {
    q: 'Can I request both CRM and Creator changes?',
    a: 'Yes. The membership covers both Zoho CRM and Zoho Creator, and requests for either go into the same queue.',
  },
  {
    q: 'How are development tasks prioritized?',
    a: 'All requests go into one queue. You decide the order, and we work through it one task at a time rather than many in parallel. Larger requests are estimated first, and priorities are reviewed at the monthly review.',
  },
  {
    q: 'Are complex integrations included?',
    a: 'Smaller CRM and Creator integrations within the agreed scope are included in the membership. Complex or multi-system integrations are scoped and quoted separately, starting at ₹19,999.',
  },
  {
    q: 'How does enterprise project pricing work?',
    a: 'Enterprise projects are quoted individually. After a consultation we define the scope and milestones, then share a quotation for the agreed work.',
  },
  {
    q: 'How can I book a consultation?',
    a: 'Fill in the enquiry form on this page, or email or call us. The consultation is free and there is no obligation to go ahead.',
  },
  {
    q: 'Can you work with an existing Zoho implementation?',
    a: 'Yes. We start by reviewing your current setup, then recommend fixes and improvements before changing anything.',
  },
  {
    q: 'Do you offer data migration and user training?',
    a: 'Yes. Both are scoped as part of your project, or quoted separately when they are large, so you know the cost upfront.',
  },
  {
    q: 'Who owns custom-developed applications and code?',
    a: 'Ownership of custom applications and code is set out in your project agreement. We confirm these terms in writing before work starts.',
  },
  {
    q: 'How are scope changes handled?',
    a: 'Changes are documented and estimated before any work on them starts. If a change affects the price or timeline, we agree it with you first.',
  },
];

/** ERP offers for manufacturers and larger businesses. Prices are indicative starting budgets from SavantX. */
export type ErpVisual = 'starter' | 'custom' | 'discovery' | 'integration' | 'multi-department' | 'improvement';

export const ERP_OFFERS: {
  id: ServiceId;
  visual: ErpVisual;
  label: string;
  audience: 'Manufacturers' | 'Large businesses';
  name: string;
  price: string;
  per?: string;
  summary: string;
  scope: string[];
  bestFor: string;
  note?: string;
  top?: boolean;
}[] = [
  {
    id: 'erp-starter',
    visual: 'starter',
    label: 'Starter package',
    audience: 'Manufacturers',
    name: 'Manufacturing ERP Starter',
    price: '₹49,999',
    summary: 'A focused ERP implementation for manufacturers who need better control over their basic operations.',
    scope: [
      'Sales orders and customer records',
      'Purchase orders and supplier records',
      'Inventory and stock movement',
      'Basic management reports',
      'User training and deployment',
    ],
    bestFor: 'Small manufacturers that need operational visibility without implementing every ERP module at once.',
  },
  {
    id: 'erp-custom',
    visual: 'custom',
    label: 'Main ERP offer',
    audience: 'Manufacturers',
    name: 'Custom Manufacturing ERP',
    price: '₹1,49,999',
    summary: 'A tailored system for businesses that need to manage their operations from customer enquiry to production and delivery.',
    scope: [
      'Enquiry, quotation and sales orders',
      'Bill of Materials (BOM)',
      'Job orders and work orders',
      'Purchasing and inventory',
      'Production tracking and quality checks',
    ],
    bestFor: 'Growing manufacturers that have outgrown spreadsheets and off-the-shelf tools.',
  },
  {
    id: 'erp-discovery',
    visual: 'discovery',
    label: 'Enterprise discovery',
    audience: 'Large businesses',
    name: 'Enterprise ERP Discovery Sprint',
    price: '₹49,999',
    summary: 'A paid discovery engagement before committing to a major ERP build or transformation.',
    scope: [
      'Stakeholder and department workshops',
      'Current-process and requirements mapping',
      'Integration and data-flow assessment',
      'Proposed solution architecture',
      'Phased implementation plan, risks and budget estimate',
    ],
    bestFor: 'Enterprises that need clarity before approving a large ERP project.',
  },
  {
    id: 'erp-integration',
    visual: 'integration',
    label: 'High-value project',
    audience: 'Large businesses',
    name: 'ERP Integration & Automation Program',
    price: '₹2,49,999',
    summary: 'Connect existing ERP, CRM, accounting, inventory and external business systems.',
    scope: [
      'API and application integrations',
      'Automated data transfer and validation',
      'Cross-system workflow automation',
      'Exception handling and logging',
      'Testing and technical documentation',
    ],
    bestFor: 'Businesses whose departments use disconnected applications and duplicate data entry.',
  },
  {
    id: 'erp-multi-department',
    visual: 'multi-department',
    label: 'Enterprise transformation',
    audience: 'Large businesses',
    name: 'Multi-Department ERP Implementation',
    price: '₹4,99,999',
    summary: 'A phased ERP implementation across manufacturing, purchasing, stores, quality, delivery and management.',
    scope: [
      'Requirements and solution architecture',
      'Department-wise implementation',
      'Data migration planning',
      'User roles and approval processes',
      'Testing, training and go-live support',
      'Documentation and post-launch stabilisation',
    ],
    bestFor: 'Larger manufacturers with multiple departments, locations or complex approval processes.',
    note: 'A starting project budget, not a quote for a complete multi-plant ERP. Enterprise requirements are assessed before pricing.',
  },
  {
    id: 'erp-improvement',
    visual: 'improvement',
    label: 'Ongoing support',
    audience: 'Large businesses',
    name: 'ERP Continuous Improvement Plan',
    price: '₹39,999',
    per: '/month',
    summary: 'Ongoing support and enhancements after implementation.',
    scope: [
      'Agreed monthly development capacity',
      'Bug fixes and minor enhancements',
      'Workflow and report improvements',
      'Technical support with defined response targets',
      'Monthly review and improvement backlog',
    ],
    bestFor: "Businesses that need continued development but don't want to hire a full internal ERP team.",
    top: true,
  },
];
