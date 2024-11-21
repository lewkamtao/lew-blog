<script setup lang="ts">
import { useNavigatorLanguage } from "@vueuse/core";
import dayjs from "dayjs";

let now = dayjs().subtract(9.5, "hour");
// 打印当前时间 倒推 9 个半小时之前的时间
const goHomeTime = ref(now.format("YYYY-MM-DD HH:mm:ss"));

// 每秒更新一次时间
onMounted(() => {
  setInterval(() => {
    now = dayjs().subtract(9.5, "hour");
    goHomeTime.value = now.format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
});

const blog = useBlog();
const route = useRoute();
const { language } = useNavigatorLanguage();
</script>
<template>
  <div class="footer">
    <div>
      <span> Copyright (c) 2021-present, Kamtao (To) Lew </span>
      <span> Inspired by Visual Studio Code </span>
      <a target="_blank" href="https://beian.miit.gov.cn/">粤ICP备18056223号</a>
    </div>
    <div>
      <span> Current Version 1.12.0 </span>
      <span> Path {{ route.path }} </span>
      <span> Language {{ language }} </span>
      <span> Series {{ blog.seriesTotal }} </span>
      <span> Article {{ blog.articleTotal }} </span>
      <span> 9.5 Hours Ago {{ goHomeTime }} </span>
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
  a {
    color: #fff;
  }
}
</style>
