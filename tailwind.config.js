/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FCF400',
        'green': '#005E23',
        'red': '#ED0030',
        'gray': '#AEB4A9',
      },
    },
  },
  plugins: [],
} 