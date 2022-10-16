<script setup lang="ts">
const name = ref("aaa");
const { $api } = useNuxtApp();

const res = await $api.get("/api/users", {});
console.log(res.computed);
onMounted(() => {});
</script>

<template>
  <div style="display: flex; gap: 20px">
    <nuxt-link to="/menu"> {{ name }}</nuxt-link>
    <nuxt-link to="/article/21313"> {{ name }}</nuxt-link>
  </div>
</template>
