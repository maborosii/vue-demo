<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="goods-list">
        <div class="header-search">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="产品名称">
                    <el-input v-model="formInline.name" placeholder="SLB"></el-input>
                </el-form-item>
                <el-form-item label="所属项目">
                    <el-select v-model="formInline.project" placeholder="乐摇摇">
                        <el-option label="乐摇摇" value="leyaoyao"></el-option>
                        <el-option label="易普乐" value="yipule"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="goods-ops">
            <el-button type="warning" size="small">添加产品</el-button>
            <el-button type="danger" size="small">批量删除</el-button>
        </div>
        <div class="goods-table">
            <el-table :data="tableData" border strip="true" style="width: 100%" height="450">
                <el-table-column type="selection" width="40"></el-table-column>
                <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="province" label="省份" width="80"></el-table-column>
                <el-table-column prop="city" label="市区" width="80"></el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                    width="180"
                    show-overflow-tooltip
                ></el-table-column>
                <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
                <el-table-column
                    prop="edited(scope.row.isEdit)"
                    label="可编辑"
                    width="80"
                ></el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="warning"
                            icon="el-icon-search"
                            @click="handleDetail(scope.$index, scope.row)"
                        >
                            查看
                        </el-button>
                        <el-button
                            size="mini"
                            type="warning"
                            :disabled="!scope.row.isEdit"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >
                            编辑
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            icon="el-icon-delete"
                            @click="handleDelete(scope.$index, scope.row)"
                        >
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                name: '',
                project: '',
            },
            tableData: [],
        }
    },
    computed: {
        edited(boolean) {
            return boolean ? '是' : '否'
        },
    },
    methods: {
        handleDetail(index, row) {
            console.log(index, row.isEdit)
        },
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row) {
            console.log(index, row)
        },
        async getMockGoodsList() {
            try {
                const result = await this.$api.getGoodsList()
                if (result.data.code == 0) {
                    this.tableData = result.data.data.data
                }
                //console.log(result.data.data.data);
            } catch (error) {
                console.log(error)
            }
        },
    },
    mounted() {
        this.getMockGoodsList()
    },
}
</script>

<style lang="less" scoped>
.goods-list {
    padding: 10px;
    .header-search {
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        .el-form-item {
            margin-bottom: 0;
        }
    }
    .goods-ops {
        padding: 10px;
        padding-bottom: 20px;
        background: #fff;
        border-radius: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .goods-table {
        margin-top: 20px;
        // padding-top: 20px;
        padding-left: 10px;
    }
}
</style>
