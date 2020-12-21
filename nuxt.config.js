export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'yobo-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/css/global', '~/assets/css/normalize'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/moment',
    '@nuxtjs/localforage',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    'nuxt-highcharts',
    '@nuxtjs/moment',
    '@nuxtjs/localforage'
  ],

  highcharts: {
    /* module options */
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://localhost:7001/',
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },

  // 多语言
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  }
}
