import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () => import('./views/Drawer.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('./views/Cards.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () => import('./views/Simple.vue')
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: () => import('./views/Stagger.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () => import('./views/State.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('./views/Timeline.vue')
    },
    {
      path: '/master',
      name: 'master',
      component: () =>
        import(/* webpackChunkName: "master" */ './views/Master.vue')
    }
  ]
})
