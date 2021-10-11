import {mapContentPaths} from './assets/lib/mapContentPaths'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ori Randomizer Wiki',
    titleTemplate: title => title ? `${title} - Ori Randomizer Wiki` : 'Ori Randomizer Wiki',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Wiki for the Ori and the Will of the Wisps Randomizer'},
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Wiki for the Ori and the Will of the Wisps Randomizer'
      },
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://wiki.orirando.com'},
      {hid: 'og:title', property: 'og:title', content: 'Ori Randomizer Wiki'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'Ori Randomizer Wiki'},
      {hid: 'og:image', property: 'og:image', content: 'https://wiki.orirando.com/icon.png'},
      {hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'Ori Randomizer Wiki'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },


  generate: {
    fallback: true,
    async routes() {
      const {$content} = require('@nuxt/content')
      const files = await $content({deep: true}).only(['path', 'slug', 'extension']).fetch()
      return mapContentPaths(files.filter(f => f.extension === '.md')).map(article => article.path)
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
