import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/data/salon';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export default function MobileMenu({ open, onClose, onBookNow }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 bg-ivory-50 transition-all duration-500 xl:hidden ${
        open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
    >
      <nav aria-label="Mobile navigation" className="flex h-full flex-col justify-center px-8 pb-12 pt-24">
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block py-3 font-serif text-3xl text-ink-900 transition-colors hover:text-champagne-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          href="#booking"
          onClick={() => {
            onBookNow();
            onClose();
          }}
          className="mt-10 w-full"
        >
          Book Now
        </Button>
      </nav>
    </div>
  );
}
