import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { SALON_INFO } from '@/data/salon';

const CONTACT_ITEMS = [
  { icon: MapPin, label: 'Address', value: SALON_INFO.address, href: undefined },
  { icon: Phone, label: 'Phone', value: SALON_INFO.phone, href: `tel:${SALON_INFO.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: SALON_INFO.email, href: `mailto:${SALON_INFO.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="We Would Love to Hear From You"
            description="Visit us, call, or send a message. Contact details below are placeholders for this demonstration website."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-6">
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-5 rounded-3xl bg-ivory-100 p-6 ring-1 ring-beige-200">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-800">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-500">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block break-words font-medium text-ink-900 transition-colors hover:text-champagne-700">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-ink-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-3xl bg-ivory-100 p-6 ring-1 ring-beige-200">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-champagne-700" strokeWidth={1.5} aria-hidden="true" />
                <p className="font-serif text-2xl text-ink-900">Opening Hours</p>
              </div>
              <dl className="mt-5 divide-y divide-beige-200">
                {SALON_INFO.hours.map((row) => (
                  <div key={row.label} className="flex justify-between py-3 text-sm">
                    <dt className="text-ink-600">{row.label}</dt>
                    <dd className="font-medium text-ink-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex items-center justify-between rounded-3xl bg-ivory-100 p-6 ring-1 ring-beige-200">
              <div>
                <p className="font-serif text-2xl text-ink-900">Social Media</p>
                <p className="mt-1 text-xs text-ink-500">Demo placeholder links</p>
              </div>
              <div className="flex gap-3">
                {SALON_INFO.socials.map(({ label, href }) => {
                  const Icon = label === 'Instagram' ? Instagram : Facebook;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (placeholder link)`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-800 ring-1 ring-beige-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-champagne-700 hover:ring-champagne-500"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
