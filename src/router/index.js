import Vue from 'vue'
import Router from 'vue-router'
import SourceSelection from '@/components/SourceSelection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SourceSelection',
      component: SourceSelection
    }
  ]
})
