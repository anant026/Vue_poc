import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { TablePlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ButtonPlugin } from 'bootstrap-vue'
Vue.use(ButtonPlugin)
Vue.use(CardPlugin);
Vue.use(TablePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
