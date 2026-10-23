import tx from '@/content/text/app/expertise/design-systems/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.design_systems,
  description:
    tx.scalable_design_systems_and_component,
  path: '/expertise/design-systems',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
