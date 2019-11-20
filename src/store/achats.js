import clientAchat from '../client/achat';

export default {
    namespaced: true,
    state: {
        achats: []
    },
    getters: {
        achats(state) {
            return state.achats.filter(achat => achat.name == "test");
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
        ['FETCHING_SUCCESS'](state, achats) {
            state.achats = achats;
        },
        ['REMOVE_ITEM'](state, item) {
            const index = state.achats.indexOf(item);
            state.achats.splice(index, 1);
        },
        ['ADD_ITEM'](state, item) {
            state.achats.unshift(item);
        }
    },
    actions: {
        removeItem({ commit }, item) {
            return clientAchat.delete(item).then(() => commit('REMOVE_ITEM', item));
        },
        addItem({ commit }, item) {
            return clientAchat.create(item).then(res => commit('ADD_ITEM', res.data)); // todo: cote api faire le retour de l'object
        },
        fetchAll({ commit }) {
            return clientAchat.getAll().then(res => commit('FETCHING_SUCCESS', res.data))
        }
    }
}