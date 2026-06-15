import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stay Up to Date | BuyGeogrid',
  description: 'Join our email list for product updates and occasional discounts.',
  robots: {
    index: false,
    follow: false,
  },
};

// Reading ?event= via useSearchParams in the client component means we can't
// statically prerender. Force dynamic since the page is noindex anyway —
// nothing to gain from SSG and prerender was failing in production builds.
export const dynamic = 'force-dynamic';

export default function TradeShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
