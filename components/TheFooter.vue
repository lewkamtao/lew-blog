<script setup lang="ts">
import { useNavigatorLanguage } from "@vueuse/core";
const blog = useBlog();
const route = useRoute();
const { language } = useNavigatorLanguage();
</script>
<template>
  <div class="footer">
    <div>
      <span> Current version 1.12.0 </span>
      <span> PATH {{ route.path }} </span>
      <span> Language {{ language }} </span>
      <span> Series {{ blog.seriesTotal }} </span>
      <span> Article {{ blog.articleTotal }} </span>
    </div>
    <div>
      <span> Copyright (c) 2021-present, Kamtao (To) Lew </span>
      <span> Inspired by Visual Studio Code </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 22px;
  white-space: nowrap;
  background-color: var(--blue06);
  color: var(--base02);
  font-size: 13px;
  padding: 0px 15px;
  div {
    display: flex;
    gap: 20px;
  }
}
</style>
