<script setup lang="ts">
const { $api } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const series: any = ref([]);
const curId = ref();

series.value = (await $api.get("/app/series/list", {})).data;
let seriestotal = (await $api.get("/app/series/list", {})).total;
let articleTotal = (await $api.get("/app/article/list", {})).total;
let blog: any = useBlog();
blog.value = {
  seriesTotal: seriestotal,
  articleTotal: articleTotal,
};

watch(
  () => router.currentRoute.value.path,
  () => {
    const id = route.params.id;
    curId.value = id;
  },
  { immediate: true, deep: true }
);

const seriesActive = useSeriesActive();
watch(seriesActive, (v) => {
  series.value = series.value.map((e: any) => {
    return {
      ...e,
      isShow: false,
    };
  });
  let index = series.value.findIndex((e: any) => e.id == v);
  series.value[index].isShow = true;
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
    <div @click="router.push('/')" class="item-box active">
      <i class="codicon codicon-chevron-right" aria-hidden="true"></i>
      <div class="h4">LEW-BLOG</div>
    </div>
    <div
      @click="change(item)"
      v-for="(item, index) in series"
      :key="index"
      class="item series-item"
    >
      <div class="item-box" :class="{ active: item.isShow }">
        <i class="codicon codicon-chevron-right" aria-hidden="true"></i>
        <div class="title" :title="item?.title">
          {{ item?.title }}
        </div>
      </div>
      <div
        @click.stop
        v-show="item.isShow"
        v-if="item.article.length == 0"
        class="item article-item"
      >
        <div class="item-box not-box">暂无相关文章</div>
      </div>
      <div
        @click.stop="toArticle(article.id)"
        v-show="item.isShow"
        v-for="(article, index) in item.article"
        :key="index"
        class="item article-item"
      >
        <div class="item-box" :class="{ 'cur-item': curId == article.id }">
          <div class="icon-box">
            <i
              class="icon-seti"
              :class="'icon-' + item?.icon"
              aria-hidden="true"
            ></i>
          </div>
          <div class="title" :title="item?.title">
            {{ article?.title }}
          </div>
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

    .title {
      width: calc(100% - 50px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
