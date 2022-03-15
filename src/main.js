import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import '@/registerServiceWorker'
import store from '@/store'

import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
