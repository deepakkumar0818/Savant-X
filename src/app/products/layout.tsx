import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Products',
  description:
    'Explore the SavantX Technologies product catalog: business software that helps organisations in healthcare, logistics, education and more scale and operate efficiently.',
  path: '/products',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
