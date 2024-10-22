// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', 'nuxt-lodash'],
  icon: {
    customCollections: [
      {
        prefix: 'i',
        dir: './src/assets/icons',
      },
    ],
  },
});
