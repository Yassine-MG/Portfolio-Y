/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        silver: '#abbaab',
        darkGray : '#1b1b1b',
        golde : '#fac156',
        orange:'#b78092',
        beige:'#dae0da',
        darkPink:"#6f537a"
      }
    },
  },
  plugins: [],
}
