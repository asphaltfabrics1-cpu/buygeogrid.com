import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Woven Geotextile Ohio | Mirafi 500X 600X',
  description: 'Solmax Mirafi woven geotextile distributor in Northern Ohio. 500X, 600X for soil stabilization, separation & reinforcement. High tensile strength. Cleveland, Akron, Toledo.',
  keywords: ['Solmax Mirafi Ohio', 'woven geotextile', 'Mirafi 500X', 'Mirafi 600X', 'civil fabrics Ohio', 'soil separation fabric', 'Cleveland geotextile', 'Ohio'],
  alternates: {
    canonical: 'https://buygeogrid.com/woven-fabrics',
  },
  openGraph: {
    title: 'Woven Geotextile Ohio | Mirafi 500X 600X',
    description: 'Solmax Mirafi woven geotextile distributor in Northern Ohio. 500X, 600X for soil stabilization, separation & reinforcement. High tensile strength. Cleveland, Akron, Toledo.',
    images: ['/images/products/mirafi-500x.jpeg'],
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
          description="Authorized Solmax Mirafi woven geotextile distributor. High-strength synthetic fabrics engineered for reinforcement, separation, stabilization, and filtration. Essential for challenging ground conditions including soft or expansive soils. Competitive pricing and expert support throughout Northern Ohio."
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Woven Geotextile Products</h2>
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

        {/* What Are Woven Geotextiles Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Are Woven Geotextiles?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Solmax woven geotextiles are high-strength synthetic fabrics made from high-tenacity polyester (PET) or polypropylene (PP) yarns woven into a durable, stable sheet. The Mirafi line is engineered to provide superior load capacity and long-term durability in applications ranging from road construction to site development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Core functions include:</p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>Reinforcement:</strong> Introducing tensile strength into the soil mass—a property soil naturally lacks</li>
              <li><strong>Separation:</strong> Preventing base materials from mixing with soft subgrade soils</li>
              <li><strong>Stabilization:</strong> Reducing lateral displacement and surface deformation under load</li>
              <li><strong>Filtration:</strong> Allowing water to drain while retaining soil particles</li>
            </ul>
          </div>
        </section>

        {/* How Woven Geotextiles Work Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Woven Geotextiles Work</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The primary mechanism is introducing significant tensile strength into the soil, creating a reinforced composite structure that can withstand higher stresses and distribute loads more effectively. When heavy loads are applied—from traffic or an embankment—the geotextile absorbs tensile forces and prevents lateral displacement of soil and aggregate. This increases bearing capacity and reduces surface deformation like rutting.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The fabric also acts as a barrier, stopping clean base material from mixing with soft subgrade. This preserves the integrity and drainage properties of the base layer. The interaction between the geotextile and surrounding aggregate creates a confinement effect, increasing friction and enhancing overall stability.
            </p>
          </div>
        </section>

        {/* Choosing the Right Product Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choosing the Right Product</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Mirafi line includes products for a wide range of subgrade conditions and applications—from light-duty separation fabrics to high-strength reinforcement geotextiles. Products like the Mirafi H2Ri even offer moisture-wicking capabilities for addressing frost heave and expansive soils.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Mirafi 500X</strong> is a woven slit-film polypropylene geotextile designed for separation over good to moderate subgrades. Its tight weave resists punctures and installation damage, making it a reliable choice for parking lots, residential streets, and light commercial applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Mirafi 600X</strong> offers higher tensile and puncture strength for more demanding conditions. It handles softer subgrades and coarse, angular aggregate—commonly used on heavier-duty roadways, commercial site work, and projects requiring greater durability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We can source any product in the Solmax woven geotextile catalog. Not sure which is right for your project? Contact us and we can help evaluate your site conditions and recommend the best option.
            </p>
          </div>
        </section>

        {/* Environmental Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Environmental Benefits</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Woven geotextiles offer substantial environmental benefits. By reducing the amount of aggregate needed and minimizing excavation, they lower the overall carbon footprint of construction projects. Their exceptional durability—with resistance to chemical and biological degradation—ensures a service life of decades, reducing the need for repairs, material replacement, and the associated environmental impact over time.
            </p>
          </div>
        </section>

        {/* Serving Northern Ohio Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Northern Ohio</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Mirafi woven geotextiles at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours.
            </p>
          </div>
        </section>

        {/* Lunch & Learn CTA Section */}
        <section className="py-16 px-6 bg-gray-50">
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
