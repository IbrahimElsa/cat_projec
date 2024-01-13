/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earthy-green': '#8DA08D',
        'soft-coral': '#FFAB91',
        'dark-gray': '#4A4A4A',
        'soft-cream': '#F5F1E6',
        'bright-green': '#e0ffe2',
        'mid-green': '#8da08d',
      },
    },
  },
  plugins: [],
}