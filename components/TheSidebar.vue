<script setup lang="ts">
import { ref } from "vue";
let mode = ref("series")
let modeList = ref(
    {
        top: [{
            mode: "series",
            icon: "files"
        }, {
            mode: "search",
            icon: "search"
        }],


        bottom: [{
            mode: "user",
            icon: "account"
        }, {
            mode: "setting",
            icon: "settings-gear"
        },]
    }
)

</script>  

<template>
    <div class="sidebar">
        <div class="nav">
            <div class="top">
                <div @click="mode = item.mode" v-for="(item, index) in modeList.top" :key="index" class="item"
                    :class="{active:mode==item.mode}">
                    <i class="codicon" :class="`codicon-${item.icon}`" aria-hidden="true"></i>
                </div>
            </div>
            <div class="bottom">
                <div @click="mode = item.mode" v-for="(item, index) in modeList.bottom" :key="index" class="item"
                    :class="{ active: mode == item.mode }">
                    <i class="codicon" :class="`codicon-${item.icon}`" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="sidebar-main">
            <panel-series v-if="mode == 'series'" />
            <panel-search v-if="mode == 'search'" />
            <panel-user v-if="mode == 'user'" />
            <panel-setting v-if="mode == 'setting'" />
        </div>
    </div>
</template> 
 
<style lang="scss" scoped>
.sidebar {
    display: flex;
    width: 400px;
    height: 100%;
    overflow: hidden;
    user-select: none;

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
        width: 352px;
        height: 100%;
        background-color: var(--base19);
        box-sizing: border-box;
    }
}
</style>
