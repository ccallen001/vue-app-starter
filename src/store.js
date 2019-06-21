/* 

store.js ...this file is used to setup the store

You will configure the store here 

Help: https://vuex.vuejs.org/guide/

*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    }
  },
  actions: {

  }
});
