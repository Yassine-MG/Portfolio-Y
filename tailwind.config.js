/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        silver: '#d1cfc6',
        darkGray : '#1b1b1b',
        golde : '#fac156',
        orange:'#5c81e7',
        beige:'#dae0da',
        darkPink:"#5d82e7"
      }
    },
  },
  plugins: [],
}
