import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import load from './views/load.vue'
import init from './views/init'
import navbar from './views/navbar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/load',
            name: 'load',
            component: load
        },
        {
            path: '/init',
            name: 'init',
            component: init
        },
        {
            path: '/navbar',
            name: 'navbar',
            component: navbar
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
