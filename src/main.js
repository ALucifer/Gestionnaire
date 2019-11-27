import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import BootstraVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import feather from 'vue-icon';

Vue.config.productionTip = false;

Vue.use(BootstraVue);
Vue.use(Vuelidate);
Vue.use(feather, 'v-icon');

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app');
