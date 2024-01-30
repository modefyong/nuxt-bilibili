// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    apiSecret: '123456',
    public: {
      apiBase: '/hlkj'
    }
  },

  modules: ['@pinia/nuxt']
})