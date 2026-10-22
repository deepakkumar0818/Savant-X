import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Design Systems',
  description:
    'Scalable design systems and component libraries that keep your digital products consistent and efficient to build.',
  path: '/expertise/design-systems',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
