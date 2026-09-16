// Thin wrapper around gtag so callers don't have to guard for SSR / ad-blocker.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    } else if (Array.isArray(window.dataLayer)) {
      // Queue for the async gtag loader in layout.tsx.
      window.dataLayer.push({ event: name, ...params });
    }
  } catch {
    // Analytics must never break the UI.
  }
}
