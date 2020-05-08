const state = {
  authenticated: false,
  stateToken: null
}

const getters = {
  authenticated: state => state.authenticated,
  stateToken: state => state.stateToken
}

const mutations = {
  setAuthenticated(state, isAuthenticated) {
    state.authenticated = isAuthenticated
  },
  setStateToken(state, stateToken) {
    state.stateToken = stateToken
  }
}

const module = {
  state,
  getters,
  mutations
}

export default module