<script setup lang="ts">
import { ref } from "vue"
const { $api } = useNuxtApp();
const series: any = ref([])

series.value = (await $api.get("/series/list?is_publish=true", {})).data;

const change = (item: any) => {
    item.isShow = !item.isShow
}
</script>  

<template>

    <div class="series-list">
        <div class="item-box active">
            <i class="codicon codicon-chevron-right" aria-hidden="true"></i>
            <div class="h4">文章系列</div>
        </div>

        <div v-for="(item, index) in series" :key="index" class="item series-item">
            <div @click="change(item)" class="item-box" :class="{ active: item.isShow }">
                <i class="codicon codicon-chevron-right" aria-hidden="true"></i>
                {{ item?.title }}
            </div>
            <div v-show="item.isShow" v-if="(item.article.length == 0)" class="item article-item">
                <div class="item-box">
                    <div class="icon-box">
                        <i class="icon-seti icon-error" aria-hidden="true"></i>
                    </div>
                    暂无文章
                </div>
            </div>
            <div v-show="item.isShow" v-for="(article, index) in item.article" :key="index" class="item article-item">
                <div class="item-box">
                    <div class="icon-box"> <i class="icon-seti icon-javascript" aria-hidden="true"></i></div>
                    {{ article?.title }}
                </div>
            </div>
        </div>
    </div>
</template> 
 
<style lang="scss" scoped>
.series-list {
    width: 100%;
    color: var(--base06);
    cursor: pointer;

    .item-box {
        padding: 0px 8px;
        height: 30px;
        display: flex;
        align-items: center;
    }

    .item-box:hover {
        background-color: var(--base15);
    }

    .codicon {
        margin-right: 5px;
    }
}

.active {
    .codicon {
        transform: rotate(90deg);
    }
}


.series-item {
    .item-box {
        padding-left: 16px;
    }

}

.article-item {
    .item-box {
        padding-left: 24px;

        .icon-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
        }
    }

}
</style>
