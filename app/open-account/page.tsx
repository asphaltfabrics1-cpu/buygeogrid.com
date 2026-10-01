import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OpenAccountForm from '@/components/OpenAccountForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open an Account',
  description:
    'Open a customer account with Asphalt Fabrics & Supply. Required before your first order.',
  alternates: {
    canonical: 'https://www.buygeogrid.com/open-account',
  },
};

export default function OpenAccount() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Asphalt Fabrics &amp; Supply
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
              Open an Account
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              All new customers complete this form before their first order. Applying for Net 30
              terms? Have your bank and two supplier references ready.
            </p>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
            <OpenAccountForm />
            <p className="text-sm text-gray-600 mt-6">
              Questions about the form? Call{' '}
              <a href="tel:4403681420" className="text-[#00c97e] font-semibold hover:underline">
                (440) 368-1420
              </a>{' '}
              or email{' '}
              <a href="mailto:reneex@asphaltfabrics.com" className="text-[#00c97e] font-semibold hover:underline">
                reneex@asphaltfabrics.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
