import Vue from 'vue'
import VueRouter from 'vue-router'
import ConcertInfo from '../views/ConcertInfo.vue'
import Home from '../views/Home.vue'
import RequestForm from "../views/RequestForm";
import Login from "../views/Login";
import Join from "../views/Join";
import Dev from "../views/Dev"; /* To be removed */
import {store} from "../stores";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/dev',
        component: Dev,  /* To be removed */
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/concert/:id',
        component: ConcertInfo,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/request_form',
        component: RequestForm,
        meta: {
            requiresAuth: true
        }
    },
];

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn
    if (
        to.matched.some(record => record.meta.requiresAuth)
        && !loggedIn
    ) {
        next({path: "/login", query: {"destination": to.path}})
    } else if (to.path === "/login" && loggedIn) {
        let destination = to.query.destination
        if (destination === undefined) {
            destination = "/"
        }
        next({path: destination})
    } else {
        next()
    }
});


