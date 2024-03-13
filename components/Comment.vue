<script setup lang="ts">
import { toLogin, dateFormat } from "@/utils";
import { useMagicKeys } from "@vueuse/core";
const { enter, control } = useMagicKeys();

watchEffect(() => {
  if (enter.value && control.value && !loading.value) {
    send();
  }
});

const { $api } = useNuxtApp();
const route = useRoute();
const isLogin = ref(!!useCookie("token").value);
const list: any = ref([]);
const total: any = ref(0);
const content = ref("");
const comment_id = ref(0);
const loading = ref(false);

const article_id = Number(route.params.id);
const reply = ref({
  id: 0,
  nickname: "",
});

const getList = async () => {
  const res = await $api.get(`/app/comment/list`, {
    params: {
      article_id: article_id,
      key: String(new Date().getTime()),
    },
  });
  if (res) {
    const { data, total: _total } = res;
    list.value = data;
    total.value = _total;
  }
};

getList();

const send = async () => {
  if (!content.value) {
    return;
  }
  loading.value = true;
  $api
    .post("/app/comment", {
      body: {
        article_id: article_id,
        content: content.value,
        reply_id: Number(reply.value.id),
        comment_id: comment_id.value,
      },
    })
    .then((res) => {
      if (res.code == 200) {
        getList();
        initForm();
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const initForm = () => {
  content.value = "";
  reply.value = {
    id: 0,
    nickname: "",
  };
  comment_id.value = 0;
};

const setReply = (item: any) => {
  reply.value = item.user;
  comment_id.value = item.id;
};

const setChildReply = (child: any) => {
  reply.value = child.user;
  comment_id.value = child.comment_id;
};

const cancelReply = () => {
  reply.value = {
    id: 0,
    nickname: "",
  };
  comment_id.value = 0;
};
</script>

<template>
  <div class="comment">
    <div class="title">
      评论列表
      <div class="vs-tag">{{ total }}</div>
    </div>
    <div class="comment-wrapper">
      <div class="comment-box parent">
        <template v-if="list.length > 0">
          <div
            class="item"
            @click="setReply(item)"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="comment-item">
              <div class="left">
                <img class="avatar" :src="item.user.avatar" alt="" srcset="" />
              </div>
              <div class="right">
                <div class="nickname">
                  <span>{{ item.user.nickname || "未命名" }}</span>
                  <span class="created-at">
                    {{ dateFormat(item.created_at) }}
                  </span>
                </div>
                <div class="content">{{ item.content }}</div>
              </div>
            </div>
            <div v-if="item.comment.length > 0" class="comment-box child">
              <div
                class="item"
                @click.stop="setChildReply(child)"
                v-for="(child, index) in item.comment"
                :key="index"
              >
                <div class="comment-item">
                  <div class="left">
                    <img
                      class="avatar"
                      :src="child.user.avatar"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="right">
                    <div class="nickname">
                      <span> {{ child.user.nickname || "未命名" }} </span>
                      <span class="created-at">
                        {{ dateFormat(item.created_at) }}
                      </span>
                    </div>
                    <div class="content">
                      <span class="reply-user"
                        >@{{ child.reply.nickname }}</span
                      >
                      {{ child.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="not-found">暂无评论</div>
        </template>
      </div>
    </div>

    <div class="reply-wrapper">
      <div class="header">
        <div v-if="!reply.id" class="left">添加一条回复</div>
        <div v-else class="left">
          回复
          <span>@{{ reply.nickname }}</span>
          <span @click="cancelReply" class="cancel-btn">取消回复</span>
        </div>
        <div class="vs-button" @click="send">发送</div>
      </div>
      <textarea v-model="content" class="content vs-textarea"></textarea>
      <div class="footer">Enter换行，Ctrl+Enter发送</div>

      <div v-if="!isLogin" class="login-panel">
        尚未登录，
        <div @click="toLogin" class="vs-button">立即登录</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  position: relative;
  width: 100%;
  min-width: 300px;
  height: calc(100vh - 22px);
  overflow: hidden;
  box-sizing: border-box;

  .title {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0px 10px;
    box-sizing: border-box;

    .vs-tag {
      margin-left: 10px;
    }
  }

  .comment-wrapper {
    width: 100%;
    height: calc(100% - 200px - 40px);
    overflow-y: auto;
    box-sizing: border-box;
  }

  .reply-user {
    color: var(--blue04);
  }

  .comment-box {
    width: 100%;
    display: flex;
    flex-direction: column;

    .comment-item {
      display: flex;
      gap: 10px;
      padding: 10px 10px 5px 10px;
      box-sizing: border-box;
      cursor: pointer;
    }

    .comment-item:hover {
      background-color: var(--base16);
    }

    .left {
      .avatar {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }
    }

    .right {
      width: calc(100% - 45px);

      .nickname {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-top: -2px;
        opacity: 0.7;
        .created-at {
          opacity: 0.2;
        }
      }

      .content {
        font-size: 14px;
        line-height: 24px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
    }

    .child {
      padding-left: 30px;
      box-sizing: border-box;
    }
  }

  .reply-wrapper {
    position: sticky;
    bottom: 0px;
    left: 0px;
    height: 200px;
    width: 100%;
    background-color: var(--base16);
    display: flex;
    flex-direction: column;

    .cancel-btn {
      color: var(--blue06);
      margin-left: 10px;
      cursor: pointer;
    }

    .login-panel {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.4);
      z-index: 99;
      opacity: 0;
      transition: all 0.2s;
    }

    .login-panel:hover {
      opacity: 1;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;
      height: 40px;
      box-sizing: border-box;
    }

    .content {
      background-color: var(--base16);
      height: 135px;
      transition: all 0.25s;
    }
    .content:hover {
      background-color: var(--base15);
    }
    .content:focus {
      background-color: var(--base15);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0px 10px;
      height: 25px;
      color: var(--base09);
      font-size: 12px;
    }
  }
}

.not-found {
  width: 100%;
  height: calc(100vh - 200px - 40px - 25px);
  color: var(--base12);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
