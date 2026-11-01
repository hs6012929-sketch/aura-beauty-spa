import type { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

export default function FormField({ id, label, error, required = false, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-800">
        {label}
        {required && (
          <span className="ml-1 text-blush-800" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-normal text-blush-800" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
