/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffe581',
          light: '#feead1',
        },
        secondary: {
          DEFAULT: '#ad3f13'
        },
        green: {
          light: '#00b900',
          dark: '#1c6b00'
        }
      }
    },
  },
  plugins: [],
};
