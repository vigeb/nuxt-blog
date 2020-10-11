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
        28: '7rem',
        80: '20rem',
        88: '22rem',
        '1/4': '25%',
      },
      maxWidth: {
        '4/5': '80%',
        '9/10': '90%',
      },
      borderRadius: {
        large: '1rem',
      },
    },
  },
  variants: {
    translate: ['responsive'],
    scale: ['responsive'],
    opacity: ['responsive', 'hover'],
    backgroundImage: ['hover', 'active'],
    gradientColorStops: ['hover', 'active'],
  },
  plugins: [],
}
