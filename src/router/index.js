import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import Home from '@/views/Home'
import Login from '@/views/Login'
import LoginCallback from '@/views/LoginCallback'
import AuthFailed from '@/views/AuthFailed'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/callback',
      name: 'Callback',
      component: LoginCallback
    },
    {
      path: '/auth-failed',
      name: 'AuthFailed',
      component: AuthFailed
    }
  ]
})

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.authenticated) {
    next({name: 'Login'})
  }

  next()
})

export default router