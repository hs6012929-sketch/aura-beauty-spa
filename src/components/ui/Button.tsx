import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'light';
type Size = 'sm' | 'md';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-blush-700 text-white shadow-lg shadow-blush-900/20 hover:bg-blush-800',
  secondary: 'border border-champagne-600 text-champagne-800 hover:bg-champagne-50',
  light: 'border border-white/70 text-white backdrop-blur-sm hover:bg-white hover:text-ink-900',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
};

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
