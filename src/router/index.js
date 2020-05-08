import Vue from 'vue'
import Router from 'vue-router'

import api from '@/api'
import store from '@/store'

import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Auth',
      redirect: to => {
        // TODO
      }
    }
  ]
})

router.beforeEach(function(to, from, next) {
  if (!store.authenticated) {
    api.login().then((response) => {
      console.log('TEST')
      store.commit('setStateToken', response.headers['X-Authentication-State'])

      window.location.href = response.data.authUrl
    })
  }

  next()
})

export default router