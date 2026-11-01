import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, ShieldAlert } from 'lucide-react';
import BookingConfirmation from '@/components/booking/BookingConfirmation';
import BookingForm from '@/components/booking/BookingForm';
import type { BookingPreset, BookingSummary } from '@/components/booking/bookingUtils';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface BookingSectionProps {
  preset: BookingPreset;
}

const STEPS = [
  'Choose your service and preferred date',
  'Pick one of the available time slots',
  'Confirm with your contact details',
];

export default function BookingSection({ preset }: BookingSectionProps) {
  const [confirmed, setConfirmed] = useState<BookingSummary | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (confirmed) cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [confirmed]);

  return (
    <section id="booking" className="section-y scroll-mt-20 bg-ivory-100">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Book an Appointment"
            title="Reserve Your Moment of Calm"
            description="Select a service, choose a date and time, and tell us a little about yourself. Our booking flow is validated as you go."
          />

          <div className="mt-10 flex gap-4 rounded-2xl border border-champagne-300 bg-champagne-50 p-5">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-champagne-800" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-sm leading-[1.5] text-ink-800">
              <span className="font-medium text-ink-900">Demo booking system.</span> This form is a front-end
              demonstration only. Requests are not sent to a salon and no appointment is created.
            </p>
          </div>

          <ol className="mt-10 space-y-5">
            {STEPS.map((step, index) => (
              <li key={step} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush-700 font-serif text-lg text-white">
                  {index + 1}
                </span>
                <span className="text-ink-700">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-center gap-3 text-sm text-ink-600">
            <CalendarCheck className="h-5 w-5 text-champagne-700" strokeWidth={1.5} aria-hidden="true" />
            Bookings open up to 60 days ahead. We are closed on Sundays.
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div ref={cardRef} className="scroll-mt-28 rounded-[2rem] bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-beige-200 sm:p-10">
            {confirmed ? (
              <BookingConfirmation booking={confirmed} onReset={() => setConfirmed(null)} />
            ) : (
              <BookingForm key={preset.key} initialService={preset.service} onConfirm={setConfirmed} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
