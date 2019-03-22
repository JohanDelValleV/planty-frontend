import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Live from '@/components/Live'

Vue.use(Router)

const router = new Router({
    // mode: "history",
    routes: [
        {
            path: '/',
            redirect: 'login',
            name: 'login',
            component: Login,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/live',
            name: 'live',
            component: Live,
        }
        
    ]
});
export default router