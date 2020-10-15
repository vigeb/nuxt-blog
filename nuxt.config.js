import { join } from 'path'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'src',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Work+Sans&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/sass/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vueObserveVisibility.js', '~/plugins/colcade.client.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-purgecss',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  svgSprite: {
    input: '~/assets/images/SVG',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
      },
    },
    extractCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        // terser-webpack-plugin
        // optimize-css-assets-webpack-plugin
      ],
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {},
      },
    },
    optimizeCSS: true,
  },
}
