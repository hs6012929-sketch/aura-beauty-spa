import { useState } from 'react';
import BookingSection from '@/components/booking/BookingSection';
import type { BookingPreset } from '@/components/booking/bookingUtils';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Treatments from '@/components/sections/Treatments';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

function App() {
  const [bookingPreset, setBookingPreset] = useState<BookingPreset>({ service: '', key: 0 });

  const handleBook = (service = '') => {
    setBookingPreset((prev) => ({ service, key: prev.key + 1 }));
  };

  return (
    <div className="overflow-x-clip">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-ivory-50 px-5 py-3 text-sm font-medium text-ink-900 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header onBookNow={() => handleBook()} />
      <main id="main">
        <Hero />
        <About />
        <Services onBook={handleBook} />
        <Treatments onBook={handleBook} />
        <Pricing onBook={handleBook} />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <BookingSection preset={bookingPreset} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
