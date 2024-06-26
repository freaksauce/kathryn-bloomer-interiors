/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', "sans-serif"],
      cursive: ['Allison', 'cursive'],
      serif: ['Bodoni Moda', 'serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
    extend: {
      colors: {
        beige: '#e2dfdb',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
