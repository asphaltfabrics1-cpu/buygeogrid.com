'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the GA4 `crack_sealing_lead` event exactly once when the AFS thank-you
 * page mounts. This is the destination-based conversion event — Google Ads
 * imports it from GA4 to optimize campaigns toward completed form submissions.
 *
 * De-duped via sessionStorage so a browser refresh on the thank-you page
 * doesn't fire the conversion again (same session).
 */
const EVENT_NAME = 'crack_sealing_lead';
const SESSION_KEY = 'afs_thank_you_fired';

export default function ThankYouConversion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Guard against double-fire on refresh within same session
    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return;
      window.sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // sessionStorage disabled — proceed anyway, one extra fire won't hurt
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', EVENT_NAME, {
        event_category: 'form',
        event_label: 'concrete_crack_sealing',
        value: 1,
      });

      window.gtag('event', 'conversion', {
        send_to: 'AW-18356011253/dKBECI6x190cEPWB6rBE',
        value: 500,
        currency: 'USD',
      });
    }
  }, []);

  return null;
}
