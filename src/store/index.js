import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { INCREMENT, DECREMENT } from './mutations-types'

const moduleA = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
};

const moduleB = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
};

export default new Vuex.Store({
    state: {
        counter: 1000,
        isShow: true
    },
    mutations: {
        [INCREMENT](state) {
            state.counter++;
        },
        [DECREMENT](state) {
            state.counter--;
        },
        hideTabBar(state) {
            state.isShow = false;
        }
    },
    actions: {
        aUpdateInfo(context) {
            setTimeout(() => {
                context.commit(INCREMENT)
            }, 1000)
        }
    },
    getters: {},
    modules: {
        a: moduleA,
        b: moduleB
    }
})
