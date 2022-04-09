// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// store 中 new Vuex.Store 导入为 store
import store from './store'
// import tabBar from './components/tabBar.vue'
import toast from './components/common/toast/index'

Vue.use(toast)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
