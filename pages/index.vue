<script setup lang="ts">
const { $api } = useNuxtApp();
let articles = ref([]);
let series = ref([]);
let articlesTotal = ref(0);

const getArticle = async () => {
  const { data, total } = await $api.get("/app/article/list?limit=20");
  articles.value = data;
  articlesTotal.value = total;
};

const getSeries = async () => {
  const { data } = await $api.get("/app/series/list?limit=100");
  series.value = data;
};

getArticle();
getSeries();

const isMore = ref(false);
const moreArticle = async () => {
  const { data } = await $api.get("/app/article/list?limit=100");
  articles.value = data;
  isMore.value = true;
};

const menuActive = useMenuActive();

const toMenu = (mode) => {
  menuActive.value = mode;
};

const seriesActive = useSeriesActive();

const toSeries = (id: number) => {
  seriesActive.value = id;
};

const router = useRouter();
const toArticle = (id: number) => {
  router.push("/article/" + id);
};

useHead({
  title: "Visual Studio Blog",
});
</script>

<template>
  <div class="lew">
    <div class="header">
      <div class="title">Visual Studio Blog</div>
      <div class="sub-title">个人博客</div>
    </div>
    <div class="main">
      <div class="left">
        <div class="part">
          <div class="title">启动</div>
          <div class="list start">
            <div @click="toMenu('blogger')" class="item">
              <i class="codicon codicon-account"></i>
              关于我
            </div>
            <div @click="toMenu('github')" class="item">
              <i class="codicon codicon-github"></i>
              Github
            </div>
            <div @click="toMenu('links')" class="item">
              <i class="codicon codicon-source-control"></i>
              友情链接
            </div>
          </div>
        </div>
        <div class="part">
          <div class="title">最近文章</div>
          <div class="list">
            <div
              v-for="(item, index) in articles"
              :key="index"
              @click="toArticle(item.id)"
              class="item"
            >
              {{ item.title }}
            </div>
            <div @click="moreArticle" v-if="!isMore" class="item">更多...</div>
            <div @click="moreArticle" v-else class="item">
              共 {{ articlesTotal }} 篇文章，此处仅展示最新 50 篇。
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="part">
          <div class="title">系列</div>
          <div class="list series">
            <div
              v-for="(item, index) in series"
              :key="index"
              @click="toSeries(item.id)"
              class="item"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lew {
  gap: 10px;
  padding: 100px 140px;
  .header {
    .title {
      font-size: 40px;
      font-weight: 400;
      white-space: nowrap;
    }
    .sub-title {
      font-size: 28px;
      white-space: nowrap;
      color: var(--base09);
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-top: 20px;
    .left {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      min-width: 300px;
    }
    .right {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      min-width: 300px;
    }
    .part {
      .title {
        font-size: 24px;
        font-weight: 300;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 7px;
        margin-top: 10px;
        .item {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          gap: 8px;
          line-height: 26px;
          color: var(--blue05);
          font-size: 16px;
          cursor: pointer;
        }
      }

      .start {
        .item {
          display: flex;
          align-items: center;
        }
      }

      .series {
        gap: 12px;
        .item {
          background-color: var(--base19);
          padding: 6px 12px;
          border-radius: 7px;
          max-width: 320px;
        }
        .item:hover {
          background-color: var(--base16);
        }
        .item-text {
          background: none;
        }
        .item-text:hover {
          background: none;
        }
      }
      .item:last-child {
        color: var(--blue05);
      }
    }
  }
}
</style>
