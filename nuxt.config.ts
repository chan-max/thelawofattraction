import gameConfig from './game.config'




export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: `${gameConfig.brandName} - ${gameConfig.tagline}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: gameConfig.metaDescription },
        { hid: 'keywords', name: 'keywords', content: gameConfig.metaKeywords },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: gameConfig.favicon },
        { rel: 'preconnect', href: 'https://securepubads.g.doubleclick.net' },
        { rel: 'dns-prefetch', href: 'https://securepubads.g.doubleclick.net' },
        { rel: 'preload', href: 'https://www.googletagservices.com/tag/js/gpt.js', as: 'script' }
      ],
      script: [
        { src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js', async: false, defer: false },
      ]
    }
  },
  runtimeConfig: {
    public: {
      appEnv: process.env.NODE_ENV || 'development',
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      apiURL: process.env.API_URL || gameConfig.apiURL,
      apiKey: process.env.API_KEY || gameConfig.apiKey,
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    "@nuxt/image",
    '@zadigetvoltaire/nuxt-gtm',
    "@stefanobartoletti/nuxt-social-share"
  ],
  gtm: {
    id: gameConfig.gtmID,
    defer: false,
  },
  site: {
    url: process.env.BASE_URL || 'http://localhost:3000',
  },
  sitemap: {
    cacheMaxAgeSeconds: 60 * 60 * 24,
    xsl: false,
    sitemaps: true,
    autoLastmod: true,
    sources: [
      '/api/__sitemap__/urls',
    ],
  },
  colorMode: {
    preference: 'light'
  },
})