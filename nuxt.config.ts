export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
  // https://github.com/nuxt/devtools
  '@nuxtjs/plausible', '@nuxt/devtools', '@nuxt/eslint', '@nuxt/content']
})