/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: '#13183F',
        'primary-light': '#666CA3',
        secondary: '#F74780',
        'seconday-light': '#FFA7C3',
        'se-gray': '#83869A',
      },
    },
  },
  plugins: [],
};
