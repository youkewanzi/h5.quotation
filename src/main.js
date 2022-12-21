import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/js/rem.js'
import '@/assets/css/layout.scss'

import preventReClick from './utils/click'
Vue.use(preventReClick)

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import { Toast } from 'vant'
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
