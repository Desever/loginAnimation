import Vue from 'vue'
import Router from 'vue-router'

import One from '@/View/One/One.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/one',
      name: 'One',
      component: One
    }
  ]
})
