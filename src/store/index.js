import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // currentUser = null,
        // currentPassword = null,

    },
    mutations: {
        SET_USER(state, payload) {
            state.currentUser = payload
        },
    },
    actions: {
        setUser({ commit }, payload) {
            commit('SET_USER', payload)
        }
    },
    modules: {}
})