export default {
    namespaced: true,
    state: {
        calcul: '',
        input: 0
    },
    getters: {
        input(state) {
            return state.input;
        },
        calcul(state) {
            return state.calcul;
        }
    },
    mutations: {
        ['ADD_NUMBER'](state, number) {
            state.input = state.input + number;
            state.calcul = state.calcul + number;
        },
        ['PLUS'](state) {
            state.input = 0;
            state.calcul = state.calcul + "+";
        },
        ['MOINS'](state) {
            state.input = 0;
            state.calcul = state.calcul + "-";
        },
        ['RESULTAT'](state) {
            state.input = eval(state.calcul);
            state.calcul = '';
        }
    },
    actions: {
        addNumber({commit}, number) {
            commit('ADD_NUMBER', number);
        },
        plus({commit}) {
            commit('PLUS');
        },
        moins({commit}) {
            commit('MOINS');
        },
        getResultat({commit}) {
            commit("RESULTAT");
        }
    }
}