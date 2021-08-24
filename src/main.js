import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHome, faShoppingCart, faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLine } from '@fortawesome/free-brands-svg-icons'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

import mixin from './mixin.js'

import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
  config: { id: 'G-WTBZM9633H' }
})

axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.component('ImgInputer', ImgInputer)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUser, faHome, faShoppingCart, faFacebookSquare, faLine, faInstagramSquare, faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock)

Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
