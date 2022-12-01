/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo-2': '"Exo 2", sans-serif;',
      },
      colors: {
        ...colors,
        'primary-dark-light': 'rgba(76, 224, 210, 1)',
        'accent-dark-light': 'rgba(249, 205, 77, 1)',
        'neutral-50': 'rgba(242, 242, 242, 1)',
        'neutral-400': 'rgba(197, 197, 197, 1)',
        'neutral-900': 'rgba(8, 15, 15, 1)',
      },
      width: {
        'container': 'min(1200px, 100% - 2rem)',
      },
      minHeight: {
        'section': '90vh',
      },
      gridTemplateColumns: {
        'sm-lg': '486px 1fr'
      }
    },
  },
  plugins: [],
}
