import Vue from "vue";
import App from "./App.vue";
import '@/assets/styles/border.css';
import '@/assets/styles/reset.css';
import 'assets/styles/iconfont.css';
import 'assets/styles/media.css';
import 'assets/js/symbol.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

