/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'warm-white': '#F9F7F5',
        'charcoal': '#2A2A2A',
        'gold': '#C4A962',
        'gold-dark': '#B09850',
        'border-light': '#E0DDD8',
        'section-bg': '#F2F0ED',
      },
    },
  },
  plugins: [],
};
