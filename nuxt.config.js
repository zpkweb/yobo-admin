export default {
  buildDir: 'dist',
  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseUrl: process.env.ORIGIN || 'http://localhost:7001',
  },
  publicRuntimeConfig: {
    v: 'v0.37',
    axios: {
      baseURL: process.env.ORIGIN || 'http://localhost:7001'
    },
    origin: process.env.ORIGIN || 'http://localhost:7001'

  },
  server: {
    port: 3080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: process.env.ORIGIN || 'http://localhost:7001',
      // changeOrigin: true,
    },
  },
  // router: {
  //   base: '/admin/'
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)Í
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
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/global',
    '~/assets/css/normalize',


    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui', '@/plugins/axios', { src: '@/plugins/vue-quill-editor', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: ['~/components'],

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
    '@nuxtjs/localforage',
  ],

  highcharts: {
    /* module options */
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
        file: 'zh-CN.js',
      },
      {
        code: 'en-us',
        name: 'English',
        file: 'en-US.js',
      },
      {
        code: 'ja-jp',
        name: 'にほんご',
        file: 'ja-JP.js',
      },
      // {
      //   code: 'fr-fr',
      //   name: 'Français',
      //   file: 'fr-FR.js'
      // }
      {
        code: 'es-es',
        name: 'Español',
        file: 'es-ES.js',
      },
    ],
    defaultLocale: 'zh-cn',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
    silentTranslationWarn: true,
  },
}
