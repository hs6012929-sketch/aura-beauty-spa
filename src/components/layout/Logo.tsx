import { Flower2 } from 'lucide-react';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export default function Logo({ tone = 'dark' }: LogoProps) {
  const isLight = tone === 'light';

  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 ${
          isLight ? 'border-champagne-300 text-champagne-200' : 'border-champagne-600 text-champagne-700'
        }`}
      >
        <Flower2 className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl font-medium tracking-[0.22em] transition-colors duration-500 ${
            isLight ? 'text-white' : 'text-ink-900'
          }`}
        >
          AURA
        </span>
        <span
          className={`mt-1.5 text-[0.6rem] tracking-[0.35em] transition-colors duration-500 ${
            isLight ? 'text-champagne-200' : 'text-champagne-700'
          }`}
        >
          BEAUTY &amp; SPA
        </span>
      </span>
    </span>
  );
}
