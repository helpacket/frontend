import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import {router} from './routers';
import {apollo} from "./apis";
import {store} from "./stores";

Vue.config.productionTip = false;


new Vue({
    vuetify,
    router,
    "render": h => h(App),
    "apolloProvider": apollo,
    store,
}).$mount('#app');
