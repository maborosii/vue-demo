<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        background-color="#10154af0"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :collapse="isCollapse"
    >
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
        </el-menu-item>
        <el-submenu index="/goods">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">产品管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/goods/list">产品列表</el-menu-item>
                <el-menu-item index="/goods/audit">产品审核</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/order">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/order/list">订单列表</el-menu-item>
                <el-menu-item index="/order/audit">订单审核</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/merchant">
            <template slot="title">
                <i class="el-icon-star-off"></i>
                <span slot="title">商户管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/merchant/list">商户列表</el-menu-item>
                <el-menu-item index="/merchant/audit">商户审核</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/user">
            <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/user/list">用户列表</el-menu-item>
                <el-menu-item index="/user/audit">用户审核</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

<script>
export default {
    props: ['isCollapse'],
}
</script>
