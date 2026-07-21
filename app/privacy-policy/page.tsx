import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BuyGeogrid.com & Asphalt Fabrics & Specialties',
  description: 'Privacy policy for BuyGeogrid.com and Asphalt Fabrics & Specialties — what personal information we collect, how we use it, how we protect it, and your rights.',
  alternates: { canonical: 'https://www.buygeogrid.com/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const lastUpdated = 'July 21, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a1a1a] text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Legal</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <article className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#00c97e] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900">
            <p className="lead text-lg text-gray-700 leading-relaxed">
              This Privacy Policy explains how BuyGeogrid.com and Asphalt Fabrics &amp; Specialties (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) collect, use, and protect personal information when you visit our website or contact us for a quote, assessment, or product inquiry.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Who we are</h2>
            <p>
              Asphalt Fabrics &amp; Specialties is a Northeast Ohio commercial and industrial pavement and concrete-repair company, in business since 2003. Asphalt Fabrics &amp; Specialties operates the website BuyGeogrid.com for our geosynthetics distribution business and the /concrete-crack-sealing landing page for our commercial crack sealing and joint repair services. Our physical address is 7710 Bond Street, Glenwillow, OH 44139, and we can be reached at (440) 786-1077.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Information we collect</h2>
            <p>
              We collect the following categories of information only when you voluntarily submit it through a form on our site or contact us directly:
            </p>
            <ul>
              <li><strong>Contact information</strong> — name, business name, email address, and phone number.</li>
              <li><strong>Project details</strong> — city or region, facility type, approximate area, timeline, and any project notes you choose to share.</li>
              <li><strong>Technical information</strong> — IP address, browser type, referring page, and general device information collected automatically for security and analytics purposes.</li>
            </ul>
            <p>
              We do not collect Social Security numbers, financial account numbers, or any payment information through this website.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">How we use your information</h2>
            <p>We use the information you provide only to:</p>
            <ul>
              <li>Respond to your quote request, assessment inquiry, or product question.</li>
              <li>Follow up about your project by phone, text, or email.</li>
              <li>Send occasional service updates or product information you have requested.</li>
              <li>Improve the performance of our website and services.</li>
              <li>Comply with applicable law.</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">How we share information</h2>
            <p>We share limited information only with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> we use to run our business — for example, email delivery (Resend), form and lead management (Monday.com), analytics providers, and hosting infrastructure (Vercel). These providers are bound to use your information only to provide services to us.
              </li>
              <li>
                <strong>Law enforcement or regulators</strong>, when required by valid legal process.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Cookies and analytics</h2>
            <p>
              We use standard analytics tools (including Google Analytics and Google Ads conversion tracking) to understand website traffic, measure the performance of our advertising, and improve our services. These tools may set cookies on your browser. You can disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Data retention</h2>
            <p>
              We keep your project inquiries and contact information for as long as needed to serve you and to maintain business records. You may request that we delete your information at any time by contacting us.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time. To exercise any of these rights, email us at{' '}
              <a href="mailto:jstone@asphaltfabrics.com">jstone@asphaltfabrics.com</a> or call{' '}
              <a href="tel:4407861077">(440) 786-1077</a>. Depending on where you live, you may have additional rights under state privacy laws.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Security</h2>
            <p>
              We use industry-standard technical and administrative measures to protect the information you submit. No method of transmission over the internet is 100% secure, but we take reasonable steps to safeguard your information.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Children</h2>
            <p>
              Our website is not directed to children under 13, and we do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will change the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl md:text-3xl mt-10 mb-4">Contact us</h2>
            <p>
              Questions about this Privacy Policy or how we handle your information:
            </p>
            <p>
              Asphalt Fabrics &amp; Specialties<br />
              7710 Bond Street, Glenwillow, OH 44139<br />
              Phone: <a href="tel:4407861077">(440) 786-1077</a><br />
              Email: <a href="mailto:jstone@asphaltfabrics.com">jstone@asphaltfabrics.com</a>
            </p>

            <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
              <Link href="/concrete-crack-sealing" className="text-[#00c97e] font-semibold hover:underline">← Back to Concrete Crack Sealing</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
