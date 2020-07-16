import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import axios from 'axios';
import router from './router/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const axiosCustom = axios.create({
  baseURL: 'http://localhost:4001',
});

Vue.config.productionTip = false;

Vue.use(VueAxios, axiosCustom);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app');
