import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Geogrid Ohio | (440) 368-1420',
  description: 'Contact AF Supply for Tensar geogrids & Solmax fabrics in Ohio. Free DCP testing. Cleveland, Akron, Toledo. Call (440) 368-1420.',
  keywords: ['Geogrid distributor Ohio', 'Tensar supplier Cleveland', 'Solmax distributor Akron', 'Solon Ohio', 'Ohio civil engineering', 'DCP testing Ohio'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Geogrid Ohio',
    description: 'Contact AF Supply for Tensar geogrids & Solmax fabrics. Free DCP testing. Cleveland, Akron, Toledo.',
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Contact Us"
          description="Get in touch for quotes, product information, or expert consultation. We're here to help with your project needs."
          ctaText="Request a Quote"
          ctaLink="#form"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get in touch</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Contact Information</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12" id="form">
              {/* Contact Form */}
              <Reveal delay={120}>
                <ContactForm />
              </Reveal>

              {/* Contact Information */}
              <Reveal delay={240}>
                <div className="bg-white rounded border border-gray-200 p-8 mb-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-700">
                        7620 Bond Street
                        <br />
                        Solon, OH 44139
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:4403681420" className="text-[#00c97e] hover:text-[#00b36f] font-semibold transition-colors">
                          (440) 368-1420
                        </a>
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:jstone@asphaltfabrics.com" className="text-[#00c97e] hover:text-[#00b36f] font-semibold transition-colors">
                          jstone@asphaltfabrics.com
                        </a>
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 5:00 PM EST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-[#00c97e] rounded p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Free DCP Testing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Request your free Dynamic Cone Penetrometer (DCP) test today!
                    We provide expert soil analysis to help you select the right
                    Geogrid solution for your project.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Not Ready to Talk Yet?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Grab our one-page capabilities flyer — what we stock, why local beats national, and the proof-roll chart for sizing aggregate over weak subgrades.
                  </p>
                  <a
                    href="/docs/asphalt-fabrics-supply-flyer.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    Download Flyer (PDF)
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
