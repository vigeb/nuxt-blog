module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      lineHeight: {
        12: '3rem',
      },
      boxShadow: {
        '3xl': '7px 16px 34px 12px rgb(0 0 0 / 20%)',
      },
      spacing: {
        80: '20rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
