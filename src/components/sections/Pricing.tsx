import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICE_CATEGORIES, SERVICES } from '@/data/salon';

interface PricingProps {
  onBook: (serviceName: string) => void;
}

export default function Pricing({ onBook }: PricingProps) {
  return (
    <section id="pricing" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Price List"
            title="Transparent Prices"
            description="All prices are shown in euros (EUR). Choose a service and book your preferred time in a few clicks."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICE_CATEGORIES.map((category, index) => {
            const items = SERVICES.filter((service) => service.category === category);
            return (
              <Reveal key={category} delay={index * 80} className="h-full">
                <article className="h-full rounded-3xl border border-beige-200 bg-ivory-50 p-8 sm:p-10">
                  <h3 className="font-serif text-3xl text-ink-900">{category}</h3>
                  <ul className="mt-6 divide-y divide-beige-200">
                    {items.map((service) => (
                      <li key={service.id} className="flex items-center gap-4 py-5">
                        <span className="flex-1 font-medium text-ink-800">{service.name}</span>
                        <span className="font-serif text-2xl font-medium text-champagne-700">€{service.price}</span>
                        <Button size="sm" variant="secondary" href="#booking" onClick={() => onBook(service.name)}>
                          Book
                        </Button>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
