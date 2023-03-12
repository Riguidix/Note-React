/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'orange': '#fFB43A',
      'blue': '#272833',
      'blue-dark': '#1C1C27',
      'red': '#E94141',
      'white': '#FCFCFC',
      'gray-dark': '#2c3e50'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Open Sans', 'serif'],
    },
  },
  plugins: [],
}