<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="header">
            <div class="icon">
                <i v-if="isCollapse" @click="expandmenu" class="iconfont icon-right-indent"></i>
                <i v-else @click="expandmenu" class="iconfont icon-left-indent"></i>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        expandmenu() {
            this.$emit('changeMenu')
        },
    },
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 50px;
    background: #1e78bf;
    color: #fff;
    line-height: 50px;
    .icon {
        i {
            font-size: 30px;
        }
    }
}
</style>
