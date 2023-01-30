/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#ff8906',
      'navy' : '#0f0e17',
      'white': '#fffffe',
      'gray': '#a7a9be',
      'gray-light': '#E8E8E8',
      'off-white': '#faf9f6',
    },
    extend: {},
  },
  plugins: [],
}