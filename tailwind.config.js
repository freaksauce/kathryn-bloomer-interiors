/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,jsx,astro}"],
  theme: {
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
      cursive: ['Sacramento', 'cursive'],
      serif: ['Zilla Slab', 'serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'beige': '#e2dfdb'
      }
    },
  },
  plugins: [],
}