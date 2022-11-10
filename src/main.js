import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/js/rem.js'
import '@/assets/css/layout.scss'

import { Toast, Calendar, Switch, Field } from 'vant'
import 'vant/lib/toast/style'
import 'vant/lib/calendar/style'
import 'vant/lib/switch/style'
import 'vant/lib/field/style'

Vue.use(Toast)
Vue.use(Calendar)
Vue.use(Switch)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
