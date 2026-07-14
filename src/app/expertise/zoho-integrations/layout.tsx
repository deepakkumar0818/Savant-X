import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoho Integrations — Setup, Customization & App Development | SavantX',
  description:
    'Official Zoho Development Partner. Complete Zoho CRM, Books, Creator, Desk, Analytics, Recruit, Inventory, Projects, Campaigns & SalesIQ setup, customization, and automation by SavantX.',
  keywords: [
    'Zoho partner India',
    'Zoho CRM implementation',
    'Zoho customization',
    'Zoho Creator development',
    'Zoho Books setup',
    'Zoho integrations',
    'SavantX Zoho',
  ],
  alternates: {
    canonical: 'https://www.savantxtechnologies.com/expertise/zoho-integrations/',
  },
  openGraph: {
    title: 'Zoho Integrations — Setup, Customization & App Development | SavantX',
    description:
      'From CRM to Creator, Books to Recruit — SavantX designs, builds, and automates your entire Zoho ecosystem.',
    url: 'https://www.savantxtechnologies.com/expertise/zoho-integrations/',
    type: 'website',
  },
};

export default function ZohoIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
