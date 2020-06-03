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
        '.input': {
          height: '4rem',
          padding: '0.75rem',
          '&:focus': {
            outline: 'none',
          },
        },
        '.edit-input': {
          backgroundColor: 'white',
          color: theme('colors.textPrimary'),
        },
        '.no-edit-input': {
          backgroundColor: 'transparent',
          color: theme('colors.textSecondary'),
        },
      };
      const title = {
        '.profile-section-title': {
          color: theme('colors.primary'),
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        },
      };
      const top = {
        '.top-130': {
          top: '13rem',
        },
        '.-top-50': {
          top: '-5rem',
        },
      };
      const btn = {
        '.btn': {
          color: 'white',
          cursor: 'pointer',
          padding: '1.2rem 3rem',
        },
        '.btn-save': {
          backgroundColor: theme('colors.primary'),
        },
        '.btn-cancel': {
          backgroundColor: theme('colors.textSecondary'),
        }
      }
      addComponents(inputs);
      addComponents(title);
      addComponents(top);
      addComponents(btn);
    }),
  ],
}
