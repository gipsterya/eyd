const { fontFamily, spacing } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.{js,ts,tsx}', './src/pages/*.{js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#111827',
        light: '#f9fafb',
      },
      fontFamily: {
        sans: ['Noto Sans', ...fontFamily.sans],
      },
      margin: {
        cpsa: '-0.219em',
        cpsb: '-0.098em',
      },
      minWidth: {
        fit: '360px',
      },
      rotate: {
        135: '135deg',
      },
      scrollMargin: {
        4.5: '1.125rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              'scroll-margin-top': spacing[32],
            },
            strong: { color: theme('colors.gray.900') },
            maxWidth: '100%',
            li: {
              '&::marker': { color: theme('colors.gray.800') },
            },
            blockquote: {
              border: 'none',
              fontStyle: 'normal',
              p: {
                margin: '0',
              },
              ol: {
                margin: '0',
              },
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            table: {
              width: '100%',
              borderCollapse: 'collapse',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
              th: {
                color: theme('colors.gray.900'),
                textAlign: 'center',
                borderWidth: '1px',
                borderStyle: 'solid',
                padding: '0.5rem',
              },
            },
            tbody: {
              td: {
                textAlign: 'center',
                borderWidth: '1px',
                borderStyle: 'solid',
                padding: '0.5rem',
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.300'),
              '&:hover': {
                color: theme('colors.blue.400'),
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.200'),
              'scroll-margin-top': spacing[32],
            },
            strong: { color: theme('colors.gray.100') },
            li: {
              '&::marker': { color: theme('colors.gray.200') },
            },
            blockquote: {
              li: {
                '&::marker': { color: theme('colors.gray.800') },
              },
            },
            thead: {
              borderBottomColor: theme('colors.gray.600'),
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
