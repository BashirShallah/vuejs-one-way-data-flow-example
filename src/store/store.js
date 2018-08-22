import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        counter(state){
            return state.counter;
        },
        doubledCounter(state){
            return state.counter * 2;
        },
        multiCounter: (state) => (multi) => {
            return state.counter * multi;
        }
    }
});

export default store;