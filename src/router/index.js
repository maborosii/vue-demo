import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'

// 产品管理
import GoodSManage from '@/views/GoodsManage'
import GoodsList from '@/views/GoodsManage/List'
import GoodsAudit from '@/views/GoodsManage/Audit'

// 订单管理
import OrderManage from '@/views/OrderManage'
import OrderList from '@/views/OrderManage/List'
import OrderAudit from '@/views/OrderManage/Audit'

// 商户管理
import MerchantManage from '@/views/MerchantManage'
import MerchantList from '@/views/MerchantManage/List'
import MerchantAudit from '@/views/MerchantManage/Audit'

// 用户管理
import UserManage from '@/views/UserManage'
import UserList from '@/views/UserManage/List'
import UserAudit from '@/views/UserManage/Audit'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Layout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/goods',
                name: 'goods',
                component: GoodSManage,
                children: [{
                        path: 'list',
                        name: 'goodslist',
                        component: GoodsList,
                    },
                    {
                        path: 'audit',
                        name: 'goodsaudit',
                        component: GoodsAudit,
                    },
                ],
            },
            {
                path: '/order',
                name: 'order',
                component: OrderManage,
                children: [{
                        path: 'list',
                        name: 'orderlist',
                        component: OrderList,
                    },
                    {
                        path: 'audit',
                        name: 'orderaudit',
                        component: OrderAudit,
                    },
                ],
            },
            {
                path: '/merchant',
                name: 'merchant',
                component: MerchantManage,
                children: [{
                        path: 'list',
                        name: 'merchantlist',
                        component: MerchantList,
                    },
                    {
                        path: 'audit',
                        name: 'merchantaudit',
                        component: MerchantAudit,
                    },
                ],
            },
            {
                path: '/user',
                name: 'user',
                component: UserManage,
                children: [{
                        path: 'list',
                        name: 'userlist',
                        component: UserList,
                    },
                    {
                        path: 'audit',
                        name: 'useraudit',
                        component: UserAudit,
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router