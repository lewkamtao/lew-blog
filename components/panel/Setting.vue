<script setup lang="ts">
import { toLogin } from "@/utils";
const isLogin = ref(!!useCookie("token").value);
const loginOut = () => {
  useCookie("token").value = null;
  location.reload();
};
</script>

<template>
  <div class="setting">
    <div class="title">设置面板</div>
    <div class="main">
      <div v-if="!isLogin" @click="toLogin" class="vs-button">立即登录</div>
      <div v-else @click="loginOut" class="vs-button">退出登陆</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  .title {
    padding: 5px 10px;
  }
  .main {
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }
}
</style>
