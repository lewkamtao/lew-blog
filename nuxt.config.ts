// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: [
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  script: [{ src: "js/ckeditor.js" }],
  link: [],
  style: [],
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },
});
