// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/icon/module', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@pinia/nuxt', '@vee-validate/nuxt', '@nuxt/ui',],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  css: ['~/assets/css/index.css']

})
