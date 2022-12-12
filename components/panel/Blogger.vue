<script setup >
import { ref } from "vue"
import { dateFormat } from "@/utils"

const { $api } = useNuxtApp();
let blogger = ref({})
blogger.value = (await $api.get("/blog/app/blogger")).data;

</script>  

<template>
    <div class="blogger">
        <div class="base">
            <img class="avatar" :src="blogger?.avatar" alt="" srcset="">
            <div class="nickname">
                {{ blogger?.nickname }} <i class="codicon codicon-verified-filled"></i>
            </div>
        </div>

        <div class="description">
            {{ blogger?.description }}
        </div>

        <div class="info">
            <div class="item">生于 <span class="value">{{ dateFormat(blogger?.birthday) }}</span></div>
            <div class="item">就职于 <span class="value">{{ blogger?.company }} </span></div>
            <div class="item">邮箱 <span class="value">{{ blogger?.email }}</span></div>
        </div>
    </div>
</template> 
   
<style lang="scss" scoped>
.blogger {
    padding: 20px;
    box-sizing: border-box;
    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }


    .nickname {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 16px;
        font-weight: bolder;

        .codicon {
            color: var(--blue06);
            font-size: 20px;
        }
    }

    .description {
        padding: 10px 0px;
        color: var(--base10);
        border-bottom: 1px var(--base15) solid;
        white-space: pre-wrap;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px 0px;


        .value {
            color: var(--blue06);
        }
    }
}
</style>
