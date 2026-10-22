import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'Founded in 2019, SavantX Technologies delivers software, Zoho CRM and ERP solutions, and electronics engineering from its offices in Gaya and Mohali, India.',
  path: '/about',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
