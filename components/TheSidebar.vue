<script setup lang="ts">

</script>  

<template>
    <div class="sidebar">
        <div class="nav">
            <div class="top">
                <div class="item active">
                    <i class="codicon codicon-files" aria-hidden="true"></i>
                </div>
                <div class="item">
                    <i class="codicon codicon-search" aria-hidden="true"></i>
                </div>
            </div>
            <div class="bottom">
                <div class="item">
                    <i class="codicon codicon-account" aria-hidden="true"></i>
                </div>
                <div class="item">
                    <i class="codicon codicon-settings-gear" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="menu">
            <series-list />
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
        width: 60px;
        height: 100%;
        background-color: var(--base16);
        box-sizing: border-box;

        .item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            cursor: pointer;

            .codicon {
                color: var(--base10);
                font-size: 28px;
            }
        }

        .item:hover {
            .codicon {
                color: var(--base01);
            }
        }

        .active {
            border-left: 2px var(--base01) solid;

            .codicon {
                color: var(--base01);

            }
        }
    }

    .menu {
        display: flex;
        flex-direction: column;
        width: 340px;
        height: 100%;
        background-color: var(--base19);
        box-sizing: border-box;
    }
}
</style>
