import Vue from 'vue'
import axios from 'axios'
//import Vuetify from 'vuetify/lib'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import { FontAwesomeIcon } from './icons'
import VueResource from 'vue-resource'
import VueTables from 'vue-tables-2'
import { ServerTable, ClientTable, Event } from 'vue-tables-2'

Vue.use(VueTables.ServerTable)
//Vue.use(Vuetify)

// Registration of global components
Vue.component('icon', FontAwesomeIcon)

Vue.prototype.$http = axios

sync(store, router)

const app = new Vue({
  ServerTable,
  ClientTable,
  Event,
  VueResource,
  store,
  router,
  ...App
})

export {
  ServerTable,
  ClientTable,
  Event,
  VueResource,
  app,
  router,
  store
}
