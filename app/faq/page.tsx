import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Geogrid & Geotextile Questions Ohio',
  description: 'Geogrid & geotextile FAQ. Tensar & Solmax questions answered. Soil stabilization, installation, pricing, DCP testing info.',
  keywords: ['Geogrid FAQ', 'geotextile questions', 'Tensar FAQ', 'soil stabilization Ohio', 'DCP testing', 'Ohio Geogrid'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/faq',
  },
  openGraph: {
    title: 'FAQ | Geogrid & Geotextile Questions',
    description: 'Expert answers to Geogrid and geotextile questions from authorized Ohio distributor.',
  }
};

export default function FAQ() {
  const faqs = [
    {
      question: 'What is a Geogrid?',
      answer: 'Geogrid is a high-strength polymer grid used to reinforce and stabilize soil. It is commonly used under roads, parking lots, driveways, and retaining walls to improve structural integrity and reduce the amount of aggregate needed.',
    },
    {
      question: 'What is a woven fabric?',
      answer: "Woven fabrics are made by weaving polypropylene or polyester fibers together, creating a strong material with high tensile strength. They're ideal for separation and stabilization applications like roadways and construction pads where strength is key.",
    },
    {
      question: 'What is a non-woven fabric?',
      answer: "Non-woven fabrics are made from bonded synthetic fibers and have a felt-like texture. They're often used for drainage and filtration applications — such as behind retaining walls, under riprap, and in French drains — where water flow is important.",
    },
    {
      question: 'What is an interlayer?',
      answer: 'An interlayer is a specialty paving fabric installed between layers of asphalt to help prevent cracking and moisture penetration. It acts as a moisture barrier and stress-relief layer, could help extend the life of pavements and reducing reflective cracking.',
    },
    {
      question: 'What types of Geogrids do you sell?',
      answer: 'We carry Tensar® InterAx® NX Series, TriAx® TX Series, BX Series, and the SQ2020. Each is designed for specific project needs such as soil stabilization, base reinforcement, and pavement support.',
    },
    {
      question: 'Do you sell to contractors and homeowners?',
      answer: "Yes! Whether you're a large contractor or a homeowner working on a driveway or patio, we're happy to help. No job is too big or too small.",
    },
    {
      question: 'How do I request a quote?',
      answer: 'Visit any product page and click the green "Request a Quote" button. Or call us at (440) 368-1420 or email Conradbar@asphaltfabrics.com.',
    },
    {
      question: 'Do you offer price matching?',
      answer: "Yes! We guarantee competitive pricing and will do our best to beat any verified quote. Just let us know what you found and where.",
    },
    {
      question: 'Where do you ship?',
      answer: "Local delivery is available in Ohio. We'll provide tracking and support every step of the way.",
    },
    {
      question: 'How fast can I get my Geogrid?',
      answer: 'Most orders ship within 1-2 business days. Transit time depends on your location. Need it sooner? Contact us for expedited options.',
    },
    {
      question: 'Can you help me choose the right Geogrid?',
      answer: 'Absolutely. We offer free consultation and DCP testing to help you determine the right product for your soil and project requirements.',
    },
    {
      question: 'Do you have installation guides or specs?',
      answer: 'Yes — every product page includes a downloadable spec sheet. Need help with installation best practices? Just give us a call or email.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Frequently Asked Questions"
          description="Find answers to common questions about our Geogrid and geotextile products, shipping, installation, and services."
          ctaText="Contact Us"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        {/* FAQ Section */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Common Questions</h2>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 60}>
                  <div className="bg-white rounded p-6 border border-gray-200 hover:border-[#00c97e] transition-colors duration-200">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Still Have Questions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our team is here to help! Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                >
                  Contact Us
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="tel:4403681420"
                  className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors group"
                >
                  <span>(440) 368-1420</span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
