<script setup lang="ts">
import { totalmem } from 'os';

const { $api } = useNuxtApp();
const route = useRoute();
const router = useRouter();

const list = ref([])
const total = ref(0)
const article_id = route.params.id
const res = (await $api.get("/app/comment/list?article_id=" + article_id));

list.value = res.data
total.value = res.total
</script>   

<template>
    <div class="comment">
        <div class="title"> 评论列表 <div class="vs-tag">{{ total }}</div>
        </div>
        <div class="comment-wrapper">
            <div class="comment-box parent">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <div class="comment-item">
                        <div class="left">
                            <img class="avatar"
                                src="https://api.lew.kamtao.com/manage/common/avatar/550/4B78CA/%E5%BC%A0" alt=""
                                srcset="">
                        </div>
                        <div class="right">
                            <div class="nickname"> {{ item.user.nickname }} </div>
                            <div class="content">{{ item.content }}</div>
                        </div>
                    </div>
                    <div v-if="(item.comment.length > 0)" class="comment-box child">
                        <div class="item" v-for="(child, index) in item.comment" :key="index">
                            <div class="comment-item">
                                <div class="left">
                                    <img class="avatar"
                                        src="https://api.lew.kamtao.com/manage/common/avatar/550/4B78CA/%E5%BC%A0"
                                        alt="" srcset="">
                                </div>
                                <div class="right">
                                    <div class="nickname"> {{ child.user.nickname }} </div>
                                    <div class="content">{{ child.content }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="reply-wrapper">

        </div>
    </div>
</template> 
 
<style lang="scss" scoped>
.comment {
    position: relative;
    width: 100%;
    height: calc(100vh - 22px);
    overflow: hidden;
    box-sizing: border-box;

    .title {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0px 20px;
        box-sizing: border-box;

        .vs-tag {
            margin-left: 10px;
        }
    }

    .comment-wrapper {
        width: 100%;
        height: calc(100vh - 250px - 22px);
        padding: 5px 20px 20px 20px;
        overflow-y: auto;
        box-sizing: border-box;
    }

    .parent {
        gap: 20px;
    }

    .child {
        gap: 20px;
        padding-top: 10px;
    }

    .comment-box {
        width: 100%;
        display: flex;
        flex-direction: column;

        .comment-item {
            display: flex;
            gap: 10px;
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
            margin-top: 10px;
        }
    }



    .reply-wrapper {
        position: sticky;
        bottom: 0px;
        left: 0px;
        height: 200px;
        width: 100%;
        background-color: var(--base16);
    }
}
</style>
