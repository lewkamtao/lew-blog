<script setup lang="ts">
const { $api } = useNuxtApp();
const route = useRoute();
const router = useRouter();

</script>  

<template>
    <div class="comment">
        <div class="title"> 评论列表 </div>
    </div>
</template> 
 
<style lang="scss" scoped>
.comment {
    width: 100%;
    padding: 20px;
}
</style>
