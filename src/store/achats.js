import clientAchat from '../client/achat';

export default {
    namespaced: true,
    state: {
        achats: [],
        filteredAchats: []
    },
    getters: {
        filteredAchats(state) {
            return state.filteredAchats;
        },
        total(state) {
            let result = 0;
            state.achats.forEach(item => {
                result += item.price;
            })

            return result;
        }
    },
    mutations: {
        fetching_success(state, achats) {
            state.achats = achats;
            state.filteredAchats = achats;
        },
        remove_item(state, item) {
            const index = state.achats.indexOf(item);
            state.filteredAchats.splice(index, 1);
        },
        add_item(state, item) {
            state.filteredAchats.unshift(item);
        },
        filter(state, name) {
            state.filteredAchats = state.achats.filter(a => new RegExp(name).test(a.name))
        }
    },
    actions: {
        removeItem({ commit }, item) {
            return clientAchat.delete(item).then(() => commit('remove_item', item));
        },
        addItem({ commit }, item) {
            return clientAchat.create(item).then(res => commit('add_item', res.data)); // todo: cote api faire le retour de l'object
        },
        fetchAll({ commit }) {
            return clientAchat.getAll().then(res => commit('fetching_success', res.data))
        },
        filter({ commit }, name) {
            commit('filter', name);
        }
    }
}