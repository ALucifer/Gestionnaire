import clientAchat from '../services/client/achat';
import randomcolor from 'randomcolor';

export default {
    namespaced: true,
    state: {
        achats: [],
        categories: [],
        filteredAchats: []
    },
    getters: {
        filteredAchats(state) {
            return state.filteredAchats;
        },
        categories(state) {
            return state.categories;
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
        fetching_success(state, data) {
            state.achats = data.achats;
            state.categories = data.categories;
            state.filteredAchats = data.achats;
        },
        remove_item(state, item) {
            const index = state.achats.indexOf(item);
            state.filteredAchats.splice(index, 1);
        },
        add_item(state, item) {
            state.filteredAchats.unshift(item);
            return item;
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
            return clientAchat.create(item)
                .then(res => commit('add_item', res.data))
                .then((achat) => commit('statistiques/add_achat', achat));
        },
        fetchAll({ commit }) {
            return clientAchat.getAll().then(res => commit('fetching_success', res.data))
        },
        filter({ commit }, name) {
            commit('filter', name);
        }
    }
}