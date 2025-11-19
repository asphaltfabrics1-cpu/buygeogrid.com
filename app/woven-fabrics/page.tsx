import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solmax Mirafi Woven Geotextile Fabrics Ohio | 500X, 600X | Cleveland',
  description: 'Authorized Solmax Mirafi woven fabric distributor in Ohio. Mirafi 500X, 600X for soil stabilization and separation. Expert support in Cleveland, Akron, and all of Ohio.',
  keywords: ['Solmax Mirafi Ohio', 'woven geotextile', 'Mirafi 500X', 'Mirafi 600X', 'civil fabrics Ohio', 'soil separation fabric', 'Cleveland geotextile', 'Ohio'],
  openGraph: {
    title: 'Solmax Mirafi Woven Fabrics Ohio | Ohio Distributor',
    description: 'Premium Solmax Mirafi woven geotextiles for civil engineering projects in Ohio.',
  }
};

export default function WovenFabrics() {
  const products = [
    {
      name: 'Mirafi® 500X / 15X / 360',
      image: '/images/products/mirafi-500x.jpeg',
      url: '/500x',
    },
    {
      name: 'Mirafi® 600X / 15X / 300',
      image: '/images/products/mirafi-600x.jpeg',
      url: '/600x',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Solmax Mirafi Woven Geotextile Fabrics"
          description="Authorized Solmax Mirafi woven fabric distributor. High-strength woven geotextiles for soil stabilization, separation, and reinforcement applications. Competitive pricing and expert support."
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
