import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Mobile App Development',
  description:
    'iOS and Android mobile applications designed and built by SavantX Technologies to engage users and grow your business.',
  path: '/expertise/mobile-apps',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
