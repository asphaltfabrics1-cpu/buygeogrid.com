import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Tensar & Solmax Distributor Ohio | Solon | (440) 368-1420',
  description: 'Contact Asphalt Fabrics & Supply in Solon, Ohio for Tensar geogrids and Solmax Mirafi fabrics. Serving Cleveland, Akron, Toledo, Youngstown, and Ohio. Free DCP testing and expert consultation. Call (440) 368-1420.',
  keywords: ['Geogrid distributor Ohio', 'Tensar supplier Cleveland', 'Solmax distributor Akron', 'Solon Ohio', 'Ohio civil engineering', 'DCP testing Ohio'],
  openGraph: {
    title: 'Contact Us | Ohio Geogrid & Geotextile Distributor',
    description: 'Serving Cleveland, Akron, Toledo, Youngstown, and all of Ohio with Tensar and Solmax products.',
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

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 gap-12" id="form">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div>
                <div className="bg-white rounded border border-gray-200 p-8 mb-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
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

                <div className="bg-green-50 border-2 border-[#00c97e] rounded p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Free DCP Testing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Request your free Dynamic Cone Penetrometer (DCP) test today!
                    We provide expert soil analysis to help you select the right
                    Geogrid solution for your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
