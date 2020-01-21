import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import BootstraVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import feather from 'vue-icon';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(BootstraVue);
Vue.use(Vuelidate);
Vue.use(feather, 'v-icon');

new Vue({
  render: h => h(App),
  router: router,
  store: store,
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
    },
}).$mount('#app');
