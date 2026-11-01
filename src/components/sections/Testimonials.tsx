import { Quote, Star } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/data/salon';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Words From Our Guests"
            description="Sample testimonials written for this demonstration. They are not real customer reviews."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={(index % 3) * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-ivory-100 p-8 ring-1 ring-beige-200 transition-transform duration-500 hover:-translate-y-1">
                <Quote className="h-8 w-8 text-champagne-500" strokeWidth={1.25} aria-hidden="true" />
                <div className="mt-5 flex gap-1" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-champagne-500 text-champagne-500" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-[1.45] text-ink-800">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-beige-300 pt-5">
                  <p className="font-medium text-ink-900">{testimonial.name}</p>
                  <p className="text-sm text-ink-500">Sample client, {testimonial.service}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
