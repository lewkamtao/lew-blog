<script setup lang="ts">
const { $api } = useNuxtApp();

const options = [{
  label: "JavaScript",
  value: "javascript"
}, {
  label: "react",
  value: "react"
}, {
  label: "vue",
  value: "vue"
}, {
  label: "go",
  value: "go2"
}, {
  label: "html",
  value: "html"
}, {
  label: "css",
  value: "css"
}, {
  label: "Java",
  value: "java"
}, {
  label: "json",
  value: "json"
}, {
  label: "typescript",
  value: "typescript"
}, {
  label: "docker",
  value: "docker"
}, {
  label: "config",
  value: "config"
}, {
  label: "c",
  value: "c"
}, {
  label: "php",
  value: "php"
}, {
  label: "markdown",
  value: "markdown"
}, {
  label: "lua",
  value: "lua"
}, {
  label: "python",
  value: "python"
}, {
  label: "SQL",
  value: "db"
}, {
  label: "sass",
  value: "sass"
},]



</script> 

<template>
  <div class="lew">
    <div v-for="(item, index) in options" :key="index" class="item">
      <i class="icon-seti" :class="('icon-' + item.value)"></i>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.lew {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      padding: 10px;
      font-size: 50px;
    }
  }

}
</style>
 