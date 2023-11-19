/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{.html, js}"],
  theme: {
    extend: {
      colors:{
        cbg:{
          bluegreen: 'linear-gradient(150deg, rgba(130,255,127,1) 17%, rgba(0,194,255,1) 90%)',
        },
      },
      fontFamily:{
        nunito: ['Nunito', 'sans-serif']
      },
      spacing: {
        ultra: '30rem',

      }
    },
  },
  plugins: [],
}

