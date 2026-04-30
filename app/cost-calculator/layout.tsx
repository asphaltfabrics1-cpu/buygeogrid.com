import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aggregate Cost Savings Calculator | BuyGeogrid',
  description: 'Calculate how much you can save using Tensar geogrid vs. over-excavation. Compare aggregate thickness and costs for different soil conditions and geogrid products.',
  keywords: ['geogrid cost calculator', 'aggregate savings calculator', 'Tensar geogrid savings', 'proof roll cost', 'over-excavation cost', 'subgrade stabilization cost', 'Ohio geogrid calculator'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/cost-calculator',
  },
  openGraph: {
    title: 'Aggregate Cost Savings Calculator',
    description: 'See how much Tensar geogrid can save on your next project. Free calculator based on the 2025 Subgrade Pocket Card.',
    type: 'website',
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
