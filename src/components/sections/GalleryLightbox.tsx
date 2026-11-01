import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '@/data/salon';

interface GalleryLightboxProps {
  items: GalleryItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const NAV_BUTTON =
  'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25';

export default function GalleryLightbox({ items, index, onIndexChange, onClose }: GalleryLightboxProps) {
  const total = items.length;
  const item = items[index];

  const goNext = useCallback(() => onIndexChange((index + 1) % total), [index, total, onIndexChange]);
  const goPrev = useCallback(() => onIndexChange((index - 1 + total) % total), [index, total, onIndexChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[60] flex flex-col bg-ink-900/95 animate-fade-in">
      <div className="flex items-center justify-between px-5 py-5 sm:px-8">
        <p className="text-sm tracking-[0.2em] text-ivory-200">
          {index + 1} / {total}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-16 pb-6 sm:px-24">
        <img
          key={item.id}
          src={item.image}
          alt={item.alt}
          className="max-h-[70vh] w-auto max-w-full animate-fade-in rounded-2xl object-contain shadow-2xl"
        />
        <button type="button" onClick={goPrev} aria-label="Previous photo" className={`${NAV_BUTTON} left-3 sm:left-8`}>
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button type="button" onClick={goNext} aria-label="Next photo" className={`${NAV_BUTTON} right-3 sm:right-8`}>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <p className="px-6 pb-8 text-center text-sm text-ivory-200">{item.alt}</p>
    </div>
  );
}
