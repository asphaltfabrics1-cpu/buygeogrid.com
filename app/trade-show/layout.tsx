import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stay Up to Date | BuyGeogrid',
  description: 'Join our email list for product updates and occasional discounts.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TradeShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
