import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nonwoven Geotextile Ohio | Mirafi 135N 180N',
  description: 'Solmax Mirafi nonwoven geotextile distributor in Northern Ohio. 135N, 140N, 180N for drainage, filtration & separation. Superior water flow. Cleveland, Akron, Toledo.',
  keywords: ['Solmax Mirafi nonwoven', 'drainage fabric Ohio', 'Mirafi 135N', 'Mirafi 180N', 'filtration geotextile', 'Cleveland drainage fabric', 'Ohio civil fabrics'],
  alternates: {
    canonical: 'https://buygeogrid.com/nonwoven-fabrics',
  },
  openGraph: {
    title: 'Nonwoven Geotextile Ohio | Mirafi 135N 180N',
    description: 'Solmax Mirafi nonwoven geotextile distributor in Northern Ohio. 135N, 140N, 180N for drainage, filtration & separation. Superior water flow. Cleveland, Akron, Toledo.',
    images: ['/images/products/mirafi-135n.jpg'],
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
          description="Authorized Solmax Mirafi nonwoven geotextile distributor. Versatile, felt-like fabrics engineered for filtration, drainage, and separation in civil and environmental applications. Highly permeable and adaptable to uneven ground surfaces. Competitive pricing and expert support throughout Northern Ohio."
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Nonwoven Geotextile Products</h2>
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

        {/* What Are Nonwoven Geotextiles Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Are Nonwoven Geotextiles?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Solmax nonwoven geotextiles are made from random, needle-punched or thermally bonded polypropylene or polyester fibers. Unlike woven geotextiles with their rigid, grid-like structure, nonwovens form a porous, felt-like mat with high porosity and significant elongation properties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Mirafi N-Series products are highly permeable and conform well to uneven ground surfaces—making them ideal for applications where water flow and filtration are the primary concerns.
            </p>
          </div>
        </section>

        {/* Primary Functions Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Primary Functions</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li><strong>Filtration:</strong> Allows water to pass through while retaining fine soil particles, preventing soil migration into drainage aggregate or pipes</li>
              <li><strong>Drainage:</strong> High permittivity enables collection and transport of water within the fabric plane, managing subsurface water flow</li>
              <li><strong>Separation:</strong> Prevents intermixing of dissimilar materials, keeping aggregate base separate from soft subgrade soils</li>
              <li><strong>Protection:</strong> Heavier-weight nonwovens cushion and protect geomembrane liners from punctures or abrasion</li>
            </ul>
          </div>
        </section>

        {/* Common Applications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Common Applications</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>Roads, driveways, and parking lots as a separator layer</li>
              <li>Subsurface drainage systems and French drains</li>
              <li>Behind retaining walls and foundation walls to manage water</li>
              <li>Erosion control along riverbanks, slopes, and shorelines</li>
              <li>Landfill liner protection and leachate collection systems</li>
              <li>Sports field drainage</li>
            </ul>
          </div>
        </section>

        {/* Benefits and Durability Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits and Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nonwoven geotextiles are cost-effective, lightweight, and easy to install due to their natural flexibility. They are chemically stable in aggressive soil environments and resistant to biological degradation. When installed correctly and buried, they provide a durable solution that can last for decades.
            </p>
          </div>
        </section>

        {/* Choosing the Right Product Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choosing the Right Product</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Mirafi N-Series includes products for various weights and applications. We can source any product in the Solmax nonwoven geotextile catalog. Not sure which is right for your project? Contact us and we can help evaluate your site conditions and recommend the best option.
            </p>
          </div>
        </section>

        {/* Serving Northern Ohio Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Northern Ohio</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Mirafi nonwoven geotextiles at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours.
            </p>
          </div>
        </section>

        {/* Lunch & Learn CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Learn More?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Schedule a free Lunch & Learn for your team. We provide expert training on geotextiles and geosynthetics—plus free lunch and PDH credits for engineers.
            </p>
            <Link
              href="/lunch-and-learn"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
            >
              Schedule a Lunch & Learn
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
