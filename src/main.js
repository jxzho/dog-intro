import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

import '@/modules/init'
import '@/plugins'
import { pageData } from '@/mock/index'

import '@/assets/styles'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()
Vue.prototype.$global = pageData

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
