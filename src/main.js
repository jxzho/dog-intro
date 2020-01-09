import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

import '@/assets/styles'

import './plugins'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
