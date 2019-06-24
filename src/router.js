import Vue from 'vue';

import Router from 'vue-router';

import View0 from './views/View0.vue';
import View1 from './views/View1.vue';
import Test from './views/Test.vue';

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
      path: '/test',
      name: 'route-Test',
      component: Test
    }
  ]
});
