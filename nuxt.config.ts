export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: "@nuxt-themes/alpine",
  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "RNGesus/alpine",
        owner: "RNGesus",
        url: "https://github.com/RNGesus/alpine",
      },
    },
  },
  modules: [
    // https://github.com/nuxt-modules/plausible
    // https://github.com/nuxt/devtools
    "@nuxtjs/plausible",
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@nuxt/content",
  ],
});
