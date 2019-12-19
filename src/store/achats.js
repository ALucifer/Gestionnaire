import clientAchat from '../services/client/achat';

export default {
    namespaced: true,
    state: {
        achats: [],
        filteredAchats: [],
        categories: [],
        filter: '',
    },
    getters: {
        categories(state) {return state.categories},
        achats(state){return state.achats},
        filteredAchats(state){return state.filteredAchats},
    },
    mutations: {
        fetching_success(state, data) {
            state.achats = data.achats;
            state.categories = data.categories;
            state.filteredAchats = data.achats;
        },
        remove_item(state, item) {
            const index = state.achats.indexOf(item);
            state.achats.splice(index,1);
        },
        add_item(state, item) {
            state.achats.unshift(item);
            return item;
        },
        filtreList(state, name) {
            if (!(name) || name === '{}') {
                state.filter = null;
                state.filteredAchats = null;
            } else {
                state.filter = name;
                state.filteredAchats = state.achats.filter(a => new RegExp(name).test(a.name));
            }
           /* state.filter = name;
            var test = state.achats.filter(a => new RegExp(name).test(a.name));
            console.log(name,test)*/

            //state.filteredAchats = state.achats.filter(a => new RegExp(name).test(a.name))
        }
    },
    actions: {
        fetchAll({ commit }) {
            return clientAchat.getAll().then(res => commit('fetching_success', res.data))
        },
        removeItem({ commit }, item) {
            return clientAchat.delete(item).then(() => commit('remove_item', item));
        },
        addItem({ commit }, item) {
            return clientAchat.create(item)
                .then(res => commit('add_item', res.data))
                .then((achat) => commit('statistiques/add_achat', achat));
        },
        filtreList({commit}, name) {
            commit('filtreList', name);
        }
    }
}