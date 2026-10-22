import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Custom Web Application Development',
  description:
    'Scalable custom web applications that streamline business operations and improve productivity, built by SavantX Technologies.',
  path: '/expertise/web-apps',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
