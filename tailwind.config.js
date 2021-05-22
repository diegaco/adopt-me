const { screens } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': screens.sm,
      // => @media (min-width: 640px) { ... }

      'md': screens.md,
      // => @media (min-width: 768px) { ... }
      'lg': '1020px',
      'xl': screens.xl,
      '2xl': screens['2xl']
    },
  },
  variants: {
    opacity: ({after}) => after(['disabled']),
  },
  plugins: [require('@tailwindcss/forms')],
}
