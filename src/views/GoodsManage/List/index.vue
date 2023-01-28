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
            <el-table :data="pagedData" border strip="true" style="width: 100%" height="450">
                <el-table-column type="selection" width="40"></el-table-column>
                <el-table-column
                    fixed
                    sortable
                    prop="date"
                    label="日期"
                    width="150"
                ></el-table-column>
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
                <el-table-column prop="idEdit" label="可编辑" width="80">
                    <template slot-scope="scope">
                        {{ edited(scope.row.isEdit) }}
                    </template>
                </el-table-column>
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
                            :disabled="!scope.row.isEdit"
                            icon="el-icon-delete"
                            @click="handleDelete(scope.$index, scope.row)"
                        >
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <Pagination
                :total="total"
                :pageSize="pageSize"
                @handleSizeChange="handleSizeChange"
                @handleCurrentChange="handleCurrentChange"
            ></Pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
    data() {
        return {
            formInline: {
                name: '',
                project: '',
            },
            allData: [],
            // 分页数据,这里用来保存每页切割后的数据
            // 看起来格式是这样的[[{},{},{}],[{},{},{}]]
            // 数组内套数组，每个数组就是一页数据
            totalPageData: [],
            // 共几页
            pageNum: 1,
            // 每页显示数量
            pageSize: 10,
            // 当前显示页码
            currentPage: 1,
            // 总共多少条数据
            total: 1,
            // 当前要显示的数据
            pagedData: [],
        }
    },
    components: {
        Pagination,
    },
    computed: {},
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
        edited(boolean) {
            return boolean ? '是' : '否'
        },
        handleCurrentChange(newPageNum) {
            console.log('当前页码:', newPageNum)
            this.currentPage = newPageNum
            this.pagedData = this.totalPageData[newPageNum - 1]
        },
        handleSizeChange(newPageSize) {
            this.pageSize = newPageSize
            this.calcPageData()
        },
        async getMockGoodsList() {
            try {
                const result = await this.$api.getGoodsList()
                if (result.data.code == 0) {
                    this.total = result.data.data.data.length
                    this.allData = result.data.data.data
                    this.calcPageData()
                }
                //console.log(result.data.data.data);
            } catch (error) {
                console.log(error)
            }
        },
        calcPageData() {
            // 计算页数(根据后台数据的条数和每页显示数量算出一共几页,得0时设为1)
            if (this.allData.length > 1) {
                this.pageNum = Math.ceil(this.allData.length / this.pageSize) || 1
                console.log('总页数:', this.pageNum)
            }
            // 数据分组
            for (let i = 0; i < this.pageNum; i++) {
                // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
                // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10条，即slice(5,10)...
                this.totalPageData[i] = this.allData.slice(
                    this.pageSize * i,
                    this.pageSize * (i + 1)
                )
            }
            // 获取到数据后显示第一页内容,数组下标是从0开始的，这里一定要减去1，不然会丢失一组数据
            this.pagedData = this.totalPageData[this.currentPage - 1]
            console.log(this.pagedData)
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
