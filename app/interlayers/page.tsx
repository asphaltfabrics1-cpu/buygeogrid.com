import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Propex Petrotac Interlayers Ohio | Pavement Fabric | Cleveland Akron',
  description: 'Propex Petrotac paving interlayers in Ohio. Prevent reflective cracking and extend pavement life. Expert installation guidance for Cleveland and Akron area projects.',
  keywords: ['Propex Petrotac Ohio', 'paving interlayer', 'pavement fabric', 'crack prevention', 'Cleveland paving', 'Ohio asphalt'],
  openGraph: {
    title: 'Propex Petrotac Interlayers | Pavement Solutions Ohio',
    description: 'Premium paving interlayers for crack mitigation in Ohio.',
  }
};

export default function Interlayers() {
  const products = [
    {
      name: 'Propex Petrotac® 1ft Roll',
      image: '/images/products/petrotac.jpg',
      url: '/petrotac-1ft',
    },
    {
      name: 'Propex Petrotac® 1.5ft Roll',
      image: '/images/products/petrotac.jpg',
      url: '/petrotac-15ft',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Propex Petrotac Paving Interlayers"
          description="Propex Petrotac interlayer solutions engineered to mitigate cracking and extend pavement life. Provides moisture barrier and stress relief between asphalt layers."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
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
