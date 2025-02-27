export default defineNuxtConfig({
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: "https://api.nuxt.studio",
      dev: true,
      gitInfo: {
        name: "RNGesus/alpine",
        owner: "RNGesus",
        url: "https://github.com/RNGesus/alpine",
      },
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/plausible",
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
  ],

  css: ["~/assets/style/main.css"],

  mdc: {
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-dark",
        light: "github-light",
      },
    },
  },

  runtimeConfig: {
    public: {
      resend: !!process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  routeRules: {
    // Needed to activate preview on Nuxt Studio
    "/": { prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: "2025-01-05",

  nitro: {
    experimental: {
      websocket: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["/en", "/fr"],
    },
  },

  hooks: {
    "nitro:config": (config) => {
      if (process.env.NUXT_PRIVATE_RESEND_API_KEY) {
        config.handlers?.push({
          method: "post",
          route: "/api/emails/send",
          handler: "~~/server/emails/send.ts",
        });
      }
    },
  },
  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-US" },
      { code: "fr", name: "French", language: "fr-FR" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix",
    defaultLocale: "en",
    vueI18n: "~/i18n.config.ts",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: "iconify",
  },

  ogImage: {
    zeroRuntime: true,
  },

  imports: {
    presets: [
      {
        from: "vue-sonner",
        imports: ["toast"],
      },
    ],
  },

  devtools: {
    enabled: true,
  },
});
