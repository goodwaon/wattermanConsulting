/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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