import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
Vue.config.productionTip = false
//mock环境
import "mock/mock"
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
