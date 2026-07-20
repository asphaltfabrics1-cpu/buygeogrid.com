import { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
  eyebrow?: string;
  background?: 'white' | 'gray' | 'dark';
  className?: string;
  align?: 'left' | 'center';
}

export default function Section({
  children,
  title,
  description,
  eyebrow,
  background = 'white',
  className = '',
  align = 'center',
}: SectionProps) {
  const bgClass =
    background === 'gray'
      ? 'bg-gray-50'
      : background === 'dark'
        ? 'bg-[#1a1a1a] text-white'
        : 'bg-white';

  const isDark = background === 'dark';
  const headingColor = isDark ? 'text-white' : 'text-gray-900';
  const descColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const maxWClass = align === 'left' ? 'max-w-3xl' : 'max-w-3xl mx-auto';

  return (
    <section className={`py-20 md:py-24 px-6 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || description || eyebrow) && (
          <Reveal className={`mb-12 ${alignClass}`}>
            {eyebrow && (
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight ${headingColor}`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${descColor} ${maxWClass}`}>
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
