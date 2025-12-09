import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patch Packs Ohio | Pothole Repair Solution',
  description: 'Patch Packs pothole repair solution distributor in Northern Ohio. Fast, easy all-weather emergency repair for potholes and pavement defects. Cleveland, Akron, Toledo.',
  keywords: ['Patch Packs Ohio', 'pothole repair', 'asphalt patch', 'pavement repair', 'Cleveland pothole repair', 'Ohio asphalt', 'emergency pavement repair'],
  alternates: {
    canonical: 'https://buygeogrid.com/patch-packs',
  },
  openGraph: {
    title: 'Patch Packs Ohio | Pothole Repair Solution',
    description: 'Patch Packs pothole repair solution distributor in Northern Ohio. Fast, easy all-weather emergency repair for potholes and pavement defects.',
    images: ['/images/products/patch-packs.png'],
  },
};

export default function PatchPacks() {
  const features = [
    { text: 'No specialized equipment required' },
    { text: 'Single-person application' },
    { text: 'VOC-free, environmentally conscious' },
    { text: 'Immediate traffic access after application' },
    { text: 'Works in all weather conditions and seasons' },
    { text: '100% recycled aggregate' },
  ];

  const applications = [
    { text: 'Bridge deck repairs' },
    { text: 'Highway and road pavements (asphalt and concrete)' },
    { text: 'Pavement leveling around drains and manholes' },
    { text: 'Parking facilities and driveways' },
    { text: 'High-traffic commercial surfaces' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Patch Packs Pothole Repair Solution"
          description="Fast and easy, all-weather emergency repair materials for potholes, spalls, and other pavement defects. Patch Packs combine 100% recycled aggregate with a non-volatile binder and cold asphalt for durable repairs. Authorized distributor serving Northern Ohio with competitive pricing and expert support."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          image="/images/products/patch-packs.png"
          imageAlt="Patch Packs Pothole Repair Solution"
          logo="/images/logos/PatchPacksTM Logo 2in.png"
          logoLink="https://fptinfrastructure.com/products/pavement-repair-materials/patch-packs/"
          logoAlt="Patch Packs"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Are Patch Packs Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Are Patch Packs?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Patch Packs are fast and easy, all-weather emergency repair materials for potholes, spalls, and other pavement defects. The product combines 100% recycled aggregate with a non-volatile binder and cold asphalt, making it an environmentally conscious choice for pavement maintenance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Available in Standard and Flex variants, Patch Packs are designed for repairing asphalt and reactive concrete defects measuring 1 inch or deeper. The VOC-free formulation makes them safe to use in any environment.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The asphalt binder enables Patch Packs to expand and compress under vehicle load, establishing adhesion to existing surfaces while simultaneously sealing the top and side edges of the repair area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simply clean the pothole of loose debris, place the Patch Pack material into the hole, and compact it. No heating, mixing, or specialized equipment is required. The repair can be opened to traffic immediately after compaction.
            </p>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Applications</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>Bridge deck repairs</li>
              <li>Highway and road pavements (asphalt and concrete)</li>
              <li>Pavement leveling around utility access points (drains, manholes)</li>
              <li>Multi-use vehicular pathways</li>
              <li>Parking facilities, driveways, and high-traffic commercial surfaces</li>
              <li>Emergency cold weather repairs</li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>No specialized equipment required</strong> – Simple application process</li>
              <li><strong>Single-person application</strong> – Reduces labor costs</li>
              <li><strong>Reduces safety hazards</strong> – For workers and drivers alike</li>
              <li><strong>VOC-free formulation</strong> – Environmentally conscious</li>
              <li><strong>Immediate traffic access</strong> – No curing time needed</li>
              <li><strong>All-weather performance</strong> – Works in any season or condition</li>
            </ul>
          </div>
        </section>

        {/* Product Variants Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Variants</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Patch Packs</h3>
                <p className="text-gray-700">
                  Designed for standard asphalt and concrete pavement repairs. Ideal for most pothole and spall repairs on roads, parking lots, and driveways.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flex Patch Packs</h3>
                <p className="text-gray-700">
                  Enhanced flexibility for areas with greater movement or thermal expansion. Suitable for bridge decks and surfaces subject to heavy loads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Repair Potholes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Repair Potholes Quickly?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Potholes cause vehicle damage, create safety hazards, and accelerate pavement deterioration. Water entering through potholes undermines the base layers, leading to larger failures and more expensive repairs. In freeze-thaw climates like Northern Ohio, this cycle can cause rapid pavement breakdown.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Addressing potholes promptly with an effective repair solution like Patch Packs protects your pavement investment and reduces liability exposure. Quick repairs also improve the driving experience and public perception of road conditions.
            </p>
          </div>
        </section>

        {/* Serving Northern Ohio Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Northern Ohio</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Patch Packs at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours.
            </p>
          </div>
        </section>

        {/* Lunch & Learn CTA Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Learn More?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Schedule a free Lunch & Learn for your team. We provide expert training on pavement repair solutions and geosynthetics—plus free lunch and PDH credits for engineers.
            </p>
            <Link
              href="/lunch-and-learn"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
            >
              Schedule a Lunch & Learn
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg text-gray-300 mb-6">Get competitive pricing and expert support from your Northern Ohio distributor</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                Request a Quote
              </Link>
              <Link href="tel:4403681420" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200">
                (440) 368-1420
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
