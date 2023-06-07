/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './app/**/*.js', // Note the addition of the `app` directory.
    './pages/**/*.js',
    './components/about/**/*.js',
    './components/contact/**/*.js',
    './components/features/**/*.js',
    './components/hero/**/*.js',
    './components/navbar/**/*.js',
    
 
    // Or if using `src` directory:
    './src/**/*.js',
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