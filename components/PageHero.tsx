import Link from 'next/link';

interface PageHeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoLink?: string;
  logoAlt?: string;
}

export default function PageHero({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  badge,
  image,
  imageAlt,
  logo,
  logoLink,
  logoAlt,
}: PageHeroProps) {
  const hasRightColumn = image || logo;

  return (
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Subtle background pattern when no right-column visual */}
      {!hasRightColumn && (
        <div className="absolute inset-0">
          <img
            src="/images/tensar-geogrid-blog-northern-ohio.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/85 to-[#1a1a1a]/50" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className={hasRightColumn ? "grid md:grid-cols-2 gap-12 items-center" : ""}>
          <div className={hasRightColumn ? "" : "max-w-3xl"}>
            {badge && (
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>
            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                {ctaText && ctaLink && (
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                  >
                    {ctaText}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link
                    href={secondaryCtaLink}
                    className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors duration-200 group"
                    download={secondaryCtaLink.endsWith('.pdf')}
                  >
                    <span>{secondaryCtaText}</span>
                    <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="flex justify-center items-start">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="w-full max-w-md h-auto max-h-[280px] object-contain"
                />
              </div>
            </div>
          )}
          {logo && !image && (
            <div className="flex justify-center items-center">
              {logoLink ? (
                <Link href={logoLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img
                    src={logo}
                    alt={logoAlt || 'Company Logo'}
                    className="w-full max-w-sm h-auto"
                  />
                </Link>
              ) : (
                <img
                  src={logo}
                  alt={logoAlt || 'Company Logo'}
                  className="w-full max-w-sm h-auto"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
