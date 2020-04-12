import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import NewRequest from "../views/NewRequest";
import NewSupply from "../views/NewSupply";
import TransactionHistory from "../views/TransactionHistory";
import Analytics from "../views/Analytics"
import Login from "../views/Login";
import Join from "../views/Join";
import NotFound from "../views/NotFound"

import {store} from "../stores";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Landing
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
        path: '/requests/new',
        component: NewRequest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/supplies/new',
        component: NewSupply,
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
        path: '/analytics',
        component: Analytics,
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
    } else if (
        (to.path === "/login" || to.path === "/") && loggedIn
    ) {
        let destination = to.query.destination
        if (destination === undefined) {
            destination = "/transactions"
        }
        next({path: destination})
    } else {
        next()
    }
});



