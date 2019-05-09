import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import Item from '@/views/Item.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/catalog/:catalog',
      name: 'catalog',
      component: Catalog,
      props: true
    },

    {
      path: '/item/:id',
      name: 'item',
      component: Item,
      props: true
    }
  ]
})
