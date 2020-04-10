import Vue from 'vue'
import Vuex from "vuex";
import {client} from "../apis";

Vue.use(Vuex)

export const store = new Vuex.Store({
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