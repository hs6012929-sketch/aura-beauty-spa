import { useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import FormField from '@/components/booking/FormField';
import { inputClass } from '@/components/booking/fieldStyles';

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

const EMPTY: ContactValues = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: ContactValues) {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters so we can help.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const errors = submitted ? validate(values) : {};

  const update = (field: keyof ContactValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setSubmitted(true);
    const firstInvalid = (['name', 'email', 'message'] as const).find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full animate-fade-up flex-col items-center justify-center rounded-[2rem] bg-white p-10 text-center shadow-xl shadow-ink-900/5 ring-1 ring-beige-200" role="status">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-champagne-700">Demo Form</p>
        <h3 className="mt-4 text-4xl text-ink-900">Thank you, {values.name.trim().split(' ')[0]}</h3>
        <p className="mt-4 max-w-md text-ink-600">
          This is a demonstration form, so your message was not sent to a salon. In a live website it would reach our team.
        </p>
        <Button variant="secondary" onClick={() => { setValues(EMPTY); setSubmitted(false); setSent(false); }} className="mt-8">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-[2rem] bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-beige-200 sm:p-10">
      <div>
        <h3 className="text-3xl text-ink-900">Send Us a Message</h3>
        <p className="mt-2 text-sm text-ink-500">Questions about treatments or packages? We are happy to help.</p>
      </div>
      <FormField id="contact-name" label="Your Name" required error={errors.name}>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={inputClass(!!errors.name)}
        />
      </FormField>
      <FormField id="contact-email" label="Email Address" required error={errors.email}>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={inputClass(!!errors.email)}
        />
      </FormField>
      <FormField id="contact-message" label="Message" required error={errors.message}>
        <textarea
          id="contact-message"
          rows={4}
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${inputClass(!!errors.message)} resize-y`}
        />
      </FormField>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
