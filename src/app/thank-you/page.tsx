import tx from '@/content/text/app/thank-you/page.json';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import ThankYouContent from '@/components/thank-you/ThankYouContent';
import { pageMetadata } from '@/lib/seo';

// Reached only after a form is sent, so it stays out of search results.
export const metadata: Metadata = {
  ...pageMetadata({ title: tx.thank_you, description: tx.your_message_has_reached_us, path: '/thank-you' }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<ThankYouContent form={null} />}>
        <ThankYouContent />
      </Suspense>
      <Footer />
    </div>
  );
}
