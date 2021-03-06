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
        16: '4rem',
        20: '5rem',
        28: '7rem',
      },
      boxShadow: {
        '3xl': '7px 16px 34px 12px rgb(0 0 0 / 20%)',
      },
      spacing: {
        14: '3.5rem',
        28: '7rem',
        80: '20rem',
        88: '22rem',
        160: '40rem',
        '1/4': '25%',
      },
      maxWidth: {
        '1/4': '25%',
        '4/5': '80%',
        '9/10': '90%',
      },
      minWidth: {
        '3/4': '75%',
        '4/5': '80%',
      },
      maxHeight: {
        '45vh': '45vh',
        '70vh': '70vh',
      },
      borderRadius: {
        large: '1rem',
      },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive'],
    opacity: ['responsive', 'hover'],
    backgroundImage: ['hover', 'active'],
    gradientColorStops: ['hover', 'active'],
    borderWidth: ['responsive', 'hover', 'active', 'focus'],
    backgroundOpacity: ['responsive', 'group-hover', 'hover', 'active'],
    backgroundColor: ['responsive', 'hover', 'active', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'group-hover', 'focus'],
  },
  plugins: [],
}
