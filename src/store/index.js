import Vue from 'vue'
import Vuex from 'vuex'
import ListAchatStore from './achats';
import statistiquesStore from './statistiques'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        achats: ListAchatStore,
        statistiques:  statistiquesStore
    }
})