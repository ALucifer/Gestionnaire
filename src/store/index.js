import Vue from 'vue'
import Vuex from 'vuex'
import ListAchatStore from './achats';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        achats: ListAchatStore
    }
})