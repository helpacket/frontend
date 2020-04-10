import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Vuex from 'vuex'
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

import router from './router';


Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(Vuex)

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/",
    request: (operation) => {
        if (store.getters.isLoggedIn) {
            const token = store.state["token"];
            window.console.log(token);
            operation.setContext({
                headers: {
                    Authorization: "JWT " + token,
                }
            })
        }
    }
});

const apolloProvider = new VueApollo({
    defaultClient: client
});

const store = new Vuex.Store({
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            window.console.log("lalalala");
            client.resetStore();
            window.console.log("lolololo");
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.token !== null;
        }
    }
});

new Vue({
    vuetify,
    router,
    "render": h => h(App),
    apolloProvider,
    store,
}).$mount('#app');
