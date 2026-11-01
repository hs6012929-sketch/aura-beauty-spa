import { useState } from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import Modal from '@/components/ui/Modal';
import { LEGAL_DOCUMENTS, type LegalDocument } from '@/data/legal';
import { NAV_LINKS, SALON_INFO, SERVICE_CATEGORIES } from '@/data/salon';

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState<LegalDocument | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ivory-200">
      <div className="container-x grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="space-y-6">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-[1.5] text-ivory-300">
            A luxury beauty destination where refined care meets genuine relaxation.
          </p>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory-300">Social media (demo placeholders)</p>
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne-300 hover:text-champagne-200"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </a>
              );
            })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl text-white">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-champagne-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-white">Services</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {SERVICE_CATEGORIES.map((category) => (
              <li key={category}>
                <a href="#services" className="transition-colors hover:text-champagne-200">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-white">Contact</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" aria-hidden="true" />
              <span>{SALON_INFO.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" aria-hidden="true" />
              <span>{SALON_INFO.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" aria-hidden="true" />
              <a href={`mailto:${SALON_INFO.email}`} className="break-all transition-colors hover:text-champagne-200">
                {SALON_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-xs text-ivory-300 sm:flex-row">
          <p>© {year} AURA BEAUTY &amp; SPA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalOpen('privacy')}
              className="transition-colors hover:text-champagne-200"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalOpen('terms')}
              className="transition-colors hover:text-champagne-200"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {legalOpen && (
        <Modal title={LEGAL_DOCUMENTS[legalOpen].title} onClose={() => setLegalOpen(null)}>
          <div className="space-y-8 text-ink-700">
            {LEGAL_DOCUMENTS[legalOpen].sections.map((section) => (
              <section key={section.title}>
                <h3 className="font-serif text-xl text-ink-900">{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-3 leading-[1.5]">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Modal>
      )}
    </footer>
  );
}
