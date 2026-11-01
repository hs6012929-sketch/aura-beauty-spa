import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HERO } from '@/data/salon';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={HERO.image}
        alt={HERO.alt}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/55 to-ink-900/25" aria-hidden="true" />

      <div className="container-x relative z-10 pb-24 pt-40 md:pb-28">
        <p
          className="animate-fade-up text-xs font-medium uppercase tracking-[0.35em] text-champagne-200 sm:text-sm"
          style={{ animationDelay: '100ms' }}
        >
          Luxury Beauty &amp; Spa
        </p>
        <h1
          className="mt-6 max-w-3xl animate-fade-up font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '200ms' }}
        >
          Discover Your <span className="italic text-blush-200">Natural</span> Beauty
        </h1>
        <p
          className="mt-6 max-w-xl animate-fade-up text-lg text-ivory-100/90 sm:text-xl"
          style={{ animationDelay: '350ms' }}
        >
          Where Beauty Meets Relaxation
        </p>
        <div className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row" style={{ animationDelay: '500ms' }}>
          <Button href="#services" variant="light">
            Explore Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#booking" variant="primary">
            Book Appointment
          </Button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About Us"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown className="h-7 w-7" aria-hidden="true" />
      </a>
    </section>
  );
}
