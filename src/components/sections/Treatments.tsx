import { Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { TREATMENTS, type Treatment } from '@/data/salon';

interface TreatmentsProps {
  onBook: (serviceName: string) => void;
}

function TreatmentRow({ treatment, reversed, onBook }: { treatment: Treatment; reversed: boolean; onBook: (serviceName: string) => void }) {
  return (
    <div
      className={`flex flex-col gap-10 lg:items-center lg:gap-20 ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <Reveal className="lg:w-1/2">
        <img
          src={treatment.image}
          alt={treatment.alt}
          loading="lazy"
          decoding="async"
          width={940}
          height={650}
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl shadow-ink-900/10 transition-transform duration-700 hover:scale-[1.02]"
        />
      </Reveal>
      <Reveal delay={120} className="lg:w-1/2">
        <h3 className="text-4xl text-ink-900 sm:text-5xl">{treatment.title}</h3>
        <p className="mt-6 text-ink-600">{treatment.description}</p>
        <ul className="mt-8 space-y-3">
          {treatment.highlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-ink-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-champagne-100 text-champagne-800">
                <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        {treatment.bookService ? (
          <Button variant="secondary" href="#booking" onClick={() => onBook(treatment.bookService!)} className="mt-10">
            Book this treatment
          </Button>
        ) : (
          <Button variant="secondary" href="#contact" className="mt-10">
            Enquire about packages
          </Button>
        )}
      </Reveal>
    </div>
  );
}

export default function Treatments({ onBook }: TreatmentsProps) {
  return (
    <section id="treatments" className="section-y scroll-mt-20 bg-ivory-100">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Special Treatments"
            title="Rituals for Body, Hair and Skin"
            description="Indulgent signature experiences that go beyond the everyday, designed to restore balance from head to toe."
          />
        </Reveal>

        <div className="mt-20 space-y-24">
          {TREATMENTS.map((treatment, index) => (
            <TreatmentRow key={treatment.id} treatment={treatment} reversed={index % 2 === 1} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}
