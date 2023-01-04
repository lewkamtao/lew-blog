<script setup lang="ts">
const { $api } = useNuxtApp();
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
          <div class="list">
            <div class="item">
              <i class="codicon codicon-account"></i>
              关于我
            </div>
            <div class="item">
              <i class="codicon codicon-github"></i>
              Github
            </div>
            <div class="item">
              <i class="codicon codicon-source-control"></i>
              友情链接
            </div>
          </div>
        </div>
        <div class="part">
          <div class="title">最近文章</div>
          <div class="list">
            <div class="item">asdsadad</div>
            <div class="item">asdsadad</div>
            <div class="item">asdsadad</div>
            <div class="item">asdsadad</div>
            <div class="item">更多...</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="part">
          <div class="title">系列</div>
          <div class="list series">
            <div class="item">asdsadad</div>
            <div class="item">asdsadad</div>
            <div class="item">asdsadad</div>
            <div class="item">asdsadad</div>
            <div class="item item-text">更多...</div>
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
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      min-width: 300px;
    }
    .right {
      width: 50%;
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
          display: flex;
          align-items: center;
          gap: 8px;
          line-height: 26px;
          color: var(--blue05);
          font-size: 16px;
          cursor: pointer;
        }
      }
      .series {
        gap: 12px;
        .item {
          background-color: var(--base19);
          padding: 6px 12px;
          border-radius: 7px;
          max-width: 480px;
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
    }
  }
}
</style>
