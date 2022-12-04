<script setup lang="ts">
import { ref } from "vue"

</script>  

<template>
    <div class="links">
        <div class="title">友情链接</div>
        <div class="list">
            <div v-for="(item, index) in [0, 1, 1, 1, 1, 1]" :key="index" class="item">
                <img class="avatar" src="https://api.lew.kamtao.com/manage/common/avatar/550/4B78CA/%E5%BC%A0" alt=""
                    srcset="">
                <div class="info">
                    <div class="blog">博客名称</div>
                    <div class="url">http://localhost:3000/article/23</div>
                </div>
            </div>
            <div v-for="(item, index) in [0, 1, 1, 1, 1, 1]" :key="index" class="item">
                <img class="avatar" src="https://api.lew.kamtao.com/manage/common/avatar/550/4B78CA/%E5%BC%A0" alt=""
                    srcset="">
                <div class="info">
                    <div class="blog">博客名称</div>
                    <div class="url">http://localhost:3000/article/23</div>
                </div>
            </div>
            <div v-for="(item, index) in [0, 1, 1, 1, 1, 1]" :key="index" class="item">
                <img class="avatar" src="https://api.lew.kamtao.com/manage/common/avatar/550/4B78CA/%E5%BC%A0" alt=""
                    srcset="">
                <div class="info">
                    <div class="blog">博客名称</div>
                    <div class="url">http://localhost:3000/article/23</div>
                </div>
            </div>
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
