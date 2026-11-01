import { BadgeCheck, Gem, Heart, Leaf, Sparkles, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface Reason {
  icon: LucideIcon;
  title: string;
  text: string;
}

const REASONS: Reason[] = [
  {
    icon: BadgeCheck,
    title: 'Professional Beauty Specialists',
    text: 'Continually trained artists who bring technical skill and an eye for detail to every appointment.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    text: 'We work with carefully selected, high-quality formulas that are kind to hair and skin.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Treatments',
    text: 'Every ritual starts with a conversation, so the result is shaped around you and your goals.',
  },
  {
    icon: Leaf,
    title: 'Relaxing Atmosphere',
    text: 'Soft light, calming scents and considered design create a space where you can truly breathe.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    text: 'Your comfort and happiness guide every decision, from the first greeting to the last touch.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-y bg-blush-50">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Aura Difference"
            description="Beauty is personal. These are the promises we keep for every guest who walks through our doors."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 90} className="h-full">
              <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-blush-100 transition-shadow duration-500 hover:shadow-xl hover:shadow-blush-900/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-blush-800">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-[1.5] text-ink-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
