import Script from 'next/script';

// Meta (Facebook) Pixel for the AFS Concrete Crack Sealing FB ad campaign.
// Scoped to the AFS landing page + thank-you page only (NOT site-wide).
// This is a separate pixel from BuyGeogrid's site-wide pixel.
const AFS_META_PIXEL_ID = '2475116883007778';

type Props = {
  /**
   * Optional Facebook standard event to fire in addition to PageView.
   * Use "Lead" on the thank-you page so FB Ads Manager can optimize
   * campaigns toward form completions.
   */
  event?: 'Lead' | 'Contact' | 'Purchase';
};

export default function AFSMetaPixel({ event }: Props) {
  return (
    <>
      <Script id="afs-meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${AFS_META_PIXEL_ID}');
          fbq('track', 'PageView');
          ${event ? `fbq('track', '${event}');` : ''}
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${AFS_META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
