import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const CHANGE_INDEX = 'changeIndex'

const state = {
  curIndex: 0,
  transitionEnd: true,
  ifShowViewer: false,
  url: '',
}
const actions = {
  slideUp({ commit, state }) {
    const val = state.curIndex - 1
    if (val >= 0) {
      commit(CHANGE_INDEX, val)
      commit('changeTranEnd', false)
    }
  },
  slideDown({ commit, state }) {
    const val = state.curIndex + 1
    if (val < 4) {
      commit(CHANGE_INDEX, val)
      commit('changeTranEnd', false)
    }
  },
}

const mutations = {
  [CHANGE_INDEX](state, index) {
    state.curIndex = index
  },
  changeTranEnd(state, boolean) {
    state.transitionEnd = boolean
  },
  showViewer(state, url) {
    state.ifShowViewer = true
    state.url = url
  },
  hideViewer(state) {
    state.ifShowViewer = false
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
