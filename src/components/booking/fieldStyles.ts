export const inputClass = (hasError: boolean) =>
  `w-full rounded-2xl border bg-ivory-50 px-4 py-3.5 text-ink-900 placeholder:text-ink-500 transition-colors duration-200 focus:border-champagne-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-champagne-200 disabled:cursor-not-allowed disabled:bg-beige-100 disabled:text-ink-500 ${
    hasError ? 'border-blush-600' : 'border-beige-300'
  }`;
