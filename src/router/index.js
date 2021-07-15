import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 解决导航栏中的vue-router重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('../views/home/Home.vue');
const HomeNews = () => import('../views/home/HomeNews.vue');
const HomeMsg = () => import('../views/home/HomeMsg.vue');
const Vote = () => import('../views/vote/Vote.vue');
const Introduce = () => import('../views/introduce/Introduce.vue');
const Rank = () => import('../views/rank/Rank.vue');

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        meta: {
            title: '首页'
        },
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'msg',
                component: HomeMsg
            }
        ]
    },
    {
        path: '/vote',
        meta: {
            title: '投票'
        },
        name: 'vote',
        component: Vote
    },
    {
        path: '/introduce',
        meta: {
            title: '介绍'
        },
        name: 'Introduce',
        component: Introduce
    },
    {
        path: '/rank',
        meta: {
            title: '排行'
        },
        name: 'Rank',
        component: Rank
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
})

export default router
