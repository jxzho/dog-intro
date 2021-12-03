import Vue from 'vue'
import App from './App.vue'
import store from '@/store'

import '@/modules/init'
import '@/plugins'
import { pageData } from '@/mock/index'

import '@/assets/styles'

import vConolse from 'vconsole'

const isDev = process.env.NODE_ENV === 'development'

Vue.config.productionTip = isDev

Vue.prototype.$eventBus = new Vue()
Vue.prototype.$global = pageData

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

if (isDev) {
  new vConolse()
  // console.log(window.innerWidth || document)
}
