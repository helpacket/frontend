import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ConcertInfo from '../views/ConcertInfo.vue'
import AllConcerts from '../views/Home.vue'
import RequestForm from "../views/RequestForm";

Vue.use(VueRouter)

// const Prueba = { template: 'HOLA MUNDO'}

const routes = [
    {
        path: '/',
        component: AllConcerts
    },
    {
        path: '/concert/:id',
        component: ConcertInfo,
        props: true
    },
    {
        path: '/request_form',
        component: RequestForm
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
