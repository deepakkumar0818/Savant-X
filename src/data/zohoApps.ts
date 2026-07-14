export type ZohoApp = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  iconUrl: string;
  heroImage: string;
  heroImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  category: string;
  overview: string;
  longIntro: string[];
  challenges: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  whoItsFor: string[];
  integrations: string[];
  whatWeDo: string[];
  processSteps: { title: string; desc: string }[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
};

export const zohoApps: ZohoApp[] = [
  {
    slug: 'zoho-crm',
    name: 'Zoho CRM',
    shortName: 'CRM',
    tagline: 'Turn every lead into a closed deal — with a sales system that actually works.',
    description:
      'Zoho CRM setup, customization, and automation by SavantX — pipelines, blueprints, workflows, and integrations so your sales team converts more with less busywork.',
    seoTitle: 'Zoho CRM Setup, Customization & Automation Partner | SavantX',
    seoDescription:
      'Expert Zoho CRM implementation, customization, and workflow automation. Pipelines, Blueprints, Zia AI, lead routing, and CRM integrations for growing businesses in India and beyond.',
    keywords: [
      'Zoho CRM setup',
      'Zoho CRM customization',
      'Zoho CRM partner',
      'CRM implementation India',
      'Zoho CRM automation',
      'sales pipeline Zoho',
    ],
    iconUrl: '/images/zoho-crm.webp',
    heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
    heroImageAlt: 'Sales team collaborating around CRM pipeline dashboards',
    secondaryImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    secondaryImageAlt: 'Analytics dashboard showing sales pipeline performance',
    category: 'Sales & Revenue',
    overview:
      'Trusted by hundreds of thousands of businesses worldwide, Zoho CRM unifies leads, contacts, deals, and activities in one place. With Blueprints, workflows, omnichannel engagement, and Zia AI, it becomes more than a contact database — it becomes your revenue engine.',
    longIntro: [
      'Zoho CRM is one of the most widely adopted customer relationship management platforms for small and mid-sized businesses that want enterprise-grade sales tools without enterprise complexity. It brings marketing, sales, and support context into a single customer record so teams stop working from scattered spreadsheets and inboxes.',
      'At SavantX, we treat Zoho CRM as a business system — not a software install. We map your real sales process, design modules and layouts around how your team works, and automate the repetitive steps that slow deals down. Whether you are migrating from Excel, HubSpot, Salesforce, or starting fresh, we build a CRM your team will actually use.',
      'From lead capture on your website to quotation, approval, and handoff into Projects or Books, we connect Zoho CRM into the rest of your Zoho ecosystem so revenue data stays accurate end to end.',
    ],
    challenges: [
      {
        title: 'Leads falling through the cracks',
        desc: 'Inquiries arrive from ads, WhatsApp, forms, and referrals — but without routing rules and follow-up automation, hot leads go cold.',
      },
      {
        title: 'Inconsistent sales process',
        desc: 'Every salesperson runs deals differently. Without Blueprints and stage rules, forecasting becomes guesswork.',
      },
      {
        title: 'CRM that nobody updates',
        desc: 'Overbuilt fields, cluttered layouts, and no mobile-friendly workflows kill adoption. A CRM only works if the team lives in it.',
      },
      {
        title: 'Disconnected tools',
        desc: 'When chat, email, accounting, and support sit outside the CRM, managers never get a true customer 360° view.',
      },
    ],
    features: [
      {
        title: 'Pipeline & Blueprint Control',
        desc: 'Define exact sales stages, mandatory fields, and next actions so every deal follows a proven process your managers can coach against.',
      },
      {
        title: 'Workflow Automation',
        desc: 'Auto-assign leads, send follow-ups, create tasks, and trigger alerts — so no inquiry waits for someone to remember.',
      },
      {
        title: 'Omnichannel Engagement',
        desc: 'Email, phone, social, chat, and WhatsApp conversations tied to the same customer record for full context.',
      },
      {
        title: 'Zia AI Insights',
        desc: 'Predict deal outcomes, detect anomalies, and surface next-best actions so reps focus on the right opportunities.',
      },
      {
        title: 'Reports & Forecasting',
        desc: 'Real-time dashboards for conversion rates, team performance, territory results, and revenue forecasts.',
      },
      {
        title: 'Deep Zoho Integrations',
        desc: 'Connect Books, Campaigns, Desk, SalesIQ, and Creator apps into one customer journey across the stack.',
      },
    ],
    useCases: [
      {
        title: 'B2B Sales Teams',
        desc: 'Structured pipelines, territory rules, multi-level approvals, and quote workflows for complex deal cycles.',
      },
      {
        title: 'Inside Sales & SDRs',
        desc: 'Lead scoring, auto-routing, cadence automation, and activity tracking so no inquiry goes cold.',
      },
      {
        title: 'Service & Consulting Firms',
        desc: 'From enquiry to quotation to project handoff — one continuous customer journey into delivery.',
      },
      {
        title: 'Manufacturing & Distribution',
        desc: 'Dealer networks, sample requests, and order pipelines linked to inventory and accounting.',
      },
    ],
    whoItsFor: [
      'Growing SMEs replacing Excel or WhatsApp-based sales tracking',
      'Teams migrating from Salesforce, HubSpot, or Pipedrive',
      'Businesses that need CRM + Books + Desk in one Zoho ecosystem',
      'Founders who want pipeline visibility without hiring a large RevOps team',
    ],
    integrations: [
      'Zoho Books for quotes and invoices',
      'Zoho Campaigns for nurture sequences',
      'Zoho SalesIQ for website chat leads',
      'Zoho Desk for support context on accounts',
      'WhatsApp, websites, payment gateways, and custom APIs',
    ],
    whatWeDo: [
      'CRM architecture tailored to your sales process',
      'Custom modules, fields, layouts, and validation rules',
      'Blueprint & workflow automation design',
      'Lead capture from website, ads, forms, and WhatsApp',
      'Role-based access, territories, and reporting',
      'Migration from Excel, Salesforce, HubSpot, or legacy tools',
      'Team training and post-go-live optimization',
    ],
    processSteps: [
      {
        title: 'Discover',
        desc: 'We audit your current sales process, tools, and data quality to define the right CRM model.',
      },
      {
        title: 'Design',
        desc: 'Modules, pipelines, Blueprints, and automation rules are designed before anything is built.',
      },
      {
        title: 'Implement',
        desc: 'We configure Zoho CRM, migrate data, connect integrations, and test with real scenarios.',
      },
      {
        title: 'Adopt & Optimize',
        desc: 'Training, adoption coaching, and iteration so the CRM becomes daily habit — not shelfware.',
      },
    ],
    outcomes: [
      'Higher lead-to-deal conversion',
      'Fewer missed follow-ups',
      'Clear pipeline visibility for leadership',
      'Sales team adoption that sticks',
    ],
    faqs: [
      {
        question: 'How long does a Zoho CRM implementation take?',
        answer:
          'A focused CRM setup for a small team can go live in 2–4 weeks. Multi-pipeline, multi-team rollouts with migrations and integrations typically take 4–8 weeks depending on complexity.',
      },
      {
        question: 'Can you migrate our data from Excel or another CRM?',
        answer:
          'Yes. We clean, map, and import leads, contacts, accounts, and deals from Excel, Google Sheets, HubSpot, Salesforce, and other systems with validation before go-live.',
      },
      {
        question: 'Do you customize Zoho CRM for our industry?',
        answer:
          'Absolutely. We design custom modules, fields, layouts, and Blueprints around manufacturing, services, distribution, education, and other industry workflows — not generic templates.',
      },
      {
        question: 'Will Zoho CRM integrate with our website and WhatsApp?',
        answer:
          'Yes. We connect web forms, landing pages, chat tools, and WhatsApp lead flows so every inquiry lands in Zoho CRM with the right owner and follow-up automation.',
      },
    ],
  },
  {
    slug: 'zoho-books',
    name: 'Zoho Books',
    shortName: 'Books',
    tagline: 'Clean books. Faster invoices. Finance that runs itself.',
    description:
      'Zoho Books accounting setup, GST configuration, invoicing automation, and CRM-linked billing by SavantX — so finance stays accurate without spreadsheet chaos.',
    seoTitle: 'Zoho Books Setup, GST & Accounting Automation | SavantX',
    seoDescription:
      'Professional Zoho Books implementation for SMEs — invoicing, GST/tax setup, bank reconciliation, expense workflows, and CRM-to-invoice automation by a Zoho development partner.',
    keywords: [
      'Zoho Books setup',
      'Zoho Books GST',
      'Zoho accounting partner',
      'Zoho Books India',
      'online accounting Zoho',
      'CRM invoice automation',
    ],
    iconUrl: '/images/zohoBooks.png',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
    heroImageAlt: 'Finance professional reviewing invoices and accounting reports',
    secondaryImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    secondaryImageAlt: 'Financial charts and cash flow reporting dashboard',
    category: 'Finance & Accounting',
    overview:
      'Zoho Books handles invoicing, expenses, bank reconciliation, project billing, and compliance in one cloud workspace. When connected to CRM and Inventory, quotes become invoices and payments update customer records automatically.',
    longIntro: [
      'Zoho Books is cloud accounting software built for growing businesses that need professional invoicing, expense control, and tax-ready reports without the overhead of traditional desktop accounting. It is especially powerful when paired with Zoho CRM and Zoho Inventory as part of a connected finance stack.',
      'SavantX configures Zoho Books around how your business actually bills — retainers, milestones, product invoices, or multi-GST scenarios. We set up your chart of accounts, payment gateways, bank feeds, and automation so finance teams spend less time on data entry and more time on decisions.',
      'If you are still reconciling in Excel or juggling separate tools for quotes, invoices, and payments, Zoho Books gives you one source of financial truth that leadership can trust.',
    ],
    challenges: [
      {
        title: 'Late invoices and slow collections',
        desc: 'Manual invoicing delays cash flow. Without reminders and payment links, receivables pile up.',
      },
      {
        title: 'GST and compliance stress',
        desc: 'Incorrect tax setups create filing headaches. Books needs the right tax rules from day one.',
      },
      {
        title: 'Sales and finance out of sync',
        desc: 'Won deals in CRM that never become invoices create revenue leakage and messy books.',
      },
      {
        title: 'Month-end chaos',
        desc: 'Scattered expenses, unreconciled banks, and missing bills turn every close into a fire drill.',
      },
    ],
    features: [
      {
        title: 'Smart Invoicing',
        desc: 'Professional invoices, recurring billing, payment links, and automated payment reminders.',
      },
      {
        title: 'Expense & Bank Sync',
        desc: 'Track expenses, reconcile bank feeds, and keep cash flow visible in real time.',
      },
      {
        title: 'Tax & Compliance',
        desc: 'GST, VAT, and region-ready tax setups with audit-friendly reports and filing support.',
      },
      {
        title: 'CRM-Linked Billing',
        desc: 'Convert won deals into invoices and keep customer balances in sync with sales.',
      },
      {
        title: 'Project Accounting',
        desc: 'Bill by milestone, retainer, or timesheet — ideal for agencies and service firms.',
      },
      {
        title: 'Financial Dashboards',
        desc: 'P&L, balance sheet, aging, and cash-flow views your leadership can trust.',
      },
    ],
    useCases: [
      {
        title: 'SMEs & Startups',
        desc: 'Replace spreadsheets with a clean, audit-ready accounting system from day one.',
      },
      {
        title: 'Product Companies',
        desc: 'Inventory-aware invoicing with stock and COGS visibility via Zoho Inventory.',
      },
      {
        title: 'Service Firms',
        desc: 'Retainers, milestone billing, and project profitability tracking with timesheets.',
      },
      {
        title: 'Multi-location Businesses',
        desc: 'Branch-level reporting and consolidated financial visibility across entities.',
      },
    ],
    whoItsFor: [
      'Businesses moving off Tally spreadsheets or desktop-only accounting',
      'Companies that already use Zoho CRM and want connected billing',
      'Founders who need real-time cash and receivable visibility',
      'Finance teams preparing for cleaner audits and GST filings',
    ],
    integrations: [
      'Zoho CRM for quote-to-cash',
      'Zoho Inventory for stock-aware invoicing',
      'Zoho Expense and Payroll where applicable',
      'Payment gateways and bank feeds',
      'Zoho Analytics for advanced finance dashboards',
    ],
    whatWeDo: [
      'Chart of accounts & opening balances setup',
      'Invoice templates, payment gateways, and reminders',
      'GST/tax configuration and compliance workflows',
      'CRM ↔ Books automation for quotes and invoices',
      'Bank feeds, expense policies, and approvals',
      'Training for finance teams and founders',
    ],
    processSteps: [
      {
        title: 'Finance Discovery',
        desc: 'We review how you invoice, collect, expense, and report today.',
      },
      {
        title: 'Books Architecture',
        desc: 'Chart of accounts, tax rules, templates, and approval flows are designed first.',
      },
      {
        title: 'Go-Live Setup',
        desc: 'Opening balances, bank connections, CRM links, and user roles are configured.',
      },
      {
        title: 'Stabilize',
        desc: 'We support your first closes, refine reports, and train the finance team.',
      },
    ],
    outcomes: [
      'Faster collections',
      'Fewer accounting errors',
      'Real-time cash visibility',
      'Less time spent on month-end close',
    ],
    faqs: [
      {
        question: 'Is Zoho Books suitable for GST in India?',
        answer:
          'Yes. Zoho Books supports GST configuration, tax reports, and compliance-oriented workflows. We set up tax rules correctly for your business model during implementation.',
      },
      {
        question: 'Can Zoho Books connect to Zoho CRM?',
        answer:
          'Yes — and that is one of its biggest strengths. We automate quote-to-invoice flows so won deals become invoices without re-entering data.',
      },
      {
        question: 'Can you migrate from Tally or Excel?',
        answer:
          'We help migrate opening balances, contacts, and key historical data, then rebuild your chart of accounts and processes cleanly in Zoho Books.',
      },
      {
        question: 'Do you train our accountant on Zoho Books?',
        answer:
          'Yes. Training is part of every engagement so your finance team can invoice, reconcile, and report confidently after go-live.',
      },
    ],
  },
  {
    slug: 'zoho-creator',
    name: 'Zoho Creator',
    shortName: 'Creator',
    tagline: 'If Zoho doesn’t have the app you need — we build it.',
    description:
      'Custom Zoho Creator app development by SavantX — ERPs, portals, approval systems, and industry workflows on Zoho’s low-code platform.',
    seoTitle: 'Zoho Creator App Development & Custom ERP | SavantX',
    seoDescription:
      'Hire SavantX for Zoho Creator development — custom business apps, manufacturing ERP, vendor portals, approval workflows, and Deluge automation integrated with Zoho CRM and Books.',
    keywords: [
      'Zoho Creator development',
      'Zoho Creator partner',
      'custom Zoho apps',
      'Zoho low-code development',
      'Zoho Creator ERP',
      'Deluge developer',
    ],
    iconUrl: '/images/ZohoCreator.png',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80',
    heroImageAlt: 'Developer building a custom business application interface',
    secondaryImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
    secondaryImageAlt: 'Team reviewing custom software workflows on screens',
    category: 'Custom Apps & Low-Code',
    overview:
      'Zoho Creator lets us design forms, workflows, reports, and portals without starting from scratch. It is the go-to tool when standard Zoho apps cannot cover a unique process — manufacturing, field ops, vendor portals, internal tools, and more.',
    longIntro: [
      'Zoho Creator is Zoho’s low-code application platform for building custom, data-centric business software. When CRM, Books, or Inventory cannot model your process, Creator fills the gap — with forms, dashboards, portals, and Deluge scripting that still live inside the Zoho ecosystem.',
      'SavantX specializes in Creator apps that feel purpose-built: manufacturing ERPs, shop-floor trackers, vendor portals, internal approval systems, and industry tools that replace fragile spreadsheets. We design for usability first, then layer automation and integrations.',
      'Because Creator connects to CRM, Books, Desk, and external APIs, your custom app does not become another silo — it becomes the operational core that the rest of Zoho supports.',
    ],
    challenges: [
      {
        title: 'Processes that don’t fit standard software',
        desc: 'Off-the-shelf tools force workarounds. Creator lets us model your exact workflow.',
      },
      {
        title: 'Spreadsheet-driven operations',
        desc: 'Critical processes living in Excel break as teams grow — no audit trail, no mobile access, no automation.',
      },
      {
        title: 'Expensive custom software quotes',
        desc: 'Full custom development is slow and costly. Creator delivers tailored apps faster at a fraction of the cost.',
      },
      {
        title: 'Disconnected internal tools',
        desc: 'Homegrown tools that don’t talk to CRM or finance create duplicate data and errors.',
      },
    ],
    features: [
      {
        title: 'Custom Business Apps',
        desc: 'Build apps for operations, approvals, inventory, HR variants, or industry-specific workflows.',
      },
      {
        title: 'Drag-and-Drop + Deluge',
        desc: 'Rapid UI building with powerful scripting for complex business logic and validations.',
      },
      {
        title: 'Customer & Vendor Portals',
        desc: 'Secure external portals for orders, tickets, documents, and status tracking.',
      },
      {
        title: 'Workflow Engines',
        desc: 'Multi-step approvals, notifications, SLAs, and automated status updates.',
      },
      {
        title: 'Mobile-Ready Apps',
        desc: 'Field teams get native-feeling mobile experiences without a separate codebase.',
      },
      {
        title: 'Zoho Ecosystem APIs',
        desc: 'Deep links to CRM, Books, Desk, and Analytics so data never lives in a silo.',
      },
    ],
    useCases: [
      {
        title: 'Manufacturing ERP',
        desc: 'Production orders, BOMs, shop-floor tracking, and inventory in one custom system.',
      },
      {
        title: 'Internal Tools',
        desc: 'Asset tracking, vendor onboarding, audit checklists, and custom approval chains.',
      },
      {
        title: 'Client Portals',
        desc: 'Self-service portals for orders, documents, and project updates.',
      },
      {
        title: 'Field Operations',
        desc: 'Mobile data capture, job sheets, and offline-friendly operational apps.',
      },
    ],
    whoItsFor: [
      'Businesses whose process is too unique for standard Zoho apps alone',
      'Manufacturers needing lightweight ERP on Zoho',
      'Companies replacing critical Excel systems',
      'Teams that want custom software without a full engineering department',
    ],
    integrations: [
      'Zoho CRM, Books, Desk, and Analytics',
      'Payment gateways and e-sign tools',
      'WhatsApp and SMS notifications',
      'Custom REST APIs and webhooks',
      'Biometric, IoT, or hardware data feeds where needed',
    ],
    whatWeDo: [
      'Process discovery and app architecture',
      'UI/UX design for forms, dashboards, and portals',
      'Deluge scripting and complex automation',
      'Role-based security and audit trails',
      'Integration with CRM, Books, and third-party APIs',
      'Ongoing enhancements and support',
    ],
    processSteps: [
      {
        title: 'Process Mapping',
        desc: 'We document the real workflow, edge cases, roles, and data model.',
      },
      {
        title: 'Prototype',
        desc: 'Clickable forms and screens are validated with your team before heavy build.',
      },
      {
        title: 'Build & Integrate',
        desc: 'Creator app, Deluge logic, permissions, and Zoho/API integrations are delivered.',
      },
      {
        title: 'Launch & Iterate',
        desc: 'Training, feedback loops, and phased enhancements after go-live.',
      },
    ],
    outcomes: [
      'Software that matches your real process',
      'Less dependency on spreadsheets',
      'Faster ops with fewer handoffs',
      'Scalable apps as you grow',
    ],
    faqs: [
      {
        question: 'When should we use Zoho Creator instead of Zoho CRM?',
        answer:
          'Use CRM for sales and customer lifecycle. Use Creator when you need custom operational apps — production, portals, unique approvals, or industry workflows CRM was never designed to handle.',
      },
      {
        question: 'Can Creator replace a full ERP?',
        answer:
          'For many SMEs and mid-market manufacturers, a well-designed Creator ERP covers production, inventory, and operations at a fraction of traditional ERP cost. We assess fit during discovery.',
      },
      {
        question: 'Do you write Deluge scripts?',
        answer:
          'Yes. Deluge is central to serious Creator work — validations, automations, integrations, and business rules are part of our delivery.',
      },
      {
        question: 'Can external users access the app?',
        answer:
          'Yes. We build customer and vendor portals with secure, role-based access so partners can interact without seeing your internal data.',
      },
    ],
  },
  {
    slug: 'zoho-recruit',
    name: 'Zoho Recruit',
    shortName: 'Recruit',
    tagline: 'Hire faster. Track every candidate. Never lose a great hire again.',
    description:
      'Zoho Recruit ATS setup and customization by SavantX — hiring pipelines, career pages, interview workflows, and recruiter automation for HR teams and staffing agencies.',
    seoTitle: 'Zoho Recruit ATS Setup & Hiring Automation | SavantX',
    seoDescription:
      'Zoho Recruit implementation for HR teams and staffing agencies — applicant tracking, career sites, interview scorecards, automation, and analytics by SavantX.',
    keywords: [
      'Zoho Recruit setup',
      'Zoho ATS',
      'applicant tracking system Zoho',
      'Zoho Recruit partner',
      'hiring software India',
      'recruitment automation',
    ],
    iconUrl: '/images/ZohoRecruit.png',
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80',
    heroImageAlt: 'Hiring managers interviewing a candidate in a modern office',
    secondaryImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    secondaryImageAlt: 'HR team collaborating on recruitment planning',
    category: 'HR & Talent',
    overview:
      'From job posting to offer letter, Zoho Recruit centralizes candidates, interviews, and client/job requisitions. Agencies get client portals and job boards; companies get structured hiring with clear SLAs and reporting.',
    longIntro: [
      'Zoho Recruit is an applicant tracking system (ATS) designed for both corporate HR teams and recruitment agencies. It replaces email threads and spreadsheets with structured pipelines, resume parsing, interview feedback, and hiring analytics.',
      'SavantX configures Zoho Recruit around your hiring model — campus drives, lateral hiring, contract staffing, or executive search. We design stages, scorecards, career pages, and automations so recruiters spend time with candidates, not admin.',
      'When connected to Zoho People or your HR stack, hired candidates transition cleanly into employee onboarding instead of restarting from scratch.',
    ],
    challenges: [
      {
        title: 'Candidates lost in inboxes',
        desc: 'Resumes arrive everywhere. Without an ATS, duplicates and missed follow-ups are inevitable.',
      },
      {
        title: 'Slow interview loops',
        desc: 'Scheduling, feedback collection, and approvals drag out time-to-hire.',
      },
      {
        title: 'No hiring visibility',
        desc: 'Leadership cannot see open roles, source quality, or recruiter performance in one place.',
      },
      {
        title: 'Agency-client chaos',
        desc: 'Staffing firms struggle to share shortlists and status updates securely with clients.',
      },
    ],
    features: [
      {
        title: 'Applicant Tracking',
        desc: 'Kanban pipelines, resume parsing, and complete candidate history in one place.',
      },
      {
        title: 'Career Site & Job Boards',
        desc: 'Branded career pages and multi-channel job distribution to attract better applicants.',
      },
      {
        title: 'Interview Scheduling',
        desc: 'Automated invites, feedback forms, and interviewer scorecards that standardize decisions.',
      },
      {
        title: 'Agency & Client Portals',
        desc: 'Share shortlists and status updates with hiring managers securely.',
      },
      {
        title: 'Automation & Alerts',
        desc: 'Stage-based emails, SLA reminders, and recruiter task queues that keep hiring moving.',
      },
      {
        title: 'Recruitment Analytics',
        desc: 'Time-to-hire, source quality, and recruiter performance dashboards.',
      },
    ],
    useCases: [
      {
        title: 'In-House HR',
        desc: 'Structured hiring for growing teams with clear approval chains and scorecards.',
      },
      {
        title: 'Staffing Agencies',
        desc: 'Multi-client job management, submissions, and placement tracking at scale.',
      },
      {
        title: 'High-Volume Hiring',
        desc: 'Campus drives and bulk screening with automated candidate communication.',
      },
      {
        title: 'Specialized Roles',
        desc: 'Technical or niche hiring with custom evaluation stages and panels.',
      },
    ],
    whoItsFor: [
      'HR teams replacing Excel or email-based hiring',
      'Staffing and recruitment agencies',
      'Companies scaling headcount quickly',
      'Organizations that need audit-friendly hiring records',
    ],
    integrations: [
      'Zoho People for employee onboarding handoff',
      'Job boards and career page embeds',
      'Email and calendar for interview scheduling',
      'Zoho Analytics for advanced hiring reports',
      'Assessment and background-check tools via API',
    ],
    whatWeDo: [
      'Recruit pipeline design for your hiring model',
      'Career page and job board setup',
      'Interview scorecards and feedback workflows',
      'Email/SMS automation for candidates',
      'Integration with Zoho People / CRM / email',
      'Recruiter training and adoption support',
    ],
    processSteps: [
      {
        title: 'Hiring Audit',
        desc: 'We map roles, stages, stakeholders, and current bottlenecks in your hiring funnel.',
      },
      {
        title: 'ATS Design',
        desc: 'Pipelines, fields, portals, and communication templates are designed for your model.',
      },
      {
        title: 'Configure & Launch',
        desc: 'Zoho Recruit is configured, career pages go live, and recruiters are trained.',
      },
      {
        title: 'Optimize',
        desc: 'We refine stages and automation based on real hiring metrics after go-live.',
      },
    ],
    outcomes: [
      'Shorter time-to-hire',
      'Better candidate experience',
      'Clear hiring visibility for leadership',
      'Fewer lost or duplicate candidates',
    ],
    faqs: [
      {
        question: 'Is Zoho Recruit for agencies or corporate HR?',
        answer:
          'Both. Zoho Recruit supports corporate hiring and staffing agency workflows, including client portals and job/requisition management.',
      },
      {
        question: 'Can we build a branded career page?',
        answer:
          'Yes. We set up career pages that match your brand and feed applications directly into Zoho Recruit pipelines.',
      },
      {
        question: 'Can interview feedback be standardized?',
        answer:
          'Yes. We create scorecards and structured feedback forms so hiring decisions are consistent and documented.',
      },
      {
        question: 'Does Recruit connect to Zoho People?',
        answer:
          'Yes. Hired candidates can transition into Zoho People for onboarding, reducing duplicate data entry.',
      },
    ],
  },
  {
    slug: 'zoho-analytics',
    name: 'Zoho Analytics',
    shortName: 'Analytics',
    tagline: 'See your whole business in one dashboard — not ten spreadsheets.',
    description:
      'Zoho Analytics BI dashboards and data blending by SavantX — connect CRM, Books, Projects, and Desk into live executive and team reports.',
    seoTitle: 'Zoho Analytics Dashboards & BI Implementation | SavantX',
    seoDescription:
      'Zoho Analytics setup and dashboard design by SavantX. Cross-app BI for CRM, Books, Projects, and Desk — executive dashboards, KPI reports, and self-service analytics.',
    keywords: [
      'Zoho Analytics',
      'Zoho BI dashboards',
      'Zoho Analytics partner',
      'business intelligence Zoho',
      'CRM analytics dashboard',
      'Zoho reporting',
    ],
    iconUrl: '/images/ZohoAnalytics.png',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
    heroImageAlt: 'Business intelligence dashboards with charts and KPIs',
    secondaryImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
    secondaryImageAlt: 'Team reviewing business metrics on a large display',
    category: 'Business Intelligence',
    overview:
      'Zoho Analytics blends data from Zoho apps and outside sources into interactive reports. Cross-app dashboards can show pipeline, revenue, delivery, and support health together — the CEO view most teams never get.',
    longIntro: [
      'Zoho Analytics is Zoho’s self-service business intelligence platform. It connects to Zoho CRM, Books, Projects, Desk, Inventory, and external sources so you can build live dashboards instead of exporting CSVs every Monday.',
      'SavantX helps leadership teams define the KPIs that matter, then designs dashboards that answer those questions at a glance. We blend data across apps, apply the right formulas, and set sharing rules so each role sees the right slice of truth.',
      'The result is faster weekly reviews, fewer “what’s the number?” debates, and a culture of decisions based on live data — not outdated spreadsheets.',
    ],
    challenges: [
      {
        title: 'Reports that take days to prepare',
        desc: 'Analysts spend more time exporting and stitching data than interpreting it.',
      },
      {
        title: 'Conflicting numbers across teams',
        desc: 'Sales, finance, and ops each have their own spreadsheet version of reality.',
      },
      {
        title: 'No cross-app visibility',
        desc: 'Pipeline looks healthy in CRM while cash and delivery tell a different story.',
      },
      {
        title: 'Dashboards nobody trusts',
        desc: 'Pretty charts with wrong joins or stale data destroy confidence in BI.',
      },
    ],
    features: [
      {
        title: 'Cross-App Dashboards',
        desc: 'Combine CRM, Books, Projects, and Desk into one leadership view.',
      },
      {
        title: 'Visual Reports',
        desc: 'Charts, pivots, KPI widgets, and geo maps that non-technical users can explore.',
      },
      {
        title: 'Data Blending',
        desc: 'Join Zoho data with Excel, SQL, Google Sheets, and cloud sources.',
      },
      {
        title: 'AI-Assisted Insights',
        desc: 'Ask questions in plain language and surface anomalies automatically.',
      },
      {
        title: 'Scheduled Delivery',
        desc: 'Email or Slack reports on a cadence your team actually uses.',
      },
      {
        title: 'Row-Level Security',
        desc: 'Managers see their slice; leadership sees the full picture.',
      },
    ],
    useCases: [
      {
        title: 'Founder / CEO Dashboards',
        desc: 'Revenue, pipeline, cash, and delivery health in a single screen.',
      },
      {
        title: 'Sales Ops',
        desc: 'Conversion funnels, win rates, and forecast accuracy by segment.',
      },
      {
        title: 'Operations',
        desc: 'SLA, utilization, inventory turns, and project profitability.',
      },
      {
        title: 'Board & Investor Reporting',
        desc: 'Clean, repeatable KPI packs without last-minute spreadsheet panic.',
      },
    ],
    whoItsFor: [
      'Leadership teams drowning in manual reports',
      'Companies already on Zoho that lack a single source of truth',
      'Ops and finance leaders who need cross-department KPIs',
      'Growing businesses preparing for data-driven management',
    ],
    integrations: [
      'Native connectors to Zoho CRM, Books, Desk, Projects, Inventory',
      'Google Sheets, Excel, and CSV imports',
      'SQL databases and cloud warehouses',
      'Scheduled email / Slack distribution',
      'Embedded dashboards in portals where needed',
    ],
    whatWeDo: [
      'KPI definition workshops with stakeholders',
      'Data connectors and blending setup',
      'Executive and team-level dashboard design',
      'Formula columns, query tables, and data prep',
      'Access control and sharing strategy',
      'Training so teams can self-serve insights',
    ],
    processSteps: [
      {
        title: 'KPI Workshop',
        desc: 'We define the questions leadership and teams need answered weekly.',
      },
      {
        title: 'Data Model',
        desc: 'Connectors, joins, and metrics are designed for accuracy and reuse.',
      },
      {
        title: 'Dashboard Build',
        desc: 'Executive and departmental dashboards are built and validated.',
      },
      {
        title: 'Enablement',
        desc: 'Sharing rules, schedules, and training make analytics self-serve.',
      },
    ],
    outcomes: [
      'Decisions based on live data',
      'Less manual report building',
      'Shared truth across departments',
      'Faster weekly business reviews',
    ],
    faqs: [
      {
        question: 'Can Zoho Analytics combine CRM and Books data?',
        answer:
          'Yes. Cross-app reporting is one of its strongest capabilities — for example pipeline from CRM with collections from Books on one dashboard.',
      },
      {
        question: 'Do we need a data analyst to use it?',
        answer:
          'Not day to day. We design dashboards for business users and train your team. Advanced modeling can be handled by SavantX as needed.',
      },
      {
        question: 'Can we import data from outside Zoho?',
        answer:
          'Yes. We connect Google Sheets, Excel, databases, and other sources so Zoho is not your only data input.',
      },
      {
        question: 'How do you keep dashboards accurate?',
        answer:
          'We define metric logic clearly, validate joins with your team, and set refresh/sharing practices so numbers stay trustworthy.',
      },
    ],
  },
  {
    slug: 'zoho-desk',
    name: 'Zoho Desk',
    shortName: 'Desk',
    tagline: 'Support that feels personal — even when ticket volume spikes.',
    description:
      'Zoho Desk helpdesk setup by SavantX — multi-channel tickets, SLAs, knowledge base, blueprints, and CRM-linked customer support for growing teams.',
    seoTitle: 'Zoho Desk Setup, SLA & Helpdesk Automation | SavantX',
    seoDescription:
      'Zoho Desk implementation and customization — multi-channel support, SLA rules, knowledge base, blueprints, and CRM integration by SavantX Zoho partners.',
    keywords: [
      'Zoho Desk setup',
      'Zoho helpdesk',
      'customer support software Zoho',
      'Zoho Desk SLA',
      'Zoho Desk partner',
      'ticketing system Zoho',
    ],
    iconUrl: '/images/ZohoDesk.png',
    heroImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80',
    heroImageAlt: 'Customer support agent working on help desk tickets',
    secondaryImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
    secondaryImageAlt: 'Support team collaborating in a modern office',
    category: 'Customer Support',
    overview:
      'Email, chat, social, and phone tickets land in one inbox. Agents see CRM history, SLAs keep response times honest, and a knowledge base deflects repetitive questions — so support scales without burning out the team.',
    longIntro: [
      'Zoho Desk is a multi-channel customer service platform for teams that have outgrown shared inboxes. It organizes tickets, enforces SLAs, and gives agents the customer context they need from Zoho CRM.',
      'SavantX designs Desk around your support model — product support, order issues, VIP accounts, or multi-department queues. We configure assignment rules, blueprints, macros, and a knowledge base so first-response times drop and CSAT rises.',
      'When support is connected to CRM and SalesIQ, agents stop asking customers to repeat themselves — and managers finally see which issues are costing retention.',
    ],
    challenges: [
      {
        title: 'Shared inbox chaos',
        desc: 'Gmail or Outlook threads cannot enforce ownership, SLAs, or reporting.',
      },
      {
        title: 'Agents without context',
        desc: 'Support replies blindly when CRM purchase and account history is invisible.',
      },
      {
        title: 'Repeat questions flooding the queue',
        desc: 'Without a knowledge base, agents answer the same issues every day.',
      },
      {
        title: 'No SLA accountability',
        desc: 'Tickets age quietly until customers escalate on social media or churn.',
      },
    ],
    features: [
      {
        title: 'Multi-Channel Inbox',
        desc: 'Email, web forms, chat, social, and telephony in a unified queue.',
      },
      {
        title: 'SLA & Assignment Rules',
        desc: 'Priority routing, round-robin, and escalation paths that never drop a ticket.',
      },
      {
        title: 'Knowledge Base',
        desc: 'Help articles and community answers that reduce repeat tickets.',
      },
      {
        title: 'CRM Context',
        desc: 'Agents see deals, invoices, and account history while responding.',
      },
      {
        title: 'Blueprints & Automation',
        desc: 'Guided ticket processes for refunds, onboarding, and escalations.',
      },
      {
        title: 'Happiness Ratings',
        desc: 'CSAT surveys and agent performance analytics built in.',
      },
    ],
    useCases: [
      {
        title: 'SaaS Support',
        desc: 'Product tickets with SLAs, departments, and technical escalation paths.',
      },
      {
        title: 'E-commerce',
        desc: 'Order, shipping, and return workflows tied to customer accounts.',
      },
      {
        title: 'B2B Services',
        desc: 'Account-based support with dedicated queues and VIP handling.',
      },
      {
        title: 'Internal IT Helpdesk',
        desc: 'Employee tickets, asset-related issues, and internal SLAs.',
      },
    ],
    whoItsFor: [
      'Teams drowning in shared support inboxes',
      'Companies that need measurable SLAs and CSAT',
      'Businesses already on Zoho CRM that want support context',
      'Support leaders scaling headcount without losing quality',
    ],
    integrations: [
      'Zoho CRM for customer 360° context',
      'Zoho SalesIQ for chat-to-ticket handoff',
      'Telephony and email channels',
      'Zoho Analytics for support BI',
      'Knowledge base and community portals',
    ],
    whatWeDo: [
      'Department, queue, and SLA design',
      'Ticket fields, layouts, and blueprints',
      'Knowledge base structure and templates',
      'CRM / SalesIQ / telephony integrations',
      'Agent macros, canned replies, and training',
      'CSAT and support analytics setup',
    ],
    processSteps: [
      {
        title: 'Support Audit',
        desc: 'We review channels, volumes, pain points, and current response patterns.',
      },
      {
        title: 'Desk Design',
        desc: 'Departments, SLAs, blueprints, and KB structure are planned with your leads.',
      },
      {
        title: 'Configure',
        desc: 'Zoho Desk is implemented, integrated with CRM, and tested with real tickets.',
      },
      {
        title: 'Coach Agents',
        desc: 'Macros, workflows, and best practices are trained for day-one adoption.',
      },
    ],
    outcomes: [
      'Faster first response times',
      'Higher CSAT scores',
      'Fewer lost or duplicate tickets',
      'Support that scales with growth',
    ],
    faqs: [
      {
        question: 'Can Zoho Desk replace our shared Gmail inbox?',
        answer:
          'Yes. Desk gives you ownership, SLAs, reporting, and automation that shared inboxes cannot provide.',
      },
      {
        question: 'Will agents see CRM history?',
        answer:
          'When integrated with Zoho CRM, agents can see account and deal context while handling tickets.',
      },
      {
        question: 'Can we set different SLAs for VIP customers?',
        answer:
          'Yes. We configure priority rules, departments, and SLA policies based on customer segment or issue type.',
      },
      {
        question: 'Do you help build the knowledge base?',
        answer:
          'Yes. We structure categories, templates, and starter articles so customers can self-serve common questions.',
      },
    ],
  },
  {
    slug: 'zoho-salesiq',
    name: 'Zoho SalesIQ',
    shortName: 'SalesIQ',
    tagline: 'Know who’s on your website — and talk to them before they leave.',
    description:
      'Zoho SalesIQ live chat, visitor tracking, and chatbot setup by SavantX — convert website traffic into CRM-ready leads with proactive engagement.',
    seoTitle: 'Zoho SalesIQ Live Chat & Chatbot Setup | SavantX',
    seoDescription:
      'Zoho SalesIQ implementation — live chat, visitor intelligence, codeless chatbots, and CRM lead sync. Convert more website visitors with SavantX.',
    keywords: [
      'Zoho SalesIQ',
      'Zoho live chat',
      'website chatbot Zoho',
      'SalesIQ CRM integration',
      'visitor tracking Zoho',
      'Zoho SalesIQ partner',
    ],
    iconUrl: '/images/ZohoSalesiq.png',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80',
    heroImageAlt: 'Website analytics and live chat engagement on a laptop',
    secondaryImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=80',
    secondaryImageAlt: 'Sales professional engaging customers through digital channels',
    category: 'Website Engagement',
    overview:
      'SalesIQ shows who is browsing, which pages they view, and how engaged they are. Live chat and AI bots convert that attention into conversations — and CRM-ready leads — while visitors are still on your site.',
    longIntro: [
      'Zoho SalesIQ is Zoho’s website engagement platform — combining live chat, visitor tracking, lead scoring signals, and chatbot automation. It helps sales and support teams engage high-intent visitors in the moment, not hours later via a contact form.',
      'SavantX installs and brands SalesIQ, designs chat routing, builds qualification bots, and syncs conversations into Zoho CRM so every meaningful chat becomes a tracked lead with an owner.',
      'For businesses investing in ads and SEO, SalesIQ is often the missing conversion layer between traffic and pipeline.',
    ],
    challenges: [
      {
        title: 'Traffic without conversations',
        desc: 'Visitors browse pricing and leave. Without chat, you never know who they were.',
      },
      {
        title: 'Slow response to inbound interest',
        desc: 'Form fills wait for business hours while competitors reply instantly.',
      },
      {
        title: 'Chat that doesn’t reach CRM',
        desc: 'Conversations die in a widget instead of becoming owned leads.',
      },
      {
        title: 'Support and sales colliding',
        desc: 'Without routing rules, the wrong team handles the wrong chats.',
      },
    ],
    features: [
      {
        title: 'Live Visitor Tracking',
        desc: 'See company, location, source, and page path for active visitors.',
      },
      {
        title: 'Live Chat & Mobile SDK',
        desc: 'Human chat for sales and support with mobile app options for agents.',
      },
      {
        title: 'Codeless Chatbots',
        desc: 'Qualify leads, book demos, and answer FAQs 24/7 without coding.',
      },
      {
        title: 'CRM Lead Sync',
        desc: 'Push chats and visitor data into Zoho CRM as leads or contacts.',
      },
      {
        title: 'Proactive Triggers',
        desc: 'Auto-open chat based on time on page, exit intent, or campaign source.',
      },
      {
        title: 'Engagement Analytics',
        desc: 'Measure chat conversion, bot performance, and agent responsiveness.',
      },
    ],
    useCases: [
      {
        title: 'Inbound Sales',
        desc: 'Engage high-intent visitors and book demos in real time.',
      },
      {
        title: 'Website Support',
        desc: 'Deflect common questions with bots, escalate complex ones to agents.',
      },
      {
        title: 'Campaign Landing Pages',
        desc: 'Capture and qualify ad traffic before it bounces.',
      },
      {
        title: 'Product-Led Growth',
        desc: 'Guide trial users and answer activation questions inside the journey.',
      },
    ],
    whoItsFor: [
      'Businesses with website traffic that under-converts',
      'Sales teams that want live inbound conversations',
      'Support teams deflecting repetitive website questions',
      'Companies running paid ads that need better lead capture',
    ],
    integrations: [
      'Zoho CRM for lead and contact sync',
      'Zoho Desk for chat-to-ticket escalation',
      'Website CMS embeds and mobile apps',
      'Calendar booking for demos',
      'Marketing attribution and UTM tracking',
    ],
    whatWeDo: [
      'SalesIQ installation and brand styling',
      'Chat routing rules for sales vs support',
      'Bot flows for lead qualification and booking',
      'CRM field mapping and lead ownership rules',
      'Proactive triggers and targeting rules',
      'Agent training and performance dashboards',
    ],
    processSteps: [
      {
        title: 'Conversion Audit',
        desc: 'We review your site journey, traffic sources, and current lead capture gaps.',
      },
      {
        title: 'Engagement Design',
        desc: 'Chat widgets, bots, triggers, and routing rules are designed for intent.',
      },
      {
        title: 'Install & Connect',
        desc: 'SalesIQ goes live on your site and syncs with Zoho CRM.',
      },
      {
        title: 'Tune Performance',
        desc: 'We optimize bot scripts and triggers based on real conversation data.',
      },
    ],
    outcomes: [
      'More website-to-lead conversions',
      'Faster response to hot traffic',
      'Qualified chats in CRM automatically',
      '24/7 engagement without extra headcount',
    ],
    faqs: [
      {
        question: 'Does SalesIQ work with any website?',
        answer:
          'Yes. We embed SalesIQ on most websites and landing pages, including custom-built and CMS sites.',
      },
      {
        question: 'Can chatbots book demos automatically?',
        answer:
          'Yes. We design qualification bots that capture details and route or book meetings based on your rules.',
      },
      {
        question: 'Will chats create Zoho CRM leads?',
        answer:
          'That is a core part of our setup — chats and visitor data sync into CRM with clear ownership.',
      },
      {
        question: 'Can sales and support use different queues?',
        answer:
          'Yes. Routing rules send sales-intent chats to sales and support questions to the right desk team.',
      },
    ],
  },
  {
    slug: 'zoho-campaigns',
    name: 'Zoho Campaigns',
    shortName: 'Campaigns',
    tagline: 'Email that nurtures leads — not spam that gets ignored.',
    description:
      'Zoho Campaigns email marketing setup by SavantX — CRM-synced lists, drip journeys, templates, and deliverability best practices that grow pipeline.',
    seoTitle: 'Zoho Campaigns Email Marketing Setup & Automation | SavantX',
    seoDescription:
      'Zoho Campaigns implementation — email templates, CRM segmentation, drip automation, A/B testing, and deliverability setup by SavantX.',
    keywords: [
      'Zoho Campaigns',
      'Zoho email marketing',
      'Zoho Campaigns automation',
      'CRM email nurture',
      'Zoho drip campaigns',
      'Zoho Campaigns partner',
    ],
    iconUrl: '/images/ZohoCampains.png',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80',
    heroImageAlt: 'Marketer reviewing email campaign performance metrics',
    secondaryImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&q=80',
    secondaryImageAlt: 'Email marketing strategy planning on a desk',
    category: 'Email Marketing',
    overview:
      'Create newsletters, promotional blasts, and automated drip sequences that stay in sync with CRM stages. Segmentation, A/B testing, and deliverability tools help you reach the right inbox with the right message.',
    longIntro: [
      'Zoho Campaigns is Zoho’s email marketing platform, built to work tightly with Zoho CRM. That means your lists, tags, and deal stages can drive who receives which message — without exporting CSVs between tools.',
      'SavantX sets up Campaigns as a revenue system: clean lists, brand templates, consent-friendly workflows, and drip journeys that move leads from awareness to sales-ready. We also help with deliverability basics so your emails actually reach the inbox.',
      'Whether you need a weekly newsletter or a multi-step nurture for inbound leads, we make Campaigns a reliable part of your go-to-market motion.',
    ],
    challenges: [
      {
        title: 'One-size-fits-all blasts',
        desc: 'Sending the same email to everyone destroys engagement and trust.',
      },
      {
        title: 'Marketing and sales misalignment',
        desc: 'Leads get nurtured in one tool while CRM stages live somewhere else.',
      },
      {
        title: 'Poor deliverability',
        desc: 'Without authentication and list hygiene, even good content lands in spam.',
      },
      {
        title: 'No nurture after lead capture',
        desc: 'Inbound leads go cold because nobody follows up consistently.',
      },
    ],
    features: [
      {
        title: 'CRM-Synced Lists',
        desc: 'Segment by deal stage, tags, industry, or custom CRM fields.',
      },
      {
        title: 'Drag-and-Drop Emails',
        desc: 'Brand-ready templates that look sharp on every device.',
      },
      {
        title: 'Drip Automation',
        desc: 'Welcome series, nurture paths, and re-engagement journeys.',
      },
      {
        title: 'A/B Testing',
        desc: 'Test subject lines and content to improve open and click rates.',
      },
      {
        title: 'Deliverability Tools',
        desc: 'Authentication, bounce handling, and list hygiene best practices.',
      },
      {
        title: 'Campaign Analytics',
        desc: 'Opens, clicks, unsubscribes, and performance trends you can act on.',
      },
    ],
    useCases: [
      {
        title: 'Lead Nurture',
        desc: 'Warm cold leads with educational sequences until they are sales-ready.',
      },
      {
        title: 'Product Launches',
        desc: 'Coordinated announcement and follow-up campaigns across segments.',
      },
      {
        title: 'Customer Retention',
        desc: 'Onboarding, upsell, and win-back emails tied to CRM lifecycle.',
      },
      {
        title: 'Event & Webinar Promotion',
        desc: 'Invite, remind, and follow up with attendees automatically.',
      },
    ],
    whoItsFor: [
      'Teams with Zoho CRM that need proper email nurture',
      'Marketers tired of disconnected email tools',
      'Businesses launching products or content-led inbound',
      'Companies that want sales-ready leads, not just open rates',
    ],
    integrations: [
      'Zoho CRM sync for contacts and segments',
      'Landing pages and forms',
      'Zoho Analytics for deeper campaign reporting',
      'Consent and unsubscribe compliance flows',
      'Sales handoff when leads become MQL/SQL',
    ],
    whatWeDo: [
      'List architecture and CRM sync strategy',
      'Brand email templates and modular designs',
      'Drip journey mapping by funnel stage',
      'Compliance, consent, and unsubscribe setup',
      'A/B test plans and reporting cadence',
      'Handoff rules when a lead becomes sales-ready',
    ],
    processSteps: [
      {
        title: 'Audience & Offer Map',
        desc: 'We define segments, goals, and the journeys that should exist.',
      },
      {
        title: 'Template & Sync Setup',
        desc: 'Brand templates, CRM sync, and compliance settings are configured.',
      },
      {
        title: 'Automations Live',
        desc: 'Drip campaigns and newsletters launch with tracking in place.',
      },
      {
        title: 'Optimize',
        desc: 'We improve subject lines, timing, and segments from real performance data.',
      },
    ],
    outcomes: [
      'Higher open and click engagement',
      'More sales-ready leads from nurture',
      'Consistent brand communication',
      'Marketing and sales finally aligned',
    ],
    faqs: [
      {
        question: 'Does Zoho Campaigns sync with Zoho CRM?',
        answer:
          'Yes. Syncing contacts, tags, and stages with CRM is one of the main reasons teams choose Campaigns — and we configure that carefully.',
      },
      {
        question: 'Can you build drip campaigns for us?',
        answer:
          'Yes. We map journeys (welcome, nurture, re-engagement) and implement them with the right triggers and content structure.',
      },
      {
        question: 'Will you help with email deliverability?',
        answer:
          'We set up authentication basics, list hygiene practices, and sending workflows that improve inbox placement over time.',
      },
      {
        question: 'Can sales get notified when someone engages?',
        answer:
          'Yes. We can design handoff rules so high-intent engagement creates tasks or updates in Zoho CRM.',
      },
    ],
  },
  {
    slug: 'zoho-inventory',
    name: 'Zoho Inventory',
    shortName: 'Inventory',
    tagline: 'Know what’s in stock, what’s selling, and what to reorder — instantly.',
    description:
      'Zoho Inventory setup by SavantX — multi-warehouse stock, order management, purchase workflows, and Books sync for accurate operations and finance.',
    seoTitle: 'Zoho Inventory Setup & Warehouse Management | SavantX',
    seoDescription:
      'Zoho Inventory implementation — stock control, warehouses, sales/purchase orders, channel sync, and Zoho Books integration by SavantX.',
    keywords: [
      'Zoho Inventory',
      'Zoho Inventory setup',
      'warehouse management Zoho',
      'Zoho stock management',
      'Zoho Inventory Books',
      'inventory software India',
    ],
    iconUrl: '/images/ZohoInventary.png',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80',
    heroImageAlt: 'Warehouse inventory shelves with organized stock',
    secondaryImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
    secondaryImageAlt: 'Logistics and order fulfillment operations',
    category: 'Inventory & Orders',
    overview:
      'Track items across warehouses, fulfill sales orders, manage purchase orders, and sync stock with online channels. Paired with Zoho Books, inventory movements stay financially accurate.',
    longIntro: [
      'Zoho Inventory is Zoho’s inventory and order management platform for product businesses that need real-time stock visibility across warehouses and sales channels. It covers items, composite kits, purchase orders, sales orders, packing, and shipping workflows.',
      'SavantX configures Inventory around your SKUs, warehouses, and fulfillment process — then connects it to Zoho Books so stock movements and invoices stay financially aligned. No more “available online” counts that don’t match the warehouse.',
      'Whether you sell B2B, D2C, or both, we help you run operations from one Zoho-connected system instead of disconnected sheets and marketplaces.',
    ],
    challenges: [
      {
        title: 'Stockouts and overstocks',
        desc: 'Without reorder points and live quantities, you lose sales or tie up cash in dead stock.',
      },
      {
        title: 'Channel quantity mismatches',
        desc: 'Marketplace and website stock counts drift from warehouse reality.',
      },
      {
        title: 'Finance and ops disagree',
        desc: 'Inventory valuation and invoices don’t match when systems are separate.',
      },
      {
        title: 'Manual order processing',
        desc: 'Sales orders, packing, and purchasing live in chats and spreadsheets.',
      },
    ],
    features: [
      {
        title: 'Multi-Warehouse Stock',
        desc: 'Real-time quantities, transfers, and location-level visibility.',
      },
      {
        title: 'Order Management',
        desc: 'Sales orders, packing slips, shipments, and backorder handling.',
      },
      {
        title: 'Purchase Workflows',
        desc: 'POs, vendor management, and reorder points that prevent stockouts.',
      },
      {
        title: 'Composite Items & Kits',
        desc: 'Assemblies and bundles with component-level stock deduction.',
      },
      {
        title: 'Channel Integrations',
        desc: 'Sync listings and stock with popular marketplaces and stores.',
      },
      {
        title: 'Books Sync',
        desc: 'Invoices, COGS, and inventory valuation stay in financial lockstep.',
      },
    ],
    useCases: [
      {
        title: 'Distributors',
        desc: 'Multi-location stock with purchase and sales order control.',
      },
      {
        title: 'E-commerce Brands',
        desc: 'Channel sync, pick-pack-ship, and accurate available-to-sell counts.',
      },
      {
        title: 'Light Manufacturing',
        desc: 'Kits, assemblies, and component tracking without a full ERP yet.',
      },
      {
        title: 'Retail + Wholesale Hybrids',
        desc: 'One inventory system serving counter sales and B2B orders.',
      },
    ],
    whoItsFor: [
      'Product businesses outgrowing spreadsheet inventory',
      'Sellers managing multiple warehouses or channels',
      'Companies that need Inventory + Books accuracy',
      'Ops teams tired of stock surprises',
    ],
    integrations: [
      'Zoho Books for accounting and valuation',
      'Zoho CRM for B2B order pipelines',
      'Marketplaces and online stores',
      'Shipping and logistics tools',
      'Barcode / serial / batch tracking where needed',
    ],
    whatWeDo: [
      'Item master, units, and warehouse structure',
      'Sales/purchase order process design',
      'Reorder rules and stock alerts',
      'Books and CRM integrations',
      'Barcode / serial / batch tracking where needed',
      'Ops team training and SOPs',
    ],
    processSteps: [
      {
        title: 'Ops Discovery',
        desc: 'We map SKUs, warehouses, channels, and current fulfillment pain points.',
      },
      {
        title: 'Inventory Design',
        desc: 'Item masters, warehouses, order flows, and reorder rules are designed.',
      },
      {
        title: 'Implement & Sync',
        desc: 'Zoho Inventory goes live with Books/channel connections tested.',
      },
      {
        title: 'Stabilize Fulfillment',
        desc: 'SOPs and training make day-to-day stock and orders reliable.',
      },
    ],
    outcomes: [
      'Fewer stockouts and overstocks',
      'Faster order fulfillment',
      'Accurate inventory valuation',
      'Ops and finance on the same numbers',
    ],
    faqs: [
      {
        question: 'Does Zoho Inventory work with Zoho Books?',
        answer:
          'Yes. We sync Inventory with Books so stock movements, invoices, and valuation stay aligned for finance and operations.',
      },
      {
        question: 'Can we manage multiple warehouses?',
        answer:
          'Yes. Multi-warehouse stock, transfers, and location-level quantities are a core part of Inventory setups we deliver.',
      },
      {
        question: 'Can composite items / kits be handled?',
        answer:
          'Yes. We configure assemblies and kits so component stock deducts correctly when finished goods are sold or built.',
      },
      {
        question: 'Do you help with marketplace stock sync?',
        answer:
          'Where supported, we connect channels and design processes so available-to-sell quantities stay trustworthy.',
      },
    ],
  },
  {
    slug: 'zoho-projects',
    name: 'Zoho Projects',
    shortName: 'Projects',
    tagline: 'Deliver on time — with tasks, timelines, and accountability in one place.',
    description:
      'Zoho Projects setup by SavantX — project templates, Gantt plans, timesheets, and CRM/Books links so delivery stays on schedule and profitable.',
    seoTitle: 'Zoho Projects Setup, Templates & Timesheets | SavantX',
    seoDescription:
      'Zoho Projects implementation for agencies and delivery teams — templates, Gantt, task workflows, timesheets, and CRM/Books integration by SavantX.',
    keywords: [
      'Zoho Projects',
      'Zoho Projects setup',
      'project management Zoho',
      'Zoho timesheets',
      'Zoho Projects CRM',
      'Zoho project templates',
    ],
    iconUrl: '/images/ZohoProjects.png',
    heroImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1400&q=80',
    heroImageAlt: 'Project team planning tasks on a kanban board',
    secondaryImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80',
    secondaryImageAlt: 'Project timeline and Gantt-style planning session',
    category: 'Project Management',
    overview:
      'Plan projects with milestones, task lists, dependencies, and Gantt charts. Track time, collaborate in context, and connect delivery to CRM deals and Books billing for end-to-end visibility.',
    longIntro: [
      'Zoho Projects is Zoho’s project and work management platform for teams that need structure beyond chat to-dos. It supports milestones, task dependencies, Gantt charts, timesheets, documents, and collaboration feeds.',
      'SavantX implements Projects as a delivery operating system — with templates for repeatable engagements, clear statuses, timesheets for profitability, and handoffs from Zoho CRM when deals are won.',
      'Agencies, implementation teams, and internal PMO groups use it to keep scope, schedule, and accountability visible without drowning in status-meeting noise.',
    ],
    challenges: [
      {
        title: 'Projects living in chat and sheets',
        desc: 'Deadlines slip because ownership and dependencies are invisible.',
      },
      {
        title: 'No link from sales to delivery',
        desc: 'Won deals in CRM don’t become structured project plans automatically.',
      },
      {
        title: 'Unbillable time leakage',
        desc: 'Without timesheets, you cannot see which projects are profitable.',
      },
      {
        title: 'Inconsistent delivery quality',
        desc: 'Every project starts from scratch instead of a proven template.',
      },
    ],
    features: [
      {
        title: 'Gantt & Dependencies',
        desc: 'Visual timelines with task links so delays surface early.',
      },
      {
        title: 'Task Workflows',
        desc: 'Statuses, owners, checklists, and recurring work patterns.',
      },
      {
        title: 'Timesheets',
        desc: 'Billable hours that feed reporting — and Books when needed.',
      },
      {
        title: 'Project Templates',
        desc: 'Clone proven project structures for every new client engagement.',
      },
      {
        title: 'Collaboration',
        desc: 'Feeds, documents, forums, and @mentions inside the project.',
      },
      {
        title: 'CRM & Books Links',
        desc: 'Start projects from won deals and bill from tracked work.',
      },
    ],
    useCases: [
      {
        title: 'Agencies & Consultancies',
        desc: 'Client projects with milestones, time tracking, and profitability.',
      },
      {
        title: 'Implementation Teams',
        desc: 'Zoho / software rollouts with clear task ownership and timelines.',
      },
      {
        title: 'Internal Initiatives',
        desc: 'Cross-functional programs with status reporting for leadership.',
      },
      {
        title: 'Product Delivery',
        desc: 'Feature workstreams with dependencies across design and engineering.',
      },
    ],
    whoItsFor: [
      'Agencies and service firms managing client delivery',
      'Teams that need timesheets and project profitability',
      'Companies connecting CRM wins to project kickoff',
      'PMs tired of status chaos across tools',
    ],
    integrations: [
      'Zoho CRM for deal-to-project handoff',
      'Zoho Books for billing from time/milestones',
      'Zoho Analytics for delivery KPIs',
      'Zoho Sprints where agile boards are needed',
      'Document and communication tools in the Zoho suite',
    ],
    whatWeDo: [
      'Project templates for your delivery methodology',
      'Task layouts, statuses, and automation rules',
      'Timesheet and billing configuration',
      'CRM deal → project handoff automation',
      'Client portal / restricted access setup',
      'PM and team onboarding',
    ],
    processSteps: [
      {
        title: 'Delivery Audit',
        desc: 'We review how projects start, run, and close today — including billing.',
      },
      {
        title: 'Template Design',
        desc: 'Milestones, task lists, statuses, and roles are standardized.',
      },
      {
        title: 'Configure Projects',
        desc: 'Zoho Projects is set up with CRM/Books links and timesheets.',
      },
      {
        title: 'Roll Out',
        desc: 'PMs and teams are trained; we refine templates after the first projects.',
      },
    ],
    outcomes: [
      'Fewer missed deadlines',
      'Clear ownership on every task',
      'Better project profitability',
      'Clients who always know the status',
    ],
    faqs: [
      {
        question: 'Can Zoho Projects start automatically from a CRM deal?',
        answer:
          'Yes. We set up handoff automation so won deals can create projects from templates with the right structure.',
      },
      {
        question: 'Do you set up timesheets for billing?',
        answer:
          'Yes. Timesheets can support internal utilization tracking and, where needed, billing workflows with Zoho Books.',
      },
      {
        question: 'Can clients see project progress?',
        answer:
          'We can configure restricted client access or portals so customers see status without seeing internal notes.',
      },
      {
        question: 'Is Zoho Projects good for agencies?',
        answer:
          'Yes — especially with templates, milestones, and time tracking. We tailor it to retainer and project-based agency models.',
      },
    ],
  },
];

export function getZohoApp(slug: string): ZohoApp | undefined {
  return zohoApps.find((app) => app.slug === slug);
}

export function getAllZohoAppSlugs(): string[] {
  return zohoApps.map((app) => app.slug);
}
