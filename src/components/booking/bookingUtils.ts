import { SERVICES } from '@/data/salon';

export const TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const MAX_DAYS_AHEAD = 60;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[0-9\s()-]+$/;
const NAME_PATTERN = /^\p{L}[\p{L}\s'.-]*$/u;
const MESSAGE_LIMIT = 500;

export interface BookingValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export type BookingErrors = Partial<Record<keyof BookingValues, string>>;

export interface BookingSummary extends BookingValues {
  reference: string;
}

export interface BookingPreset {
  service: string;
  key: number;
}

export const EMPTY_BOOKING: BookingValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

export function toDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getMinDateValue() {
  return toDateInputValue(new Date());
}

export function getMaxDateValue() {
  const max = new Date();
  max.setDate(max.getDate() + MAX_DAYS_AHEAD);
  return toDateInputValue(max);
}

function parseDateInput(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function isSunday(value: string) {
  return parseDateInput(value).getDay() === 0;
}

export function getDaySchedule(value: string) {
  if (isSunday(value)) return { closed: true, slots: [] as { time: string; available: boolean }[] };
  const dayOfMonth = parseDateInput(value).getDate();
  return {
    closed: false,
    slots: TIME_SLOTS.map((time, index) => ({
      time,
      available: (dayOfMonth + index * 7) % 4 !== 0,
    })),
  };
}

export function formatDisplayDate(value: string) {
  return parseDateInput(value).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function createReference() {
  return `AURA-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();

  if (name.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = 'Your name can only contain letters, spaces, apostrophes, periods and hyphens.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address, for example name@example.com.';
  }

  const digitCount = phone.replace(/\D/g, '').length;
  if (!phone) {
    errors.phone = 'Please enter your phone number.';
  } else if (!PHONE_PATTERN.test(phone) || digitCount < 7 || digitCount > 15) {
    errors.phone = 'Please enter a valid phone number with 7 to 15 digits.';
  }

  if (!values.service || !SERVICES.some((service) => service.name === values.service)) {
    errors.service = 'Please select a service.';
  }

  const today = getMinDateValue();
  if (!values.date) {
    errors.date = 'Please select a date.';
  } else if (values.date < today) {
    errors.date = 'Please choose today or a future date.';
  } else if (values.date > getMaxDateValue()) {
    errors.date = 'Online bookings open up to 60 days in advance.';
  } else if (isSunday(values.date)) {
    errors.date = 'We are closed on Sundays. Please choose another day.';
  }

  if (!values.time) {
    errors.time = 'Please select an available time.';
  } else if (!errors.date) {
    const slot = getDaySchedule(values.date).slots.find((s) => s.time === values.time);
    if (!slot?.available) errors.time = 'That time is not available. Please choose another time.';
  }

  if (values.message.length > MESSAGE_LIMIT) {
    errors.message = `Please keep your message under ${MESSAGE_LIMIT} characters.`;
  }

  return errors;
}
