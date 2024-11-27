import config from './config'

export default defineNuxtConfig({
  ssr: false,
  // ssr:true,target:'static',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: `${config.siteName} - ${config.tagline}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: config.metaDescription },
        { hid: 'keywords', name: 'keywords', content: config.metaKeywords },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: config.favicon },
      ],
      script: [
      ]
    }
  },
  runtimeConfig: {
    public: {
      appEnv: process.env.NODE_ENV || 'development',
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      apiURL: process.env.API_URL || config.apiURL,
      apiKey: process.env.API_KEY || config.apiKey,
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    "@nuxt/image",
    // '@zadigetvoltaire/nuxt-gtm',
    "@stefanobartoletti/nuxt-social-share"
  ],
  site: {
    url: process.env.BASE_URL || 'http://localhost:1234',
    name: config.siteName,
    description  :config.siteDescription,
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'], // 指定需要生成的路由
    },
  },
  sitemap: {
    cacheMaxAgeSeconds: 60 * 60 * 24, // 秒
    xsl: false,
    sitemaps: false,
    autoLastmod: true,
    sources: [
      '/api/sitemap'
    ],
  },

  colorMode: {
    preference: 'light'
  },
})