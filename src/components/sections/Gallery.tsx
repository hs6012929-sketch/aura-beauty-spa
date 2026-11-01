import { useState } from 'react';
import GalleryLightbox from '@/components/sections/GalleryLightbox';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { GALLERY, GALLERY_FILTERS, type GalleryItem } from '@/data/salon';

type Filter = (typeof GALLERY_FILTERS)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items: GalleryItem[] = filter === 'All' ? GALLERY : GALLERY.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="section-y scroll-mt-20 bg-ivory-100">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A Glimpse Inside Aura"
            description="Explore our interiors, hair artistry, nail craft and skincare rituals."
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter gallery by category">
          {GALLERY_FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => {
                setFilter(option);
                setActiveIndex(null);
              }}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                filter === option
                  ? 'bg-blush-700 text-white shadow-md shadow-blush-900/20'
                  : 'bg-white text-ink-700 ring-1 ring-beige-300 hover:ring-champagne-500'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View photo: ${item.alt}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-beige-200"
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                width={940}
                height={650}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-900/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-left text-sm text-white">{item.category}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          items={items}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
