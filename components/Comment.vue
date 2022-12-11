<script setup lang="ts">
import { toLogin } from "@/utils"

const { $api } = useNuxtApp();
const route = useRoute();
const router = useRouter();

const isLogin = ref(!!useCookie('token').value)
const list = ref([])
const total = ref(0)
const content = ref('')
const comment_id = ref(0)

const article_id = Number(route.params.id)
const reply = ref({
    id: 0,
    nickname: ""
})

const getList = async () => {
    const res = (await $api.get(`/app/comment/list?article_id=${article_id}&key=${new Date().getTime()}`));
    list.value = res.data
    total.value = res.total
}

getList()

const send = async () => {
    $api.post("/app/comment", {
        body: {
            article_id: article_id,
            content: content.value,
            reply_id: Number(reply.value.id),
            comment_id: comment_id.value
        }
    }).then(res => {
        if (res.code == 200) {
            getList()
            initForm()
        }
    })
}

const initForm = () => {
    content.value = ''
    reply.value = {
        id: 0,
        nickname: ""
    }
    comment_id.value = 0
}



const setReply = (item) => {
    reply.value = item.user
    comment_id.value = item.id
}

const setChildReply = (child) => {
    reply.value = child.user
    comment_id.value = child.comment_id
}


</script>   

<template>
    <div class="comment">
        <div class="title"> 评论列表 <div class="vs-tag">{{ total }}</div>
        </div>
        <div class="comment-wrapper">
            <div class="comment-box parent">
                <div class="item" @click="setReply(item)" v-for="(item, index) in list" :key="index">
                    <div class="comment-item">
                        <div class="left">
                            <img class="avatar" :src="item.user.avatar" alt="" srcset="">
                        </div>
                        <div class="right">
                            <div class="nickname"> {{ item.user.nickname || '未命名' }} </div>
                            <div class="content">{{ item.content }}</div>
                        </div>
                    </div>
                    <div v-if="(item.comment.length > 0)" class="comment-box child">
                        <div class="item" @click.stop="setChildReply(child)" v-for="(child, index) in item.comment"
                            :key="index">
                            <div class="comment-item">
                                <div class="left">
                                    <img class="avatar" :src="child.user.avatar" alt="" srcset="">
                                </div>
                                <div class="right">
                                    <div class="nickname"> {{ child.user.nickname || '未命名' }} </div>
                                    <div class="content">
                                        <span class="reply-user">@{{ child.reply.nickname }}</span>
                                        {{ child.content }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="reply-wrapper">
            <div class="header">
                <div v-if="!reply.id" class="left">
                    添加一条回复
                </div>
                <div v-else class="left">
                    回复
                    <span>@{{ reply.nickname }}</span>
                </div>
                <div class="vs-button" @click="send">
                    发送
                </div>
            </div>
            <textarea v-model="content" class="content vs-textarea" rows="" cols=""></textarea>
            <div class="footer">
                Enter换行，Ctrl+Enter发送
            </div>

            <div v-if="!isLogin" class="login-panel">
                尚未登录， <div @click="toLogin" class="vs-button">
                    立即登录
                </div>
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
            padding: 10px;
            box-sizing: border-box;
            cursor: pointer;
        }

        .comment-item:hover {
            background-color: var(--base16);
        }

        .left {
            .avatar {
                width: 35px;
                height: 35px;
                object-fit: cover;
            }
        }

        .right {
            width: calc(100% - 45px);

            .nickname {
                font-weight: bold;
                font-size: 12px;
            }

            .content {
                font-size: 14px;
                margin-top: 5px;
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
</style>
