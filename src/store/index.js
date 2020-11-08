import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  curIndex: 0,
  transitionEnd: true,
  ifShowViewer: false,
  url: ''
};

const mutations = {
  changeIndex (state, index) {
    state.curIndex = index;
  },
  changeTranEnd (state, boolean) {
    state.transitionEnd = boolean;
  },
  showViewer (state, url) {
    state.ifShowViewer = true;
    state.url = url;
  },
  hideViewer (state) {
    state.ifShowViewer = false;
  }
};

const store = new Vuex.Store({
  state,
  mutations
})

export default store;

export function useStore () {
  return store
}