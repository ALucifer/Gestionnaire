import Vue from 'vue'
import Vuex from 'vuex'
import ListAchatStore from './achats';
import statistiquesStore from './statistiques'
import SecurityStore from './security'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        achats: ListAchatStore,
        statistiques:  statistiquesStore,
        security: SecurityStore
    },
    strict: true
})