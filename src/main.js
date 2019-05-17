import Vue from 'vue'
import App from './App.vue'

import './scss/style.scss'

import VueFullPage from 'vue-fullpage.js'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueFullPage)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
