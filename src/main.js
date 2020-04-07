import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import VueRouter from 'vue-router';
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(VueRouter);

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/"
});

const apolloProvider = new VueApollo({
    defaultClient: client
});

new Vue({
    vuetify,
    router,
    "render": h => h(App),
    apolloProvider,
}).$mount('#app');
