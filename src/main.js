import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(NProgress)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/nprogress/nprogress.css'

import routes from './routes';

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
