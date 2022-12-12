<script setup lang="ts">
import { ref } from "vue";

let router = useRouter();
let route = useRoute();
let { $api } = useNuxtApp();
let list = ref([]);
let total = ref(0);
let curId = ref();
let timer;

const search = (e) => {
  clearTimeout(timer);
  let v = e.target.value;
  if (!v) {
    list.value = [];
    total.value = 0;
    return;
  }
  timer = setTimeout(async () => {
    var res = await $api.get("/blog/app/article/list?limit=2000&title=" + v);
    list.value = res.data;
    total.value = res.total || 0;
  }, 250);
};

watch(route, (v) => {
  const id = route.params.id;
  curId.value = id;
});

onMounted(() => {
  const id = route.params.id;
  curId.value = id;
});

const toArticle = (id: Number) => {
  router.push("/article/" + id);
};
</script>

<template>
  <div class="search">
    <label>搜索</label>
    <input id="search-input" @input="search" class="vs-input" />
    <div class="total">共查询 {{ total }} 个结果</div>
    <div class="list">
      <div v-for="(article, index) in list" :key="index" class="item article-item">
        <div
          class="item-box"
          @click="toArticle(article.id)"
          :class="{ 'cur-item': curId == article.id }"
        >
          <div class="icon-box">
            <i
              class="icon-seti"
              :class="'icon-' + article?.series?.icon"
              aria-hidden="true"
            ></i>
          </div>
          {{ article?.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  padding: 10px;

  .vs-input {
    margin: 5px 0px;
  }

  .list {
    margin-top: 10px;
  }

  .total {
    color: var(--base10);
  }

  .article-item {
    .item-box {
      padding: 0px 8px;
      height: 28px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
      }
    }
    .item-box:hover {
      background-color: var(--base17);
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
}
</style>
