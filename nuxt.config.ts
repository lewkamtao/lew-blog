// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],

    link: [],
    style: [],
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
});
