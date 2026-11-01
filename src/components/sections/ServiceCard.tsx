import Button from '@/components/ui/Button';
import type { Service } from '@/data/salon';

interface ServiceCardProps {
  service: Service;
  onBook: (serviceName: string) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-ivory-50 ring-1 ring-beige-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          decoding="async"
          width={940}
          height={650}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory-50/95 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink-800">
          {service.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl text-ink-900">{service.name}</h3>
          <span className="shrink-0 font-serif text-2xl font-medium text-champagne-700">€{service.price}</span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-[1.5] text-ink-600">{service.description}</p>
        <Button size="sm" variant="secondary" onClick={() => onBook(service.name)} href="#booking" className="mt-6 self-start">
          Book this service
        </Button>
      </div>
    </article>
  );
}
