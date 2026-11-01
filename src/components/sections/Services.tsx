import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/sections/ServiceCard';
import { SERVICES } from '@/data/salon';

interface ServicesProps {
  onBook: (serviceName: string) => void;
}

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Signature Beauty Services"
            description="Each service is performed by our specialists with premium products, careful attention and a relaxed, personal touch."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 5) * 80} className="h-full">
              <ServiceCard service={service} onBook={onBook} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
