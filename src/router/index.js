import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home/index')
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: () => import('@/views/transactions/index')
        },
        {
          path: 'blocks',
          name: 'blocks',
          component: () => import('@/views/blocks/index')
        },
        {
          path: 'blocks/:block_id',
          name: 'block-detail',
          component: () => import('@/views/block-detail/index')
        }
      ]
    }
  ]
})
