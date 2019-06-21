/* 

router.js ...this file is used to setup routing

You will configure routes here 

Help: https://router.vuejs.org/guide/

*/

import Vue from 'vue';
import Router from 'vue-router';

import View0 from './views/View0.vue';
import View1 from './views/View1.vue';
import StoreTest from './views/StoreTest.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'route-View0',
      component: View0
    },
    {
      path: '/view1',
      name: 'route-View1',
      component: View1
    },
    {
      path: '/store-test',
      name: 'route-StoreTest',
      component: StoreTest
    }
  ]
});
