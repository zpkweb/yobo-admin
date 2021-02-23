export default {
  buildDir: 'dist',
  env: {
    baseUrl: process.env.ORIGIN || 'http://localhost:7001'
  },
  dev: process.env.NODE_ENV !== 'prod',
  server: {
    port: 3080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // router: {
  //   base: '/admin/'
  // },
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
      target: process.env.ORIGIN || 'http://localhost:7001'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },

  // 多语言
  i18n: {
    locales: [
      {
        code: 'zh-cn',
        name: '中文',
        file: 'zh-CN.js'
      },
      {
        code: 'en-us',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'ja-jp',
        name: 'にほんご',
        file: 'ja-JP.js'
      },
      // {
      //   code: 'fr-fr',
      //   name: 'Français',
      //   file: 'fr-FR.js'
      // }
      {
        code: 'es-es',
        name: 'Español',
        file: 'es-ES.js'
      }
    ],
    defaultLocale: 'zh-cn',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    silentTranslationWarn: true
  }
}
