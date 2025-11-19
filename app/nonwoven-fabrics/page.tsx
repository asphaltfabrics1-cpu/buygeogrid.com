import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solmax Mirafi Nonwoven Geotextile Fabrics Ohio | 135N, 180N | Drainage',
  description: 'Authorized Solmax Mirafi nonwoven fabric distributor in Ohio. Mirafi 135N, 140N, 180N for drainage and filtration. Expert civil engineering solutions in Cleveland and Akron area.',
  keywords: ['Solmax Mirafi nonwoven', 'drainage fabric Ohio', 'Mirafi 135N', 'Mirafi 180N', 'filtration geotextile', 'Cleveland drainage fabric', 'Ohio civil fabrics'],
  openGraph: {
    title: 'Solmax Mirafi Nonwoven Fabrics Ohio | Drainage & Filtration',
    description: 'Premium nonwoven geotextiles for drainage and filtration applications in Ohio.',
  }
};

export default function NonwovenFabrics() {
  const products = [
    {
      name: 'Solmax Mirafi® 135N',
      image: '/images/products/mirafi-135n.jpg',
      url: '/135n',
    },
    {
      name: 'Solmax Mirafi® 140N',
      image: '/images/products/mirafi-135n.jpg',
      url: '/140n',
    },
    {
      name: 'Solmax Mirafi® 180N',
      image: '/images/products/mirafi-180n.jpeg',
      url: '/180n',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Solmax Mirafi Nonwoven Geotextile Fabrics"
          description="Authorized Solmax Mirafi nonwoven fabric distributor. High-performance nonwoven geotextiles for drainage, filtration, and separation applications. Competitive pricing and expert support."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          logo="/images/logos/solmax.png"
          logoLink="https://www.solmax.com"
          logoAlt="Solmax"
        />

        {/* Products Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  image={product.image}
                  url={product.url}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
