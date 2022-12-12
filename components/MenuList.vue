<script setup lang="ts">
const { $api } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const series: any = ref([]);
const curId = ref();

series.value = (await $api.get("/blog/app/series/list")).data;

watch(route, (v) => {
  const id = route.params.id;
  curId.value = id;
});

onMounted(() => {
  const id = route.params.id;
  curId.value = id;
});

const change = (item: any) => {
  item.isShow = !item.isShow;
};

const toArticle = (id: Number) => {
  router.push("/article/" + id);
};
</script>

<template>
  <div class="series-list">
    <div class="item-box active">
      <i class="codicon codicon-chevron-right" aria-hidden="true"></i>
      <div class="h4">文章列表</div>
    </div>
    <div @click="change(item)" v-for="(item, index) in series" :key="index" class="item series-item">
      <div class="item-box" :class="{ active: item.isShow }">
        <i class="codicon codicon-chevron-right" aria-hidden="true"></i>
        {{ item?.title }}
      </div>
      <div v-show="item.isShow" v-if="item.article.length == 0" class="item article-item">
        <div class="item-box not-box">暂无相关文章</div>
      </div>
      <div @click.stop="toArticle(article.id)" v-show="item.isShow" v-for="(article, index) in item.article"
        :key="index" class="item article-item">
        <div class="item-box" :class="{ 'cur-item': curId == article.id }">
          <div class="icon-box">
            <i class="icon-seti" :class="'icon-' + item?.icon" aria-hidden="true"></i>
          </div>
          {{ article?.title }}
        </div>
      </div>
      <div class="article-total">{{ item?.article?.length }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.series-list {
  width: 100%;
  color: var(--base06);
  user-select: none;
  cursor: pointer;

  .item-box {
    padding: 0px 8px;
    height: 28px;
    display: flex;
    align-items: center;
  }

  .item-box:hover {
    background-color: var(--base17);
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
  position: relative;

  .item-box {
    padding-left: 16px;
  }

  .article-total {
    position: absolute;
    right: 20px;
    top: 5px;
    color: var(--base12);
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

  .not-box {
    opacity: 0.45;
    padding-left: 36px;
  }

  .cur-item {
    background-color: var(--base15);
  }

  .cur-item:hover {
    background-color: var(--base15);
  }
}
</style>
