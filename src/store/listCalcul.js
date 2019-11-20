export default {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        list(state) {
            return state.list;
        }
    },
    mutations: {
        ['ADD_CALCUL'](state, calcul) {
            state.list.unshift(calcul);
        }
    },
    actions: {
        addCalcul({commit}, calcul) {
            commit('ADD_CALCUL', calcul);
        }
    }
}