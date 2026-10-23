import tx from '@/content/text/components/zoho/landing/data.json';
import forms from '@/content/forms.json';
/**
 * Content for the Zoho landing page (/expertise/zoho-integrations).
 *
 * Prices and plan names come from SavantX. Membership terms describe how the plan works
 * without committing to numbers that have not been published: development capacity and
 * response times are confirmed in each client's membership agreement. Package deliverables
 * are typical scope, not a quote. Review with the business before changing any of it.
 */

/** Values sent with enquiries; each `label` is what the visitor sees in the form. */
const SERVICE_IDS = [
  'consultation',
  'membership',
  'crm-quickstart',
  'creator-mini-app',
  'books-setup',
  'workflow-automation',
  'zoho-integration',
  'zoho-migration',
  'people-setup',
  'recruit-setup',
  'automation-integrations',
  'enterprise',
  'erp-starter',
  'erp-custom',
  'erp-discovery',
  'erp-integration',
  'erp-multi-department',
  'erp-improvement',
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

/** Enquiry form services. Ids are fixed (page buttons pre-select them); labels are edited in the admin (Forms). */
export const SERVICE_OPTIONS: { id: ServiceId; label: string }[] = SERVICE_IDS.map((id) => ({
  id,
  label: (forms.zoho.serviceLabels as Record<string, string>)[id] ?? id,
}));

export const BUDGET_OPTIONS: string[] = forms.zoho.budgets;

export const MEMBERSHIP = {
  name: tx.zoho_development_membership,
  apps: [tx.zoho_crm, tx.zoho_creator],
  monthly: '₹14,999',
  minimumMonths: 3,
  minimumTotal: '₹44,997',
  tagline: tx.your_dedicated_zoho_development_partner,
  /** Types of development request covered. */
  requestTypes: [
    { title: tx.zoho_crm_customisation, detail: tx.modules_fields_layouts_and_views },
    { title: tx.zoho_creator_development, detail: tx.forms_reports_and_workflows },
    { title: tx.deluge_scripting, detail: tx.custom_logic_and_automation },
    { title: tx.workflow_automation, detail: tx.approvals_notifications_and_scheduled_ta },
    { title: tx.bug_fixes_and_improvements, detail: tx.to_your_existing_setup },
    { title: tx.crm_and_creator_integrations, detail: tx.within_the_agreed_scope },
    { title: tx.monthly_progress_review, detail: tx.track_completed_work_and_plan },
    { title: tx.one_priority_queue, detail: tx.you_choose_the_order_we },
  ],
  /** How requests are submitted and prioritised. */
  process: [
    { title: tx.send_a_request, body: tx.tell_us_what_you_need },
    { title: tx.we_estimate_it, body: tx.larger_requests_are_estimated_first },
    { title: tx.you_set_the_priority, body: tx.requests_go_into_one_queue },
    { title: tx.monthly_review, body: tx.we_review_what_was_delivered },
  ],
  exclusions: [
    tx.zoho_licence_and_subscription_fees,
    tx.third_party_app_api_or,
    tx.large_or_multi_system_integrations,
    tx.data_migration_projects,
    tx.work_on_zoho_apps_other,
  ],
  /** Shown as-is; capacity and response times are not yet published. */
  capacity:
    tx.a_defined_amount_of_development,
  timelines: tx.response_and_delivery_times_are,
};

export const PACKAGES: { id: ServiceId; name: string; price: string; benefit: string; deliverables: string[] }[] = [
  {
    id: 'crm-quickstart',
    name: tx.zoho_crm_quickstart,
    price: '₹9,999',
    benefit: tx.get_your_sales_team_working,
    deliverables: [tx.sales_pipeline_and_deal_stages, tx.lead_and_contact_layouts, tx.assignment_and_follow_up_rules, tx.team_walkthrough],
  },
  {
    id: 'creator-mini-app',
    name: tx.zoho_creator_mini_app,
    price: '₹14,999',
    benefit: tx.replace_a_spreadsheet_or_paper,
    deliverables: [tx.forms_and_reports_for_one, tx.simple_approval_workflow, tx.user_roles_and_access, tx.testing_with_your_team],
  },
  {
    id: 'books-setup',
    name: tx.zoho_books_setup,
    price: '₹7,999',
    benefit: tx.start_invoicing_and_tracking_payments,
    deliverables: [tx.organisation_and_gst_settings, tx.invoice_and_quote_templates, tx.chart_of_accounts_review],
  },
  {
    id: 'workflow-automation',
    name: tx.workflow_automation_2,
    price: '₹7,499',
    benefit: tx.remove_repetitive_manual_steps_from,
    deliverables: [tx.process_mapping, tx.workflow_rules_and_alerts, tx.testing_with_your_team],
  },
  {
    id: 'zoho-integration',
    name: tx.zoho_integration,
    price: '₹19,999',
    benefit: tx.connect_zoho_to_another_system,
    deliverables: [tx.one_integration_between_two_systems, tx.field_mapping, tx.error_handling_and_alerts, tx.handover_documentation],
  },
];

/** HR, hiring and email packages, shown in their own section after the main packages. */
export const TEAM_PACKAGES: typeof PACKAGES = [
  {
    id: 'people-setup',
    name: tx.zoho_people_setup,
    price: '₹5,999',
    benefit: tx.run_employee_records_leave_and,
    deliverables: [tx.employee_records_and_departments, tx.leave_and_attendance_setup, tx.employee_self_service_access],
  },
  {
    id: 'recruit-setup',
    name: tx.zoho_recruit_setup,
    price: '₹6,999',
    benefit: tx.complete_setup_to_track_every,
    deliverables: [tx.job_openings_and_hiring_pipeline, tx.career_page_and_application_forms, tx.interview_and_email_templates],
  },
  {
    id: 'zoho-migration',
    name: tx.zoho_mail_migration,
    price: '₹3,999',
    benefit: tx.move_your_team_s_email,
    deliverables: [tx.migration_for_up_to_15, tx.domain_and_mailbox_setup, tx.existing_emails_moved_to_zoho],
  },
];

export const INTEGRATION = {
  price: '₹19,999',
  problem: tx.teams_re_enter_the_same,
  solution:
    tx.we_connect_zoho_apps_to,
  nodes: [tx.zoho_crm_2, tx.zoho_creator_2, tx.zoho_books, tx.zoho_inventory, tx.zoho_desk, tx.your_website, tx.external_apps, tx.rest_apis, tx.webhooks],
};

export const ENTERPRISE = {
  problem: tx.large_or_multi_team_operations,
  solution: tx.we_plan_the_architecture_build,
  points: [
    tx.custom_business_applications,
    tx.complex_multi_step_workflows,
    tx.multi_application_zoho_implementation,
    tx.data_migration_from_existing_systems,
    tx.reporting_and_management_dashboards,
    tx.integration_architecture,
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
    name: tx.zoho_crm_3,
    slug: 'zoho-crm',
    service: 'crm-quickstart',
    visual: 'crm',
    tagline: tx.manage_leads_customers_and_sales,
    features: [tx.lead_and_deal_management, tx.sales_pipeline_and_forecasting, tx.workflow_automation_3, tx.reports_and_analytics],
  },
  {
    name: tx.zoho_creator_3,
    slug: 'zoho-creator',
    service: 'creator-mini-app',
    visual: 'creator',
    tagline: tx.build_custom_business_applications_witho,
    features: [tx.custom_forms_and_workflows, tx.role_based_access, tx.reports_and_dashboards, tx.replace_manual_processes],
  },
  {
    name: tx.zoho_books_2,
    slug: 'zoho-books',
    service: 'books-setup',
    visual: 'books',
    tagline: tx.invoicing_payments_and_gst_in,
    features: [tx.invoicing_and_payments, tx.expense_management, tx.gst_and_tax_compliance, tx.financial_reports],
  },
  {
    name: tx.zoho_inventory_2,
    slug: 'zoho-inventory',
    service: 'automation-integrations',
    visual: 'inventory',
    tagline: tx.track_stock_sales_orders_and,
    features: [tx.inventory_and_warehouse, tx.sales_and_purchase_orders, tx.stock_tracking_and_alerts, tx.multi_warehouse_support],
  },
  {
    name: tx.zoho_desk_2,
    slug: 'zoho-desk',
    service: 'workflow-automation',
    visual: 'desk',
    tagline: tx.manage_customer_support_with_tickets,
    features: [tx.ticket_management, tx.automated_assignment_rules, tx.sla_tracking_and_escalation, tx.knowledge_base_and_reports],
  },
  {
    name: tx.zoho_flow,
    service: 'zoho-integration',
    visual: 'flow',
    tagline: tx.connect_your_apps_and_automate,
    features: [tx.app_integrations, tx.automated_workflows, tx.data_synchronisation, tx.less_manual_work],
  },
  {
    name: tx.zoho_analytics,
    slug: 'zoho-analytics',
    service: 'automation-integrations',
    visual: 'analytics',
    tagline: tx.turn_your_data_into_clear,
    features: [tx.interactive_dashboards, tx.business_insights, tx.data_from_multiple_sources, tx.shareable_reports],
  },
  {
    name: tx.zoho_sign,
    service: 'workflow-automation',
    visual: 'sign',
    tagline: tx.send_sign_and_manage_documents,
    features: [tx.send_documents_for_signature, tx.track_signature_status, tx.legally_valid_e_signatures, tx.works_with_crm_and_other],
  },
];

export const USE_CASES: { title: string; challenge: string; apps: string; workflow: string; steps: string[]; outcome: string; service: ServiceId }[] = [
  {
    title: tx.lead_management_and_follow_ups,
    challenge: tx.leads_from_the_website_and,
    apps: tx.zoho_crm_4,
    workflow: tx.capture_each_lead_assign_it,
    outcome: tx.faster_responses_and_fewer_missed,
    steps: [tx.capture_leads_from_website_and, tx.assign_each_lead_by_rule, tx.create_follow_up_tasks_automatically],
    service: 'crm-quickstart',
  },
  {
    title: tx.quotation_and_approval_automation,
    challenge: tx.quotes_are_built_by_hand,
    apps: tx.zoho_crm_zoho_sign,
    workflow: tx.generate_quotes_from_deals_route,
    outcome: tx.consistent_quotes_and_a_clear,
    steps: [tx.generate_quotes_from_deals, tx.route_discounts_for_approval, tx.collect_signatures_online],
    service: 'workflow-automation',
  },
  {
    title: tx.inventory_and_order_management,
    challenge: tx.stock_levels_are_checked_manually,
    apps: tx.zoho_inventory_zoho_crm,
    workflow: tx.link_sales_orders_to_stock,
    outcome: tx.fewer_stock_outs_and_less,
    steps: [tx.link_sales_orders_to_stock_2, tx.raise_purchase_orders_automatically, tx.alerts_when_stock_runs_low],
    service: 'automation-integrations',
  },
  {
    title: tx.customer_support_and_sla_automation,
    challenge: tx.requests_arrive_by_email_and,
    apps: tx.zoho_desk_3,
    workflow: tx.turn_emails_into_tickets_assign,
    outcome: tx.every_request_tracked_and_answered,
    steps: [tx.turn_emails_into_tickets, tx.assign_to_teams_by_rule, tx.track_slas_and_escalate],
    service: 'workflow-automation',
  },
  {
    title: tx.accounting_integrations,
    challenge: tx.won_deals_are_re_entered,
    apps: tx.zoho_books_zoho_crm,
    workflow: tx.create_invoices_from_won_deals,
    outcome: tx.no_double_entry_between_sales,
    steps: [tx.create_invoices_from_won_deals_2, tx.sync_payment_status_to_crm, tx.match_sales_with_accounts],
    service: 'zoho-integration',
  },
  {
    title: tx.reporting_and_management_dashboards_2,
    challenge: tx.management_reports_are_compiled_by,
    apps: tx.zoho_analytics_2,
    workflow: tx.bring_crm_books_and_operations,
    outcome: tx.up_to_date_numbers_without,
    steps: [tx.combine_crm_books_and_operations, tx.dashboards_that_refresh_automatically, tx.scheduled_report_emails],
    service: 'automation-integrations',
  },
];

export const WHY = [
  { title: tx.custom_solutions_for_real_workflows, body: tx.we_configure_zoho_around_how },
  { title: tx.zoho_crm_and_creator_development, body: tx.from_crm_customisation_to_complete },
  { title: tx.deluge_scripting_and_api_integrations, body: tx.custom_deluge_functions_and_rest },
  { title: tx.cross_application_automation, body: tx.crm_books_inventory_desk_and },
  { title: tx.clear_scope_and_milestones, body: tx.every_project_starts_with_agreed },
  { title: tx.ongoing_development_and_support, body: tx.keep_improving_after_go_live },
];

export const FAQS = [
  {
    q: tx.what_does_the_14_999,
    a: tx.ongoing_development_on_zoho_crm,
  },
  {
    q: tx.why_is_there_a_three,
    a: tx.understanding_your_processes_building_ch,
  },
  {
    q: tx.are_zoho_licenses_included,
    a: tx.no_zoho_licences_and_subscriptions,
  },
  {
    q: tx.can_i_request_both_crm,
    a: tx.yes_the_membership_covers_both,
  },
  {
    q: tx.how_are_development_tasks_prioritized,
    a: tx.all_requests_go_into_one,
  },
  {
    q: tx.are_complex_integrations_included,
    a: tx.smaller_crm_and_creator_integrations,
  },
  {
    q: tx.how_does_enterprise_project_pricing,
    a: tx.enterprise_projects_are_quoted_individua,
  },
  {
    q: tx.how_can_i_book_a,
    a: tx.fill_in_the_enquiry_form,
  },
  {
    q: tx.can_you_work_with_an,
    a: tx.yes_we_start_by_reviewing,
  },
  {
    q: tx.do_you_offer_data_migration,
    a: tx.yes_both_are_scoped_as,
  },
  {
    q: tx.who_owns_custom_developed_applications,
    a: tx.ownership_of_custom_applications_and,
  },
  {
    q: tx.how_are_scope_changes_handled,
    a: tx.changes_are_documented_and_estimated,
  },
];

/** ERP offers for manufacturers and larger businesses. Prices are indicative starting budgets from SavantX. */
export type ErpVisual = 'starter' | 'custom' | 'discovery' | 'integration' | 'multi-department' | 'improvement';

export const ERP_OFFERS: {
  id: ServiceId;
  visual: ErpVisual;
  label: string;
  audience: string;
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
    label: tx.starter_package,
    audience: tx.manufacturers,
    name: tx.manufacturing_erp_starter,
    price: '₹49,999',
    summary: tx.a_focused_erp_implementation_for,
    scope: [
      tx.sales_orders_and_customer_records,
      tx.purchase_orders_and_supplier_records,
      tx.inventory_and_stock_movement,
      tx.basic_management_reports,
      tx.user_training_and_deployment,
    ],
    bestFor: tx.small_manufacturers_that_need_operationa,
  },
  {
    id: 'erp-custom',
    visual: 'custom',
    label: tx.main_erp_offer,
    audience: tx.manufacturers,
    name: tx.custom_manufacturing_erp,
    price: '₹1,49,999',
    summary: tx.a_tailored_system_for_businesses,
    scope: [
      tx.enquiry_quotation_and_sales_orders,
      tx.bill_of_materials_bom,
      tx.job_orders_and_work_orders,
      tx.purchasing_and_inventory,
      tx.production_tracking_and_quality_checks,
    ],
    bestFor: tx.growing_manufacturers_that_have_outgrown,
  },
  {
    id: 'erp-discovery',
    visual: 'discovery',
    label: tx.enterprise_discovery,
    audience: tx.large_businesses,
    name: tx.enterprise_erp_discovery_sprint,
    price: '₹49,999',
    summary: tx.a_paid_discovery_engagement_before,
    scope: [
      tx.stakeholder_and_department_workshops,
      tx.current_process_and_requirements_mapping,
      tx.integration_and_data_flow_assessment,
      tx.proposed_solution_architecture,
      tx.phased_implementation_plan_risks_and,
    ],
    bestFor: tx.enterprises_that_need_clarity_before,
  },
  {
    id: 'erp-integration',
    visual: 'integration',
    label: tx.high_value_project,
    audience: tx.large_businesses,
    name: tx.erp_integration_automation_program,
    price: '₹2,49,999',
    summary: tx.connect_existing_erp_crm_accounting,
    scope: [
      tx.api_and_application_integrations,
      tx.automated_data_transfer_and_validation,
      tx.cross_system_workflow_automation,
      tx.exception_handling_and_logging,
      tx.testing_and_technical_documentation,
    ],
    bestFor: tx.businesses_whose_departments_use_disconn,
  },
  {
    id: 'erp-multi-department',
    visual: 'multi-department',
    label: tx.enterprise_transformation,
    audience: tx.large_businesses,
    name: tx.multi_department_erp_implementation,
    price: '₹4,99,999',
    summary: tx.a_phased_erp_implementation_across,
    scope: [
      tx.requirements_and_solution_architecture,
      tx.department_wise_implementation,
      tx.data_migration_planning,
      tx.user_roles_and_approval_processes,
      tx.testing_training_and_go_live,
      tx.documentation_and_post_launch_stabilisat,
    ],
    bestFor: tx.larger_manufacturers_with_multiple_depar,
    note: tx.a_starting_project_budget_not,
  },
  {
    id: 'erp-improvement',
    visual: 'improvement',
    label: tx.ongoing_support,
    audience: tx.large_businesses,
    name: tx.erp_continuous_improvement_plan,
    price: '₹39,999',
    summary: tx.ongoing_support_and_enhancements_after,
    scope: [
      tx.agreed_monthly_development_capacity,
      tx.bug_fixes_and_minor_enhancements,
      tx.workflow_and_report_improvements,
      tx.technical_support_with_defined_response,
      tx.monthly_review_and_improvement_backlog,
    ],
    bestFor: tx.businesses_that_need_continued_developme,
    top: true,
  },
];
