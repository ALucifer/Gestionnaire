import Vue from 'vue'
import Vuex from 'vuex'
import CalculatriceStore from './calculatrice'
import ListCalculStore from './listCalcul'
import ListAchatStore from './achats';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        calculatrice: CalculatriceStore,
        listCalcul: ListCalculStore,
        achats: ListAchatStore
    }
})