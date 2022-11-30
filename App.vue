<script setup lang="ts">
const { $api } = useNuxtApp();

onMounted(() => {
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
@import "~/assets/styles/editor.css";

body {
    background-color: var(--base20);
    color:var(--base06)
}
</style>  