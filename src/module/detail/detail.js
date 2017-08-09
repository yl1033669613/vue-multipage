import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'common/css/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = Vue.axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
