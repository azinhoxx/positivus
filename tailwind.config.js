/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './**/*.{vue, hs}'],
  safelist: ['fill-dark', 'fill-green', 'fill-white', 'bg-white', 'bg-grey'],
  theme: {
    fontFamily: {
      grotesk: '"Space Grotesk"'
    },
    colors: {
      dark: '#191A23',
      green: '#B9FF66',
      grey: '#F3F3F3',
      white: '#fff'
    },
    screens: {
      xl: '1280px',
      sm: '640px',
      md: '768px',
      xmd: '980px',
      xlg: '1060px',
      xxl: '1440px',
      lg: '1024px'
    },
    extend: {}
  },
  plugins: []
};
