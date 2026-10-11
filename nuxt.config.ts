// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: "static",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss", "~/assets/scss/_fonts.scss"],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    head: {
      title: "MavStudio",
      meta: [
        {
          name: "description",
          content: "MavStudio",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/img/logo/favicon.png" }],
    },
  },
});
