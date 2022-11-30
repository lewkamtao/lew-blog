<script setup lang="ts">

</script>
<template>
    <div class="lew">
        <div class="main">
            <TheSidebar />
            <slot />
        </div>
        <TheFooter />
    </div>
</template> 

<style lang="scss" scoped>
.lew {
    display: flex;
    flex-direction: column;
    .main{
        height: calc(100vh - 28px);
        display: flex;
    }
}
</style>
   