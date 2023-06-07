/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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