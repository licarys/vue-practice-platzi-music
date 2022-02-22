import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'

import EventBus from '@/plugins/event-bus'

Vue.config.productionTip = false

Vue.use(EventBus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
