import Vue from 'vue'
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
import {client} from "../apis";

Vue.use(Vuex)


export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            client.resetStore();
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.token !== null;
        }
    }
});