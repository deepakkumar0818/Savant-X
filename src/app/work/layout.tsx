import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Our Work: Zoho Solutions & Custom Software',
  description:
    'Zoho CRM, Books, Creator and Analytics implementation, integration and custom development by SavantX Technologies, plus custom web, mobile and data projects.',
  path: '/work',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
