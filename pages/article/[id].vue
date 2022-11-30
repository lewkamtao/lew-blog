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
        <div class=""> {{ article.title }} </div>
        <div class="ck-content" v-html="article.content">
        </div>
    </div>
</template> 

<style scoped  lang="scss">
.article-wrapper {
    padding: 20px;
}
</style>
