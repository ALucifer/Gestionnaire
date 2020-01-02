import securityClient from '../services/client/security';
import axios from 'axios';

export default {
    namespaced: true,
    state: {
        isLoading: false,
        errors: [],
        token: null,
        user: null
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        getErrors(state) {
            return state.errors;
        },
        isLogged(state) {
            return state.token;
        },
        getUsername(state) {
            return state.user.username;
        }
    },
    mutations: {
        auth_loading(state) {
          state.isLoading = true;
          state.errors = [];
        },
        auth_success(state, token) {
            state.isLoading = false;
            state.token = token;
            localStorage.setItem('token', JSON.stringify(token));
            axios.defaults.headers.common['Authorization'] = `Bearer ${
                token
            }`
        },
        auth_failed(state, errors) {
          state.isLoading = false;
          state.errors = errors
        },
        set_user_data(state, token) {
            state.token = token;
            localStorage.setItem('token', JSON.stringify(token));
            axios.defaults.headers.common['Authorization'] = `Bearer ${
                token
            }`
        },
        clear_user_data(state) {
            state.token = null;
            state.isLoading = false;
            state.errors = [];
            state.user = null;
            localStorage.removeItem('token');
        },
        set_user_information(state, user) {
            console.log(user)
            state.user = user;
        }
    },
    actions: {
        async login({commit}, payload) {
            commit('auth_loading');
            await securityClient
                .getToken(payload)
                .then((res) => {
                    commit('auth_success',res.data.token);
                })
                .then(async () => {
                    const user = await securityClient.getUser();
                    commit('set_user_information', user.data);
                })
                .catch(() => {
                commit('auth_failed', [{'message': 'Login ou mot de passe incorrect'}]);
            });
        },
        logout({commit}) {
            commit('clear_user_data');
        }
    }
}
