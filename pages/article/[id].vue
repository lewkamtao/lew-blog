<script setup>
const { $api } = useNuxtApp();
const route = useRoute();
const id = route.params.id;

let article = ref({})
const { data } = (await $api.get("/article/" + id, { key: id }));
article.value = data

</script>
 
<template>
    <div class="article-wrapper">
        <div class="h1"> {{ article.title }} </div>
        <div class="ck-content" v-html="article.content">
        </div>
    </div>
</template> 

<style scoped  lang="scss">
.article-wrapper {
    padding: 15px 20px;
    max-width: 800px;
    margin: 0 auto;
    .h1 {
        margin: 40px auto;
    }
    .ck-content {
        margin-top: 50px;
    }
}
</style>
