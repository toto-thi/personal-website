import { useSiteMetadata } from './composables/useSiteMetaData';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: useSiteMetadata(),
  },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  site:{
    url: 'https://thinakone.com',
    name: 'Thinakone Louangdy',
    gzip: true,
    routes: []
  },
})