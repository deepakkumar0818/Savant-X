import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'SavantX Technologies | Software, Zoho CRM & Electronics Engineering',
  description:
    'SavantX Technologies builds websites, web and mobile apps, Zoho CRM and ERP solutions, and IoT, embedded and PCB hardware for growing businesses. Offices in Gaya and Mohali, India.',
  path: '/',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
