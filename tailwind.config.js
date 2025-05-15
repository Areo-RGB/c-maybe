/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "class", // or 'media' for system preference
  theme: {
    extend: {
      colors: {
        // Map Chakra UI colors to Tailwind colors
        brand: {
          50: '#E9E3FF',
          100: '#C0B8FE',
          200: '#A195FD',
          300: '#8171FC',
          400: '#7551FF', // Primary brand color
          500: '#422AFB',
          600: '#3311DB',
          700: '#2111A5',
          800: '#190793',
          900: '#11047A',
        },
        secondaryGray: {
          100: '#E0E5F2',
          200: '#E1E9F8',
          300: '#F4F7FE',
          400: '#E9EDF7',
          500: '#8F9BBA',
          600: '#A3AED0',
          700: '#707EAE',
          800: '#707EAE',
          900: '#1B2559',
        },
        navy: {
          50: '#d0dcfb',
          100: '#aac0fe',
          200: '#a3b9f8',
          300: '#728fea',
          400: '#3652ba',
          500: '#1b3bbb',
          600: '#24388a',
          700: '#1B254B',
          800: '#111c44',
          900: '#0b1437',
        },
      },
      boxShadow: {
        'light': '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
        'dark': '14px 17px 40px 4px rgba(112, 144, 176, 0.06)',
      },
      borderRadius: {
        'card': '20px',
      },
    },
  },
  plugins: [],
} 