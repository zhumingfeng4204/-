import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login=>import('../vivews/Login.vue')
  },
  {
    path: '/Protocol',
    name: 'Protocol',
    component: Protocol=>import('../vivews/Protocol.vue')
  },
  {
    path: '/Clause',
    name: 'Clause',
    component: Clause=>import('../vivews/Clause.vue')
  },
  {
    path: '/Download',
    name: 'Download',
    component: Download=>import('../vivews/Download.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
