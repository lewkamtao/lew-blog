<script setup lang="ts">
const { $api } = useNuxtApp()

// 获取 url 参数
const setToken = () => {
  const fullUrl = window.location.href
  const urlObj = new URL(fullUrl)

  // 获取token参数的值
  const token = urlObj.searchParams.get('token')
  if (token) {
    // 保存token到本地存储
    const cookieToken = useCookie('token')
    cookieToken.value = token
    // 删除URL中的token参数
    urlObj.searchParams.delete('token')

    // 替换浏览器地址栏中的URL
    window.history.replaceState({}, document.title, urlObj.toString())
  }
}

onMounted(() => {
  // 设置token
  setToken()
})
</script>

<template>
  <div class="b1">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="less">
@import '~/assets/styles/seti/index.less';
@import '~/assets/styles/md.less';
</style>

<style lang="scss">
@import '~/assets/styles/codicon.scss';
@import '~/assets/styles/var.scss';
@import '~/assets/styles/reset.scss';
@import '~/assets/styles/main.scss';
body {
  background-color: var(--base20);
  color: var(--base06);
}
</style>
