import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import Button from '@/components/ui/Button';
import { NAV_LINKS, NAV_SECTION_IDS } from '@/data/salon';
import { useActiveSection } from '@/hooks/useActiveSection';

interface HeaderProps {
  onBookNow: () => void;
}

export default function Header({ onBookNow }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-ivory-50/95 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <a href="#home" onClick={closeMenu} aria-label="AURA Beauty and Spa, back to top" className="shrink-0">
            <Logo tone={solid ? 'dark' : 'light'} />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative py-1 text-sm tracking-wide after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-champagne-500 after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } ${
                    solid
                      ? isActive
                        ? 'text-champagne-800'
                        : 'text-ink-800 hover:text-champagne-700'
                      : 'text-white/90 hover:text-white'
                  } transition-colors`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden xl:block">
              <Button href="#booking" onClick={onBookNow} size="sm" variant={solid ? 'primary' : 'light'}>
                Book Now
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden ${
                solid ? 'text-ink-900 hover:bg-beige-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} onBookNow={onBookNow} />
    </>
  );
}
