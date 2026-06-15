import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Place an Order | BuyGeogrid',
  description: 'Submit an order request for products from Asphalt Fabrics & Supply.',
  robots: { index: false, follow: false },
};

// Reads ?event= via useSearchParams in the client form — can't static-prerender.
export const dynamic = 'force-dynamic';

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
