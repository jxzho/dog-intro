import Vue from 'vue'
import App from './App.vue'

import { initPages } from '@/modules/init'
import { registerGlobalComponents } from '@/plugins'
import { pageData } from '@/mock/index'
import { isMobile, isDev } from '@/utils'

import { State } from '@/store/state'

import '@/assets/styles'

initPages()
registerGlobalComponents()

Vue.config.productionTip = isDev

Vue.prototype.$eventBus = new Vue()
Vue.prototype.$global = pageData

Vue.use(State)

new Vue({
  render: h => h(App),
}).$mount('#app')

if (isDev && isMobile()) {
  import('vconsole').then(({ default: vConsole }) => {
    new vConsole()
  })
}
