// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: {
        "/app": {
          target: "https://api.lew.kamtao.com/blog", //这里是接口地址
          changeOrigin: true,
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
