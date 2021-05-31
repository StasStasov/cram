import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AuthPage from '../views/AuthPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    meta: {
      layout: 'default',
    },
    component: MainPage,
  },
  {
    path: '/auth',
    name: 'AuthPage',
    meta: {
      layout: 'empty',
    },
    component: AuthPage,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
