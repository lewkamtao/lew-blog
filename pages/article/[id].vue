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
        <div class="article-main">
            <div class="article-body">
                <div class="h1"> {{ article.title }} </div>
                <div class="ck-content" v-html="article.content"> </div>
            </div>
        </div>
        <div class="comment">
        </div>
    </div>
</template> 

<style scoped  lang="scss">
.article-wrapper {
    display: flex;


    .article-main {
        height: calc(100vh - 22px);
        overflow-y: auto;
        padding: 50px;
        min-width: 800px;
        width: calc(100% - 400px);
        box-sizing: border-box;
        background-color: var(--base20);

        .article-body {
            max-width: 800px;
            margin: 0 auto;
        }

        .ck-content {
            margin: 50px 0px;
        }
    }

    .comment {
        width: 400px;
        background-color: var(--base18);
    }
}
</style>
