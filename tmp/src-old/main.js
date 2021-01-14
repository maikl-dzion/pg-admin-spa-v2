import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'
import router from './router'
import store from './store'

import DragMixin from './plugins/drag_mixin'
import DataFormMixin from './plugins/data_form'
import BaseMixin from './plugins/mixin'
import Http from './plugins/services'
import StoreFn from './plugins/store_fn'

import InitApp from './plugins/init'

Vue.use(VueResource)
Vue.use(DragMixin)
Vue.use(DataFormMixin)
Vue.use(BaseMixin)
Vue.use(StoreFn)
Vue.use(Http)
Vue.use(InitApp)

Vue.prototype.$eventBus = new Vue()
Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
    console.log('=== errorHandler ===')
    console.log('======== Start ===========')
    console.log({ 'Error' : err})
    console.log({ 'Error' : err})
    console.log({ 'Vm' : vm})
    console.log({ 'Info' : info})
    console.log(`Error: ${err.toString()}\nInfo: ${info}`);
    console.log('======== End  ============')
}

Vue.config.warnHandler = function(msg, vm, trace) {
    console.log('=== warnHandler ===')
    console.log(msg)
    console.dir(trace)
    console.dir(vm)
}

window.onerror = function(message, source, line, column, error) {
    console.log('=== window.onerror ===')
    console.log(message)
}


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
