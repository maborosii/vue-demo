<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="layout">
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <div class="content">
            <Content @changeMenu="changeMainMenu"></Content>
        </div>
    </div>
</template>

<script>
import Menu from './Menu'
import Content from './Content'

export default {
    data() {
        return {
            isCollapse: false,
        }
    },
    methods: {
        changeMainMenu() {
            this.isCollapse = !this.isCollapse
        },
    },
    components: {
        Menu,
        Content,
    },
}
</script>

<style lang="less" scoped>
.layout {
    .menu {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        // width: 200px;
        background: #10154af0;
        /deep/ .el-menu {
            border-right: none;
        }
    }
    .content {
        padding-left: 200px;
    }
}
</style>
