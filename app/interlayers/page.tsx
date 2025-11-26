import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Petrotac Interlayers Ohio | Paving Fabric',
  description: 'Propex Petrotac paving interlayer distributor in Northern Ohio. Prevent reflective cracking, extend pavement life with moisture barrier technology. Cleveland, Akron, Toledo.',
  keywords: ['Propex Petrotac Ohio', 'paving interlayer', 'pavement fabric', 'crack prevention', 'Cleveland paving', 'Ohio asphalt'],
  alternates: {
    canonical: 'https://buygeogrid.com/interlayers',
  },
  openGraph: {
    title: 'Petrotac Interlayers Ohio | Paving Fabric',
    description: 'Propex Petrotac paving interlayer distributor in Northern Ohio. Prevent reflective cracking, extend pavement life with moisture barrier technology. Cleveland, Akron, Toledo.',
    images: ['/images/products/petrotac.jpg'],
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
          description="Propex Petrotac paving interlayer distributor. Self-adhesive paving membranes engineered to prevent reflective cracking and provide moisture protection for asphalt overlays. Easy peel-and-stick installation. Competitive pricing and expert support throughout Northern Ohio."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          logo="/images/logos/solmax.png"
          logoLink="https://www.solmax.com"
          logoAlt="Solmax - Petrotac"
        />

        {/* Products Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Paving Interlayer Products</h2>
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

        {/* What Are Paving Interlayers Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Are Paving Interlayers?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Paving interlayers are geotextile membranes installed between pavement layers to prevent cracks from reflecting up through new asphalt overlays. When existing pavement has joints, cracks, or localized damage, those weak points tend to telegraph through fresh asphalt over time. Interlayers absorb stress at these locations and create a moisture barrier that protects the pavement structure from water infiltration.
            </p>
          </div>
        </section>

        {/* How Petrotac Works Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Petrotac Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Petrotac is a self-adhesive paving membrane with an asphalt coating on the top side that bonds directly to the overlay. The peel-and-stick design allows a two-person crew to install it quickly without special equipment. Once in place, the membrane absorbs movement at joints and cracks, preventing them from reflecting into the new surface. It also blocks water from penetrating into the base layers—a leading cause of pavement deterioration.
            </p>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Applications</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>Asphalt overlays on cracked or jointed pavement</li>
              <li>Portland cement concrete (PCC) joint treatment</li>
              <li>Bridge decks (asphalt, concrete, wood, and steel)</li>
              <li>Parking lots and roadways with localized distress</li>
              <li>Airport pavements</li>
              <li>Anywhere reflective cracking is a concern</li>
            </ul>
          </div>
        </section>

        {/* Why Treat Cracks Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Treat Cracks?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Reflective cracking isn&apos;t just cosmetic—it&apos;s a structural problem. When cracks in underlying pavement telegraph through a new overlay, they create pathways for water to infiltrate the base layers. Once water gets in, it weakens the subgrade, accelerates deterioration, and leads to potholes and base failure. In freeze-thaw climates like Northern Ohio, this cycle is even more destructive. Treating cracks with an interlayer before overlaying is far more cost-effective than repeatedly patching failures or replacing entire pavement sections down the road.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Petrotac extends the life of asphalt overlays by addressing problems at their source. Rather than simply paving over cracks and waiting for them to reappear, the interlayer absorbs stress and blocks moisture—two factors that accelerate pavement failure. The result is lower life-cycle costs and fewer repairs over time.
            </p>
          </div>
        </section>

        {/* Serving Northern Ohio Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Northern Ohio</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Propex Petrotac at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours.
            </p>
          </div>
        </section>

        {/* Lunch & Learn CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Learn More?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Schedule a free Lunch & Learn for your team. We provide expert training on paving interlayers and geosynthetics—plus free lunch and PDH credits for engineers.
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
