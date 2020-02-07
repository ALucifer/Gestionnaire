import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
    render: h => h(App),
    router: router,
    store: store,
    vuetify,

    created: function () {
        const token = localStorage.getItem('token');
        if (token) {
            const userData = JSON.parse(token);

            this.$store.commit('security/set_user_data', userData);
        }

        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.message === "Network Error") {
                    this.$store.dispatch('security/logout');
                    this.$router.push('/login');
                    return ;
                }

                const statusRedirected = [401, 500];
                if (statusRedirected.includes(error.response.status)) {
                    this.$store.dispatch('security/logout');
                    this.$router.push('/login');
                }
                return Promise.reject(error)
            }
        )
    }
}).$mount('#app');
