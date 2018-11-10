import Vue from "vue";
import App from "./App.vue";
import store from '@/store/';
import '@/assets/styles/border.css';
import '@/assets/styles/reset.css';
import '@/assets/styles/iconfont.css';
import 'assets/styles/media.css';

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue(); 

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

