interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: SectionHeadingProps) {
  const isLight = tone === 'light';
  const isCenter = align === 'center';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <p
        className={`mb-5 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] ${
          isLight ? 'text-champagne-200' : 'text-champagne-700'
        }`}
      >
        {isCenter && <span className="h-px w-8 bg-current" aria-hidden="true" />}
        {eyebrow}
        <span className="h-px w-8 bg-current" aria-hidden="true" />
      </p>
      <h2
        className={`font-serif text-4xl leading-[1.15] sm:text-5xl ${
          isLight ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-[1.5] sm:text-lg ${
            isLight ? 'text-ivory-200' : 'text-ink-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
