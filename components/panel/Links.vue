<script setup lang="ts">
import { ref } from "vue";
let links = ref([
  {
    id: 1,
    name: "尤雨溪",
    url: "https://www.zhihu.com/people/evanyou",
    head_img: "https://pic4.zhimg.com/7be980a0f_xl.jpg",
    description: "一个前端，写了一个叫 Vue 的框架。",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-07-20 22:35:29",
    update_time: "2021-07-28 00:04:56",
  },
  {
    id: 4,
    name: "KAMOKA",
    url: "https://eee.me/",
    head_img: "https://eee.me/wp-content/uploads/2021/07/2021072110112691.jpg",
    description: "最美的不一定是终点",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-07-20 22:42:06",
    update_time: "2021-07-27 11:30:55",
  },
  {
    id: 5,
    name: "若志奕鑫",
    url: "https://www.rz.sb/",
    head_img: "https://cdn.jsdelivr.net/gh/irozhi/irils-cdn/vCards/assets/img/i.svg",
    description: "愿世界安康，愿你我皆好！",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-07-28 10:57:52",
    update_time: "2021-07-28 10:57:52",
  },
  {
    id: 6,
    name: "北枫",
    url: "https://beifeng.me/",
    head_img: "https://q2.qlogo.cn/g?b=qq&nk=41777657&s=100",
    description: "这家伙很懒，没有留下任何东西",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-07-28 11:02:15",
    update_time: "2021-07-28 11:02:15",
  },
  {
    id: 7,
    name: "Yapi",
    url: "http://yapi.smart-xwork.cn/",
    head_img:
      "https://kamtao-1255310647.cos.ap-chengdu.myqcloud.com/img/dbc02fb727cac1ed0722347eed507f6.png",
    description: "一个神奇的接口管理平台",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-07-28 11:16:38",
    update_time: "2021-09-02 11:04:53",
  },

  {
    id: 9,
    name: "summer",
    url: "https://www.galasp.cn/",
    head_img: "https://q2.qlogo.cn/g?b=qq&nk=2770520782&s=100",
    description: "太阳当空照，花儿对我笑。",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-08-16 12:54:05",
    update_time: "2021-10-29 16:05:42",
  },
  {
    id: 10,
    name: "念喵笔记博客",
    url: "https://myo.ink/",
    head_img: "https://myo.ink/logopng/150pxxmyo.jpg",
    description: "一个记录影视生涯中的笔记博客",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-11-05 15:40:38",
    update_time: "2021-11-05 15:40:38",
  },
  {
    id: 11,
    name: "青找·生活",
    url: "https://www.linguang.me/",
    head_img: "https://cravatar.cn/avatar/ca19c9e504c3b23449756ab1be1508a9",
    description: "云天收夏色，木叶动秋声",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-11-05 15:51:22",
    update_time: "2021-11-05 15:51:22",
  },

  {
    id: 14,
    name: "银河小徐",
    url: "https://blog.hasaik.com",
    head_img:
      "https://cdn.jsdelivr.net/gh/XuxuGood/simple-blog-cdn@main/images/site-img/avatar.jpeg",
    description: "博观而约取，厚积而薄发",
    sort_id: 2,
    is_show: 1,
    opt: {},
    create_time: "2021-12-14 17:32:56",
    update_time: "2021-12-14 17:32:56",
  },
]);
</script>

<template>
  <div class="links">
    <div class="title">友情链接</div>
    <div class="list">
      <nuxt-link :to="item.url" target="_blank" v-for="(item, index) in links" :key="index" class="item">
        <img class="avatar" :src="item.head_img" alt="" srcset="" />
        <div class="info">
          <div class="blog">{{ item.name }}</div>
          <div class="url">{{ item.description }}</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  .title {
    position: sticky;
    padding: 5px 14px;
    top: 0px;
    background: var(--base19);
    width: 100%;
    z-index: 99;
  }

  .list {
    display: flex;
    flex-direction: column;

    .item {
      padding: 7px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      color: var(--base03);

      .avatar {
        width: 50px;
        height: 50px;
      }

      .info {
        display: flex;
        flex-direction: column;
        white-space: nowrap;

        .blog {
          font-size: 14px;
          font-weight: bold;
          width: 210px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .url {
          opacity: 0.6;
          width: 210px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .nickname {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }

    .item:hover {
      background-color: var(--base14);
    }
  }
}
</style>
