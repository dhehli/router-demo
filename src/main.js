import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SideBarLayout from '@/layouts/SideBarLayout.vue'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('default-layout', DefaultLayout)
Vue.component('sidebar-layout', SideBarLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
