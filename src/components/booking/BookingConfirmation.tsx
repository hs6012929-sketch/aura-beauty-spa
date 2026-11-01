import { CalendarDays, CheckCircle2, Clock, Mail, Phone, Scissors } from 'lucide-react';
import Button from '@/components/ui/Button';
import { formatDisplayDate, type BookingSummary } from '@/components/booking/bookingUtils';

interface BookingConfirmationProps {
  booking: BookingSummary;
  onReset: () => void;
}

export default function BookingConfirmation({ booking, onReset }: BookingConfirmationProps) {
  const details = [
    { icon: Scissors, label: 'Service', value: booking.service },
    { icon: CalendarDays, label: 'Date', value: formatDisplayDate(booking.date) },
    { icon: Clock, label: 'Time', value: booking.time },
    { icon: Mail, label: 'Email', value: booking.email },
    { icon: Phone, label: 'Phone', value: booking.phone },
  ];

  return (
    <div className="animate-fade-up text-center" role="status">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-champagne-100 text-champagne-800">
        <CheckCircle2 className="h-10 w-10" strokeWidth={1.25} aria-hidden="true" />
      </span>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-champagne-700">Demo Booking Confirmed</p>
      <h3 className="mt-3 text-4xl text-ink-900">Thank you, {booking.name.split(' ')[0]}</h3>
      <p className="mx-auto mt-4 max-w-md text-ink-600">
        Your demo booking request has been created. Please note that this is a demonstration and no appointment has
        been sent to or confirmed by a real salon.
      </p>

      <div className="mt-8 rounded-2xl bg-ivory-100 px-6 py-5 text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-500">Reference</p>
        <p className="mt-1 font-serif text-2xl tracking-[0.15em] text-ink-900">{booking.reference}</p>
      </div>

      <ul className="mt-6 divide-y divide-beige-200 rounded-2xl border border-beige-200 text-left">
        {details.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-center gap-4 px-5 py-4">
            <Icon className="h-5 w-5 shrink-0 text-champagne-700" strokeWidth={1.5} aria-hidden="true" />
            <span className="w-20 shrink-0 text-sm text-ink-500">{label}</span>
            <span className="min-w-0 flex-1 truncate font-medium text-ink-900">{value}</span>
          </li>
        ))}
      </ul>

      <Button variant="secondary" onClick={onReset} className="mt-8 w-full sm:w-auto">
        Make Another Booking
      </Button>
    </div>
  );
}
