<script setup lang="ts">
import { ref } from "vue";
let mode = ref("series");
let modeList = ref({
  top: [
    {
      mode: "series",
      icon: "files",
    },
    {
      mode: "search",
      icon: "search",
    },
    {
      mode: "links",
      icon: "source-control",
    },
    // {
    //   mode: "comment",
    //   icon: "comment",
    // },
    {
      mode: "github",
      icon: "github",
      link: "https://github.com/lewkamtao",
    },
  ],
  bottom: [
    {
      mode: "blogger",
      icon: "account",
    },
    {
      mode: "setting",
      icon: "settings-gear",
    },
  ],
});

const menuActive = useMenuActive();

watch(menuActive, (v) => {
  let list = [...modeList.value.top, ...modeList.value.bottom];
  changeMode(list.find((e) => e.mode == v));
});

const changeMode = (item) => {
  if (item?.link) {
    window.open(item.link, "_blank");
  } else {
    mode.value = item.mode;
  }

  if (item.mode == "search") {
    nextTick(() => {
      document.getElementById("search-input").focus();
    });
  }
};
</script>

<template>
  <div class="sidebar">
    <div class="nav">
      <div class="top">
        <div
          @click="changeMode(item)"
          v-for="(item, index) in modeList.top"
          :key="index"
          class="item"
          :class="mode == item.mode ? 'active' : ''"
        >
          <i class="codicon" :class="`codicon-${item.icon}`" aria-hidden="true"></i>
          <div v-if="item.mode == 'links'" class="vs-badge">9</div>
          <div v-if="item.mode == 'comment'" class="vs-badge">2</div>
        </div>
      </div>
      <div class="bottom">
        <div
          @click="changeMode(item)"
          v-for="(item, index) in modeList.bottom"
          :key="index"
          class="item"
          :class="{ active: mode == item.mode }"
        >
          <i class="codicon" :class="`codicon-${item.icon}`" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="sidebar-main">
      <panel-series v-show="mode == 'series'" />
      <panel-search v-show="mode == 'search'" />
      <panel-links v-show="mode == 'links'" />
      <panel-blogger v-show="mode == 'blogger'" />
      <panel-setting v-show="mode == 'setting'" />
      <panel-user v-show="mode == 'user'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  width: 360px;
  height: 100%;
  overflow: hidden;

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48px;
    height: 100%;
    background-color: var(--base16);
    box-sizing: border-box;

    .item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      cursor: pointer;

      .codicon {
        color: var(--base10);
        font-size: 24px;
      }

      .vs-badge {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }

    .item:hover {
      .codicon {
        color: var(--base01);
      }
    }

    .active {
      .codicon {
        color: var(--base01);
      }
    }

    .active::after {
      position: absolute;
      left: 0px;
      top: 0px;
      content: "";
      width: 2px;
      height: 48px;
      background-color: var(--base01);
    }
  }

  .sidebar-main {
    display: flex;
    flex-direction: column;
    width: 312px;
    height: 100%;
    background-color: var(--base19);
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
