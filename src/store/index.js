import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  curIndex: 0
};

const mutations = {
  changeIndex (state, index) {
    state.curIndex = index;
  }
};

export default new Vuex.Store({
  state,
  mutations
});