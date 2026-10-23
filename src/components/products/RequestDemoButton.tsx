'use client';

export const REQUEST_DEMO_EVENT = 'products:request-demo';

/**
 * Opens the product demo form (rendered by ProductCatalog) with an optional product pre-selected.
 * Without JavaScript, or if the form is not on the page, it is a plain link to the Contact page.
 */
export default function RequestDemoButton({
  productId = '',
  className,
  children,
}: {
  productId?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="/contact"
      className={className}
      onClick={(e) => {
        const handled = !window.dispatchEvent(new CustomEvent<string>(REQUEST_DEMO_EVENT, { detail: productId, cancelable: true }));
        if (handled) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}
