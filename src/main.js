import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import BootstrapVue from "bootstrap-vue";
import axios from 'axios';
import router from './router/router';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app');
