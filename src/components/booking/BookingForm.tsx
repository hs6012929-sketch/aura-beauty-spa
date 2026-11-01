import { useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import FormField from '@/components/booking/FormField';
import { inputClass } from '@/components/booking/fieldStyles';
import {
  EMPTY_BOOKING,
  createReference,
  getDaySchedule,
  getMaxDateValue,
  getMinDateValue,
  validateBooking,
  type BookingSummary,
  type BookingValues,
} from '@/components/booking/bookingUtils';
import { SERVICES } from '@/data/salon';

interface BookingFormProps {
  initialService: string;
  onConfirm: (summary: BookingSummary) => void;
}

const FIELD_ORDER: (keyof BookingValues)[] = ['name', 'email', 'phone', 'service', 'date', 'time', 'message'];

export default function BookingForm({ initialService, onConfirm }: BookingFormProps) {
  const [values, setValues] = useState<BookingValues>({ ...EMPTY_BOOKING, service: initialService });
  const [submitted, setSubmitted] = useState(false);

  const errors = submitted ? validateBooking(values) : {};
  const schedule = values.date ? getDaySchedule(values.date) : null;

  const update =
    (field: keyof BookingValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((prev) => ({
        ...prev,
        [field]: value,
        ...(field === 'date' ? { time: '' } : {}),
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateBooking(values);
    setSubmitted(true);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(`booking-${firstInvalid}`)?.focus();
      return;
    }
    onConfirm({
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      message: values.message.trim(),
      reference: createReference(),
    });
  };

  const timePlaceholder = !values.date
    ? 'Choose a date first'
    : schedule?.closed
      ? 'Closed on this day'
      : 'Select a time';

  const describe = (field: keyof BookingValues) => (errors[field] ? `booking-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <FormField id="booking-name" label="Full Name" required error={errors.name}>
        <input
          id="booking-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
          aria-describedby={describe('name')}
          className={inputClass(!!errors.name)}
        />
      </FormField>

      <FormField id="booking-email" label="Email Address" required error={errors.email}>
        <input
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={values.email}
          onChange={update('email')}
          aria-invalid={!!errors.email}
          aria-describedby={describe('email')}
          className={inputClass(!!errors.email)}
        />
      </FormField>

      <FormField id="booking-phone" label="Phone Number" required error={errors.phone}>
        <input
          id="booking-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+00 000 000 0000"
          value={values.phone}
          onChange={update('phone')}
          aria-invalid={!!errors.phone}
          aria-describedby={describe('phone')}
          className={inputClass(!!errors.phone)}
        />
      </FormField>

      <FormField id="booking-service" label="Select Service" required error={errors.service}>
        <select
          id="booking-service"
          name="service"
          value={values.service}
          onChange={update('service')}
          aria-invalid={!!errors.service}
          aria-describedby={describe('service')}
          className={inputClass(!!errors.service)}
        >
          <option value="">Choose a service</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name} - €{service.price}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="booking-date" label="Select Date" required error={errors.date}>
        <input
          id="booking-date"
          name="date"
          type="date"
          min={getMinDateValue()}
          max={getMaxDateValue()}
          value={values.date}
          onChange={update('date')}
          aria-invalid={!!errors.date}
          aria-describedby={describe('date')}
          className={inputClass(!!errors.date)}
        />
      </FormField>

      <FormField id="booking-time" label="Select Available Time" required error={errors.time}>
        <select
          id="booking-time"
          name="time"
          value={values.time}
          onChange={update('time')}
          disabled={!schedule || schedule.closed}
          aria-invalid={!!errors.time}
          aria-describedby={describe('time')}
          className={inputClass(!!errors.time)}
        >
          <option value="">{timePlaceholder}</option>
          {schedule &&
            !schedule.closed &&
            schedule.slots.map((slot) => (
              <option key={slot.time} value={slot.time} disabled={!slot.available}>
                {slot.time}
                {slot.available ? '' : ' (booked)'}
              </option>
            ))}
        </select>
      </FormField>

      <FormField id="booking-message" label="Additional Message" error={errors.message} className="sm:col-span-2">
        <textarea
          id="booking-message"
          name="message"
          rows={4}
          placeholder="Allergies, preferences, or anything we should know"
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={describe('message')}
          className={`${inputClass(!!errors.message)} resize-y`}
        />
      </FormField>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-500">Fields marked with * are required.</p>
        <Button type="submit" className="w-full sm:w-auto">
          Confirm Booking
        </Button>
      </div>
    </form>
  );
}
