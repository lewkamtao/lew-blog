<script setup lang="ts">
const bloggerInfo = useBloggerInfo()
let blogger: any = ref(bloggerInfo.value)
</script> 

<template>
  <div class="lew">
    你好，我是<span>{{blogger.nickname}}</span>，我每天在<span>{{blogger.company}}</span>公司构建大量前端、用户界面和组件。
    到了周末，我会做很多有趣的东西：<span>Lew-UI</span>、<span>FishHub</span>、<span>PicHub</span>、<span>Geek Blog</span>。
  </div>
</template> 

<style lang="scss" scoped>
@import url('https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css');

* {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
}

.lew {
  font-size: 40px;
  line-height: 70px;
  user-select: none;

  span {
    display: inline-block;
    position: relative;
    cursor: pointer;
    z-index: 99;
    line-height: 50px;
    transition: all 0.15s ease;
    margin: 0px 5px;
  }


  span:after {
    position: absolute;
    z-index: -9;
    content: "";
    bottom: 0px;
    left: 0px;
    height: 4px;
    background-color: rgba($color: #000dff, $alpha: 1.0);
    width: 100%;
    transition: all 0.15s ease;
  }

  span:hover {
    color: #fff;
  }

  span:hover:after {
    height: 100%;
  }
}
</style>
