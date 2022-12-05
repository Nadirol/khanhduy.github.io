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
        'primary-dark-regular': 'rgba(34, 170, 161, 1)',
        'accent-dark-light': 'rgba(249, 205, 77, 1)',
        'neutral-50': 'rgba(242, 242, 242, 1)',
        'neutral-200': 'rgba(219, 219, 219, 1)',
        'neutral-400': 'rgba(197, 197, 197, 1)',
        'neutral-500': 'rgba(158, 158, 158, 1)',
        'neutral-800': 'rgba(32, 34, 39, 1)',
        'neutral-900': 'rgba(8, 15, 15, 1)',
        'filter-dark': 'rgba(8, 15, 15, 0.3)',
        'light-yellow': 'rgba(255, 212, 130, 1)',
        'regular-yellow': 'rgba(221, 172, 77, 1)',
      },
      width: {
        'container': 'min(1200px, 100% - 2rem)',
        'form': 'min(776px, 100% - 1rem)'
      },
      minHeight: {
        'section': '90vh',
      },
      gridTemplateColumns: {
        'base-lg': '486px 1fr',
        'sm-lg': '400px 1fr',
      },
      screens: {
        '-xl': { 'max': '1279px' } ,
        '-md': { 'max': '767px' } ,
        '-xs': { 'max': '300px' } ,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
