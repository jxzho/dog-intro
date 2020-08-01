import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

import '@/assets/styles'

import './plugins'
import MockGlobal from '@/mock'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()
Vue.prototype.$global = MockGlobal

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
