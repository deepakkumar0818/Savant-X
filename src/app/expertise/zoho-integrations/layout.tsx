import tx from '@/content/text/app/expertise/zoho-integrations/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: tx.zoho_crm_creator_deluge_development,
    description:
      tx.zoho_crm_implementation_zoho_creator,
    path: '/expertise/zoho-integrations',
  }),
  keywords: [
    tx.zoho_development_services,
    tx.zoho_deluge_development,
    tx.zoho_workflow_automation,
    tx.zoho_developer_india,
    tx.zoho_crm_implementation,
    tx.zoho_customization,
    tx.zoho_creator_development,
    tx.deluge_scripting,
    tx.zoho_books_setup,
    tx.zoho_integrations,
    tx.savantx_zoho,
  ],
};

export default function ZohoIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
