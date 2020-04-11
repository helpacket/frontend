import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RequestForm from "../views/RequestForm";
import SupplyForm from "../views/SupplyForm";
import TransactionHistory from "../views/TransactionHistory";
import Statistics from "../views/Statistics"
import Login from "../views/Login";
import Join from "../views/Join";
import NotFound from "../views/NotFound"

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
        path: '/requests/new',
        component: RequestForm,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/supplies/new',
        component: SupplyForm,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/transactions',
        component: TransactionHistory,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/statistics',
        component: Statistics,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "*", component: NotFound,
    }
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



