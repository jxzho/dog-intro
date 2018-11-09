import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  curIndex: 0,
  ifShowViewer: false,
  url: ''
};

const mutations = {
  changeIndex (state, index) {
    state.curIndex = index;
  },
  showViewer (state, url) {
    state.ifShowViewer = true;
    state.url = url;
  },
  hideViewer (state) {
    state.ifShowViewer = false;
  }
};

export default new Vuex.Store({
  state,
  mutations
});