import { BadgeCheck, Heart, Sparkles, type LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_IMAGE } from '@/data/salon';

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: Heart,
    title: 'Deep Relaxation',
    text: 'Quiet, softly lit rooms and unhurried rituals designed to let you truly unwind.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Care',
    text: 'Trained specialists who listen first, then tailor every treatment to you.',
  },
  {
    icon: Sparkles,
    title: 'Beauty Treatments',
    text: 'From hair and skin to nails and bridal artistry, every service is crafted with precision.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-y scroll-mt-20 bg-ivory-100">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div
            className="absolute inset-0 hidden translate-x-4 translate-y-4 rounded-[2.5rem] border border-champagne-400/70 sm:block"
            aria-hidden="true"
          />
          <img
            src={ABOUT_IMAGE.image}
            alt={ABOUT_IMAGE.alt}
            loading="lazy"
            decoding="async"
            width={940}
            height={650}
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-ink-900/15 transition-transform duration-700 hover:scale-[1.02] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="A Luxury Destination for Beauty and Rest"
            description="Aura Beauty & Spa is a sanctuary where refined beauty meets genuine relaxation. We combine expert hands, premium products and a serene atmosphere so every visit feels like a restorative escape."
          />

          <ul className="mt-10 space-y-6">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-800">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ink-900">{title}</h3>
                  <p className="mt-1 text-ink-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button href="#treatments" variant="secondary" className="mt-10">
            Discover Our Treatments
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
