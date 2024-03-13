<script setup>
import { dateFormat } from "@/utils";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const { $api } = useNuxtApp();
const route = useRoute();
const id = route.params.id;

let article = ref({});
const { data } = await $api.get("/app/article/" + id);
article.value = data;
useHead({
  title: article.value.title,
});
</script>

<template>
  <div class="article-wrapper">
    <div class="article-main">
      <div class="article-body">
        <div class="h1">{{ article.title }}</div>
        <div class="info">
          <div class="left">
            <div class="item">
              系列：<span class="vs-tag">{{ article.series.title }}</span>
            </div>
            <div class="item">
              标签：
              <div class="tags">
                <span
                  class="vs-tag"
                  v-for="(item, index) in article.tags"
                  :key="index"
                  >{{ item.title }}</span
                >
              </div>
            </div>
          </div>
          <div class="right">
            <div class="item">浏览量：{{ article.view_num || "暂无" }}</div>
            <div class="item">
              最后修改时间：{{ dateFormat(article.updated_at) }}
            </div>
          </div>
        </div>
        <md-editor v-model="article.content" preview-only theme="dark" />
      </div>
    </div>
    <Comment />
  </div>
</template>

<style scoped lang="scss">
.article-wrapper {
  display: flex;

  .article-main {
    height: calc(100vh - 22px);
    overflow-y: scroll;
    padding: 50px;
    min-width: 800px;
    width: calc(100% - 400px);
    box-sizing: border-box;
    background-color: var(--base20);

    .info {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 7px;
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px var(--base18) solid;

      .left,
      .right {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .right {
        align-items: flex-end;
      }

      .item {
        display: flex;
        align-items: center;
        color: var(--base08);

        .tags {
          display: flex;
          gap: 5px;

          .vs-tag {
            cursor: pointer;
          }
        }
      }

      .nickname {
        display: flex;
        align-items: center;
        gap: 4px;

        .codicon {
          color: var(--blue06);
          font-size: 18px;
        }
      }
    }

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
