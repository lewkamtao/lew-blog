<script setup lang="ts">
const { $api } = useNuxtApp();

// 获取 url 参数
const setToken = () => {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == 'token') {
            delToken();
            const token = useCookie('token')
            token.value = pair[1];
            return;
        }
    }
    return false;
};

// 去除token
const delToken = () => {
    var url = window.location.protocol + '//' + window.location.host;
    window.location.replace(url);
};
onMounted(() => {
    // 设置token
    setToken();
});

</script>  
  
<template>
    <div class="b1">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style lang="less">
@import "~/assets/styles/seti/index.less";
</style>

<style lang="scss">
@import "~/assets/styles/codicon.scss";
@import "~/assets/styles/var.scss";
@import "~/assets/styles/reset.scss";
@import "~/assets/styles/main.scss";
@import "~/assets/styles/editor.css";

body {
    background-color: var(--base20);
    color: var(--base06)
}
</style>  