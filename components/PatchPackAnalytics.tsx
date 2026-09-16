'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// Delegates click tracking on the /patch-packs page:
//   - tel:  links -> patch_pack_phone_clicked
//   - mailto: links -> patch_pack_email_clicked
// Form-submission events fire from inside PatchPackQuoteForm on server-confirmed success.
export default function PatchPackAnalytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target) return;
      const anchor = target.closest('a[href^="tel:"], a[href^="mailto:"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        trackEvent('patch_pack_phone_clicked', {
          phone: href.replace(/^tel:/, ''),
          page: '/patch-packs',
        });
      } else if (href.startsWith('mailto:')) {
        trackEvent('patch_pack_email_clicked', {
          email: href.replace(/^mailto:/, '').split('?')[0],
          page: '/patch-packs',
        });
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
