/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf7f7',
          100: '#fbeeef',
          200: '#f6dde0',
          300: '#efc5ca',
          400: '#e6a6ae',
          500: '#d9868f',
          600: '#c46b76',
          700: '#a44f5c',
          800: '#82404b',
          900: '#5f2f37',
        },
        champagne: {
          50: '#fbf7ee',
          100: '#f5ecd6',
          200: '#ebd9ae',
          300: '#dfc389',
          400: '#d2ac67',
          500: '#c19a4f',
          600: '#a6803d',
          700: '#86662f',
          800: '#6a5025',
          900: '#4d3a1c',
        },
        ivory: {
          50: '#fffdf9',
          100: '#fdfaf3',
          200: '#f8f3e8',
          300: '#f1e9d9',
        },
        beige: {
          100: '#f3ebe0',
          200: '#e9dccb',
          300: '#d9c6ad',
          400: '#c4ab8c',
        },
        ink: {
          500: '#7a6a6d',
          600: '#5e5054',
          700: '#463a3d',
          800: '#30272a',
          900: '#1f1a1c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'hero-zoom': 'heroZoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
