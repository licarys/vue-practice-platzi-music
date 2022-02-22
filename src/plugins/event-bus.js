const EventBus = {}

EventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
}

export default EventBus
