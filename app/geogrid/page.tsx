import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar Geogrids Ohio | InterAx, TriAx, Biaxial | Ohio Distributor',
  description: 'Authorized Tensar Geogrid distributor in Ohio. InterAx NX850, TriAx TX190, Biaxial BX1200+ available. Free DCP testing in Cleveland, Akron. Expert soil stabilization solutions with competitive pricing.',
  keywords: ['Tensar Geogrids Ohio', 'InterAx Geogrid', 'TriAx Geogrid', 'Biaxial Geogrid', 'Cleveland Geogrid', 'Akron Geogrid', 'soil stabilization Ohio', 'pavement reinforcement', 'NX850', 'TX190', 'Ohio'],
  openGraph: {
    title: 'Tensar Geogrids Ohio | InterAx, TriAx, Biaxial',
    description: 'Authorized Tensar distributor in Ohio. Full range of Geogrids with expert support and competitive pricing.',
  }
};

export default function Geogrid() {
  const products = [
    {
      name: 'InterAx® NX850™ Geogrid',
      image: '/images/products/solution-interax.png',
      url: '/geogrid/nx850',
    },
    {
      name: 'InterAx® NX750™ Geogrid',
      image: '/images/products/solution-interax.png',
      url: '/geogrid/nx750',
    },
    {
      name: 'InterAx® NX650™ Geogrid',
      image: '/images/products/solution-interax.png',
      url: '/geogrid/nx650',
    },
    {
      name: 'InterAx™ NXL™ Geogrid',
      image: '/images/products/nxl.png',
      url: '/geogrid/nxl',
    },
    {
      name: 'Tensar H-Series™ HX165™ Geogrid',
      image: '/images/products/h-series.png',
      url: '/geogrid/hx165',
    },
    {
      name: 'Tensar H-Series™ HX145™ Geogrid',
      image: '/images/products/h-series.png',
      url: '/geogrid/hx145',
    },
    {
      name: 'TriAx® TX190L Geogrid',
      image: '/images/products/solution-triax.png',
      url: '/geogrid/tx190',
    },
    {
      name: 'TriAx® TX Type 2',
      image: '/images/products/solution-triax.png',
      url: '/geogrid/tx-type-2',
    },
    {
      name: 'Biaxial Geogrid BX1200',
      image: '/images/products/solution-biax.png',
      url: '/geogrid/bx1200',
    },
    {
      name: 'Biaxial Geogrid BX1300',
      image: '/images/products/solution-biax.png',
      url: '/geogrid/bx1300',
    },
    {
      name: 'Biaxial Geogrid SQ2020',
      image: '/images/products/solution-biax.png',
      url: '/geogrid/sq2020',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar Geogrid Products"
          description="Authorized Tensar distributor offering the full range of Geogrid solutions including InterAx®, TriAx®, and Biaxial series. Competitive pricing with expert support and free DCP testing available."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          logo="/images/logos/tensar.png"
          logoLink="https://tensarcorp.com"
          logoAlt="Tensar International"
        />

        {/* Products Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
