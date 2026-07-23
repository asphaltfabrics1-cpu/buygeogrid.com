import AFSFooter from '@/components/AFSFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thanks — Your Request Is In | Asphalt Fabrics & Specialties',
  description: 'We\'ve received your concrete crack sealing / FibreCrete joint repair request. Someone from Asphalt Fabrics & Specialties will reach out within 24 hours.',
  robots: { index: false, follow: true }, // Thank-you pages shouldn't be indexed
  alternates: { canonical: 'https://www.buygeogrid.com/concrete-crack-sealing/thank-you' },
};

const AFS_YELLOW = '#F5C518';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center bg-[#1a1a1a] text-white relative overflow-hidden">
        {/* Construction-stripe accent bar (top) */}
        <div
          className="absolute top-0 left-0 right-0 h-3"
          style={{ background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 20px, #1a1a1a 20px 40px)` }}
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          {/* Big yellow checkmark */}
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full mb-8" style={{ backgroundColor: AFS_YELLOW }}>
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="#1a1a1a" strokeWidth={3} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: AFS_YELLOW }}>
            Request received
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Thanks — we&apos;ve got it.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Someone from Asphalt Fabrics &amp; Specialties will reach out within <span className="text-white font-semibold">24 hours</span> to schedule your free on-site assessment.
          </p>

          {/* Text-photos callout */}
          <div className="bg-white/5 border border-white/10 rounded p-6 mb-10 text-left max-w-xl mx-auto">
            <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: AFS_YELLOW }}>
              Want a faster preliminary read?
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Text project photos to <a href="sms:+14403841897" className="text-white font-semibold hover:underline">(440) 384-1897</a> — the more we can see up front, the faster we can spec the fix.
            </p>
            <a
              href="sms:+14403841897"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              Text photos to (440) 384-1897
            </a>
          </div>

          {/* Company info + link to asphaltfabrics.com */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              Learn more about Asphalt Fabrics &amp; Specialties
            </p>
            <a
              href="https://www.asphaltfabrics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity group"
            >
              <span>Visit asphaltfabrics.com</span>
              <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4.5m2.121-9.121a2.5 2.5 0 013.536 3.536L12 15.964 8 16l.036-4L18.379 2.379z" />
              </svg>
            </a>

            <div className="mt-6 text-xs text-gray-500">
              <Link href="/concrete-crack-sealing" className="hover:text-gray-300 transition-colors">
                ← Back to concrete crack sealing
              </Link>
            </div>
          </div>
        </div>

        {/* Construction-stripe accent bar (bottom) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3"
          style={{ background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 20px, #1a1a1a 20px 40px)` }}
          aria-hidden="true"
        />
      </main>
      <AFSFooter />
    </div>
  );
}
