import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLs from 'secure-ls'

import auth from './modules/auth'

const ls = new SecureLs({isCompression: false})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
})

export default store