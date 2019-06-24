import Vue from 'vue';

import modal from 'vue-js-modal';
import router from './router';
import store from './store';

import App from './App.vue'

Vue.config.productionTip = false;

// plugins

Vue.use(modal, { dynamic: true });

// add app-wide data and methods here, but BE CAREFUL!
Vue.mixin({});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root');