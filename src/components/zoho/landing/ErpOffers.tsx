import tx from '@/content/text/components/zoho/landing/ErpOffers.json';
import { Boxes, Building2, ClipboardList, Factory, Plug, RefreshCw, type LucideIcon } from 'lucide-react';
import OfferBento from './OfferBento';
import type { BentoTheme } from './bentoThemes';
import { ERP_OFFERS, type ErpVisual } from './data';

const ICONS: Record<ErpVisual, LucideIcon> = {
  starter: Factory,
  custom: Boxes,
  discovery: ClipboardList,
  integration: Plug,
  'multi-department': Building2,
  improvement: RefreshCw,
};

// Same 4-column bento rhythm as the Zoho packages: the main ERP offer and the top offer are wide.
const WIDE = [false, true, false, false, false, true];
const THEMES: BentoTheme[] = ['light', 'dark', 'peach', 'blue', 'light', 'dark'];

/** ERP offers for manufacturers and larger businesses, styled like the Zoho packages. */
export default function ErpOffers() {
  return (
    <OfferBento
      id="erp-offers"
      eyebrow={tx.erp_for_manufacturers_large_businesses}
      title={tx.erp_offers_that_grow_with}
      description={tx.from_a_focused_starter_erp}
      cta={{ label: tx.talk_to_us_about_erp, service: 'consultation' }}
      offers={ERP_OFFERS.map((offer) => ({
        id: offer.id,
        tag: `${offer.audience} · ${offer.label}`,
        name: offer.name,
        price: offer.price,
        per: offer.per,
        benefit: offer.summary,
        deliverables: offer.scope,
        icon: ICONS[offer.visual],
        badge: offer.top ? 'Top offer' : undefined,
      }))}
      wide={WIDE}
      themes={THEMES}
      footnote="All prices are indicative starting budgets before applicable taxes. Enterprise requirements are assessed before pricing."
      headingLevel="h2"
      className="bg-slate-50"
    />
  );
}
