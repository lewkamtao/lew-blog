<script setup lang="ts">
const loginOut = () => {
  useCookie("token").value = null;
  location.reload();
};
</script>

<template>
  <div class="setting">
    <div class="title">设置面板</div>
    <div class="main">
      <div @click="loginOut" class="vs-button">退出登陆</div>
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
