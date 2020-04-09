import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ConcertInfo from '../views/ConcertInfo.vue'
import AllConcerts from '../views/Home.vue'
import RequestForm from "../views/RequestForm";
import Login from "../views/Login";
import Join from "../views/Join";
import Registered from "../views/Registered"; /* To be removed */

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: AllConcerts
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
        path: '/registered',
        component: Registered  /* To be removed */
    },
    {
        path: '/concert/:id',
        component: ConcertInfo,
        props: true
    },
    {
        path: '/request_form',
        component: RequestForm
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
