const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E93F33',
        primaryGray: '#F5F5F5',
        textPrimary: '#10111e',
        textSecondary: '#7e7e7e'
      },
      flex: {
        35: '35%',
        65: '65%'
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents, theme }) {
      const inputs = {
        '.no-input': {
          backgroundColor: 'transparent',
          color: theme('colors.textSecondary'),
          padding: '0.5rem',
          '&:focus': {
            outline: 'none',
          },
        },
      }
      addComponents(inputs);
    }),
  ],
}
