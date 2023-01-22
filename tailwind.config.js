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
        orange:'#bba3c4',
        beige:'#dae0da',
        darkPink:"#6f537a"
      }
    },
  },
  plugins: [],
}
