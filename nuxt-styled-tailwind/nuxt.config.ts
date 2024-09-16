// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@primevue/nuxt-module"],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    primevue: {
        autoImport: true,
        importTheme: { from: '~/themes/lara-light-green.js' },
    },
});
