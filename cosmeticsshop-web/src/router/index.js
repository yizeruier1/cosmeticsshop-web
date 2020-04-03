import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import Detail from '../views/detail.vue'
import Index from '../views/index.vue'
import About from '../views/about.vue'
import Category from '../views/category.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/index',
        meta: {
            keepAlive: true // 不需要被缓存
        },
        children: [
            {
                path: '/index',
                name: 'Index',
                component: Index,
                meta: {
                    keepAlive: true // 需要被缓存
                }
            },
            {
                path: '/category',
                name: 'Category',
                component: Category,
                meta: {
                    keepAlive: true // 需要被缓存
                }
            },
            {
                path: '/about',
                name: 'About',
                component: About,
                meta: {
                    keepAlive: true // 不需要被缓存
                }
            }
        ]
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {
            keepAlive: false // 不需要被缓存
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
