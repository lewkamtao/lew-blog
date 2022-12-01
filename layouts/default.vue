<script setup lang="ts">

</script>
<template>
    <div class="lew">
        <div class="main">
            <TheSidebar />
            <div class="wrapper">
                <slot />

            </div>
        </div>
        <TheFooter />
    </div>
</template> 

<style lang="scss" scoped>
.lew {
    display: flex;
    flex-direction: column;

    .main {
        height: calc(100vh - 22px);
        display: flex;

        .wrapper {
            width: calc(100% - 360px);
            height: 100%;
            overflow-y: auto;

        }
    }
}
</style>
   