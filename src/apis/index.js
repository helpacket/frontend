import Vue from 'vue'
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost"; /* To be removed */
import {store} from "../stores"

Vue.use(VueApollo);

const API_ENDPOINT = window.location.protocol + "//" + window.location.hostname + ":8000/graphql/";

export const client = new ApolloClient({
    uri: API_ENDPOINT,
    request: (operation) => {
        if (store.getters.isLoggedIn) {
            const token = store.state["token"];
            operation.setContext({
                headers: {
                    Authorization: "JWT " + token,
                }
            })
        }
    }
});

export const apollo = new VueApollo({
    defaultClient: client
});
