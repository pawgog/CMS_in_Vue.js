import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from './router/router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app');
