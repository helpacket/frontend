import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

import {AUTH_TOKEN} from './constants/settings';
import router from './router';


Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(VueRouter);

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/",
    request: (operation) => {
        const token = localStorage.getItem(AUTH_TOKEN);
        window.console.log(token);
        operation.setContext({
            headers: {
                Authorization: "JWT " + token,
            }
        })
    }
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
