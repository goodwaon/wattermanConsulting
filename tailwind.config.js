/** @type {import('tailwindcss').Config} */


module.exports = {
  purge: [
    "./components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        green:{
        950: 'rgba(81, 164, 112, 1)',
        1050: 'rgba(18,88,62,1)'
        }
      }
    },
   
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}