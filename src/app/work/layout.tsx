import tx from '@/content/text/app/work/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.our_work_zoho_solutions_custom,
  description:
    tx.zoho_crm_books_creator_and,
  path: '/work',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
