import Vue from 'vue'
import App from './App.vue'

import {vuetify} from './plugins/vuetify';
import {router} from './routers';
import {apollo} from "./apis";
import {store} from "./stores";

Vue.config.productionTip = false;

import VueGoogleCharts from 'vue-google-charts'

import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);
Vue.use(VueGoogleCharts)

new Vue({
    vuetify,
    router,
    "render": h => h(App),
    "apolloProvider": apollo,
    store,
}).$mount('#app');
