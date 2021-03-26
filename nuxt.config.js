export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '崎山蒼志 3.31配信シングル「逆行」 Special Site',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '崎山蒼志 3.31配信シングル「逆行」 Special Site',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content:
          'https://www.sonymusic.co.jp/Music/Info/sakiyamasoushi/gyakkou/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '崎山蒼志 3.31配信シングル「逆行」 Special Site',
      },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   content:
      //     '崎山蒼志メジャーデビュー、決定。既存曲をバンドアレンジした「再定義」シリーズを配信。',
      // },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://www.sonymusic.co.jp/Music/Info/sakiyamasoushi/gyakkou/img/ogp.jpg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/common.scss'],

  router: {
    // ここ変更する
    base: '/sakiyama-gyakkyo/',
    // base: '/Music/Info/sakiyamasoushi/gyakkou/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' },
    '~/plugins/vue-jsonp',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-fullpage.js', 'nuxt-webfontloader'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,500,600,700'],
    },
  },
}
