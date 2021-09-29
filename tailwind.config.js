const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.gray,
        green: colors.lime,
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      forms: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
