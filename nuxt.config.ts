// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: {
        "/blog": {
          target: "https://api.lew.kamtao.com/blog/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/blog/, ""),
        },
      },
    },
  },

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
