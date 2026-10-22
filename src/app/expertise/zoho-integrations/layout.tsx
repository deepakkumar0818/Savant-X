import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Zoho CRM, Creator & Deluge Development Services',
    description:
      'Zoho CRM implementation, Zoho Creator and Deluge development, workflow automation and Zoho integrations by SavantX. Membership from ₹14,999/month and fixed-price packages.',
    path: '/expertise/zoho-integrations',
  }),
  keywords: [
    'Zoho development services',
    'Zoho Deluge development',
    'Zoho workflow automation',
    'Zoho developer India',
    'Zoho CRM implementation',
    'Zoho customization',
    'Zoho Creator development',
    'Deluge scripting',
    'Zoho Books setup',
    'Zoho integrations',
    'SavantX Zoho',
  ],
};

export default function ZohoIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
