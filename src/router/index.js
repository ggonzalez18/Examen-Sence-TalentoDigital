import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/seller',
        name: 'Seller',
        component: () =>
            import ( /* webpackChunkName: "Seller" */ '../views/Seller.vue')
    },
    {
        path: '/*',
        name: 'NotFound',
        component: () =>
            import ( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router