// tailwind.config.js

import { log } from 'three/tsl';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)'
      },
      backgroundImage: {
        'fondo-web': `url('/src/assets/fondoWeb.jpg')`,
      },
      fontFamily: {
        brand: ['var(--font-brand)'],
        body: ['var(--font-body)'],
        logo: ['var(--font-logo)'],
      },
    },
  },
  plugins: [],
}