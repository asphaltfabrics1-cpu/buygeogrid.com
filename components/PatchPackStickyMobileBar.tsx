'use client';

// Sticky bottom action bar for the Patch Packs page on mobile only.
// Buttons don't cover the footer because the desktop grid hides this element
// entirely at md+, and mobile pages have enough bottom padding via <Footer />.
export default function PatchPackStickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] text-white border-t border-[#00c97e] shadow-2xl"
      role="navigation"
      aria-label="Patch Packs contact actions"
    >
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href="tel:4403681420"
          className="flex items-center justify-center gap-2 py-3 hover:bg-white/5 transition-colors"
        >
          <svg className="w-5 h-5 text-[#00c97e]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <a
          href="#quote"
          className="flex items-center justify-center gap-2 py-3 bg-[#00c97e] hover:bg-[#00b36f] text-[#1a1a1a] font-bold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-wider">Get Pricing</span>
        </a>
      </div>
    </div>
  );
}
