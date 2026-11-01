export type ServiceCategory = 'Hair' | 'Nails' | 'Skin' | 'Brows & Lashes' | 'Body & Bridal';
export type GalleryCategory = 'Interiors' | 'Hair' | 'Nails' | 'Skincare' | 'Treatments';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  image: string;
  alt: string;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  bookService?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category: GalleryCategory;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
}

export interface NavLink {
  label: string;
  href: string;
}

const photo = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`;

export const SALON_NAME = 'AURA BEAUTY & SPA';

export const HERO = {
  image: 'https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=1920',
  alt: 'Bright luxury beauty salon with mirrors and elegant seating',
};

export const ABOUT_IMAGE = {
  image: photo(7195809),
  alt: 'Stylish salon reception with white flowers and warm decor',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Prices', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Hair',
  'Nails',
  'Skin',
  'Brows & Lashes',
  'Body & Bridal',
];

export const SERVICES: Service[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'Hair',
    description: 'Precision cuts and polished blow-dry styling shaped to your features and everyday rhythm.',
    price: 35,
    image: photo(3993290),
    alt: 'Hairdresser styling a woman’s hair in a modern salon',
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring',
    category: 'Hair',
    description: 'Bespoke colour, balayage and gloss using gentle formulas for lasting depth and shine.',
    price: 75,
    image: photo(8468126),
    alt: 'Close-up of hair highlights being applied with foil',
  },
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'Nails',
    description: 'A refined hand ritual with shaping, cuticle care, massage and your choice of finish.',
    price: 25,
    image: photo(16041439),
    alt: 'Manicurist filing a client’s nails with precision',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    category: 'Nails',
    description: 'A soothing foot soak, exfoliation and nourishing care for beautifully polished feet.',
    price: 30,
    image: photo(19695949),
    alt: 'Foot bath with pink bath salts for a relaxing pedicure',
  },
  {
    id: 'facial-treatment',
    name: 'Facial Treatment',
    category: 'Skin',
    description: 'A customised facial that cleanses, hydrates and restores radiance to tired skin.',
    price: 55,
    image: photo(37229301),
    alt: 'Woman receiving a soothing facial mask at a spa',
  },
  {
    id: 'deep-cleansing-facial',
    name: 'Deep Cleansing Facial',
    category: 'Skin',
    description: 'An intensive purifying ritual with steam, gentle extractions and a calming mask.',
    price: 65,
    image: photo(37229309),
    alt: 'Woman with cucumber slices during a spa facial',
  },
  {
    id: 'eyebrow-styling',
    name: 'Eyebrow Styling',
    category: 'Brows & Lashes',
    description: 'Expert shaping and tinting that frames your face with clean, defined arches.',
    price: 15,
    image: photo(29588096),
    alt: 'Beautician shaping a young woman’s eyebrows',
  },
  {
    id: 'eyelash-extensions',
    name: 'Eyelash Extensions',
    category: 'Brows & Lashes',
    description: 'Individually applied lash extensions for a natural, lifted look that lasts for weeks.',
    price: 60,
    image: photo(5128235),
    alt: 'Technician applying eyelash extensions in a beauty salon',
  },
  {
    id: 'relaxing-massage',
    name: 'Relaxing Massage',
    category: 'Body & Bridal',
    description: 'A full-body massage with warm oils to melt away tension and restore a sense of calm.',
    price: 50,
    image: photo(9146372),
    alt: 'Woman enjoying a calming back massage at a spa',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'Body & Bridal',
    description: 'Long-wear, photo-ready makeup designed to feel like you on your most important day.',
    price: 90,
    image: photo(20249093),
    alt: 'Bride in a sunlit park wearing elegant bridal makeup',
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'luxury-facial',
    title: 'Luxury Facial Rituals',
    description:
      'Layered facial journeys combining cleansing, massage and botanical masks. Each ritual is adapted to your skin’s needs for a visibly luminous complexion.',
    highlights: ['Skin analysis before every treatment', 'Sculpting facial massage', 'Botanical masks and serums'],
    image: photo(37229298),
    alt: 'Woman relaxing during a luxury facial treatment',
    bookService: 'Facial Treatment',
  },
  {
    id: 'hair-spa',
    title: 'Hair Spa',
    description:
      'A restorative hair spa with a warm scalp massage and nourishing treatments that leave hair soft, balanced and full of movement.',
    highlights: ['Scalp massage and steam', 'Deep conditioning mask', 'Finished with a gentle styling'],
    image: photo(38651028),
    alt: 'Woman with wavy brown hair in an elegant salon',
    bookService: 'Hair Styling',
  },
  {
    id: 'body-treatments',
    title: 'Relaxing Body Treatments',
    description:
      'Heated stones, aromatic oils and slow, intuitive massage techniques that ease muscle tension and quiet the mind.',
    highlights: ['Warm hot stone therapy', 'Aromatherapy oils', 'Quiet, candlelit rooms'],
    image: photo(6187652),
    alt: 'Therapist performing a hot stone massage',
    bookService: 'Relaxing Massage',
  },
  {
    id: 'premium-packages',
    title: 'Premium Beauty Packages',
    description:
      'Curated combinations of hair, skin, nails and body care designed for a full day of pampering or a special occasion.',
    highlights: ['Tailored to your preferences', 'Refreshments included', 'Enquire for package details'],
    image: photo(7256109),
    alt: 'Pink makeup products arranged on a soft pastel background',
  },
];

export const GALLERY_FILTERS: ('All' | GalleryCategory)[] = [
  'All',
  'Interiors',
  'Hair',
  'Nails',
  'Skincare',
  'Treatments',
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', image: photo(13068377), alt: 'Chic black and white salon interior', category: 'Interiors' },
  { id: 'g2', image: photo(7750137), alt: 'Spacious salon with leather chairs and natural light', category: 'Interiors' },
  { id: 'g3', image: photo(13068358), alt: 'Modern salon with a central beauty product display', category: 'Interiors' },
  { id: 'g4', image: photo(13068379), alt: 'Elegant nail salon with stylish furniture', category: 'Nails' },
  { id: 'g5', image: photo(3992873), alt: 'Stylist working with a client in a cozy hair salon', category: 'Hair' },
  { id: 'g6', image: photo(8468127), alt: 'Hairdresser applying colour in a salon', category: 'Hair' },
  { id: 'g7', image: photo(17697574), alt: 'Stylish woman with dyed hair against a red backdrop', category: 'Hair' },
  { id: 'g8', image: photo(4677846), alt: 'Manicurist applying nail polish during a salon treatment', category: 'Nails' },
  { id: 'g9', image: photo(37229299), alt: 'Woman enjoying a soothing facial mask', category: 'Skincare' },
  { id: 'g10', image: photo(6628644), alt: 'Woman receiving a calming massage in a serene spa', category: 'Treatments' },
  { id: 'g11', image: photo(36930354), alt: 'Detailed close-up of an eyelash extension application', category: 'Treatments' },
  { id: 'g12', image: photo(7256132), alt: 'Pink makeup brushes on a pastel background', category: 'Skincare' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Amélie R.',
    service: 'Hair Coloring',
    quote: 'The colour came out exactly as we discussed, and the whole visit felt unhurried and calm. I left feeling completely looked after.',
  },
  {
    id: 't2',
    name: 'Sofia M.',
    service: 'Deep Cleansing Facial',
    quote: 'My skin looked brighter the very next morning. The therapist explained every step and adapted the treatment to my sensitivity.',
  },
  {
    id: 't3',
    name: 'Clara T.',
    service: 'Bridal Makeup',
    quote: 'On my wedding day my makeup lasted from the ceremony to the last dance. Photos look soft, natural and exactly like me.',
  },
  {
    id: 't4',
    name: 'Nina K.',
    service: 'Relaxing Massage',
    quote: 'A genuinely peaceful atmosphere, warm towels and a massage that melted away a week of tension. I already booked my next visit.',
  },
  {
    id: 't5',
    name: 'Elena D.',
    service: 'Eyelash Extensions',
    quote: 'Natural, lightweight and beautifully applied. I love that the team takes the time to find a style that suits my eyes.',
  },
  {
    id: 't6',
    name: 'Lucia F.',
    service: 'Manicure & Pedicure',
    quote: 'Meticulous attention to detail and a lovely selection of finishes. It is my favourite hour of the month.',
  },
];

export const SALON_INFO = {
  email: 'hello@example.com',
  phone: '+00 000 000 0000',
  address: '[Street Address], [City], [Postcode]',
  hours: [
    { label: 'Monday – Friday', value: '09:00 – 19:00' },
    { label: 'Saturday', value: '09:00 – 17:00' },
    { label: 'Sunday', value: 'Closed' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
};
