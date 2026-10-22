import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Talk to SavantX Technologies about your website, app, Zoho CRM or hardware project. Call +91 9888244166 or email zoho@savantxtechnologies.com.',
  path: '/contact',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
