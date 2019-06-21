/* 

main.js ...this file is used to setup the app, including router and store

You probably don't need to touch it :)

*/

import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root');