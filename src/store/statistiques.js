import statistiquesClient from '../services/client/statistiques'

export default {
    namespaced: true,
    state: {
        statistiques: [],
        isLoad: false
    },
    getters: {
        get_statistiques(state) {
            return state.statistiques;
        },
        isLoaded(state) {
            return state.isLoad;
        }
    },
    mutations: {
        fetch_statistiques(state) {
            state.statistiques = [];
            state.isLoad = false
        },
        fetch_success(state, data) {
            state.statistiques = data;
            state.isLoad = true
        }
    },
    actions: {
         async fetchStatistiques({ commit }) {
            commit('fetch_statistiques');
            return await statistiquesClient.statistiquesAchatsByCategory()
                .then(res => commit('fetch_success', res.data))
        }
    }
}