import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../components/auth/signin.vue'
import Update from '../components/extra/update.vue'
import Create from '../components/extra/create.vue'
import store from '../store/index'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,beforeEnter(to,from,next){
      if(!store.state.user){
        next()
      }else {
        next('/about')
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    ,beforeEnter(to,from,next){
      if(store.state.user){
        next()
      }else {
        next('/signin')
      }
    }},
  { path: '/signin', component: Signin },
  { path: '/create', component: Create,beforeEnter(to,from,next){
    if(store.state.user){
      next()
    }else {
      next('/signin')
    }
  } },
  { path: '/update/:id', component: Update ,beforeEnter(to,from,next){
    if(store.state.user){
      next()
    }else {
      next('/signin')
    }
  }},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
