/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      'display': ['Playfair Display', 'serif'],
      'noto': ['Noto Sans TC', 'sans-serif'],
      'source': ['Source Sans Pro', 'sans-serif'],
      'hans': ['SourceHans', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
