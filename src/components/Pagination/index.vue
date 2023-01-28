<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <el-pagination
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        pageSize: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            currentPage: 1,
        }
    },
    methods: {
        handleCurrentChange(newPageNum) {
            this.$emit('handleCurrentChange', newPageNum)
        },
        handleSizeChange(newPageSize) {
            this.$emit('handleSizeChange', newPageSize)
        },
    },
}
</script>

<style lang="less" scoped>
.pagination {
    padding: 10px;
    background: #fff;
    text-align: left;
}
</style>
