import axios from 'axios'

const api = {
  request: axios.create({
    baseURL: 'http://localhost:8000/api/' //TODO
  }),

  login() {
    return this.request.get('/auth')
  },

  finishLogin(code, tokenState, expectedTokenState) {
    return this.request.post(
      '/auth-finish?code=' + code + '&state=' + tokenState,
      {},
      {headers: {'X-Authentication-State': expectedTokenState}, withCredentials: true}
    )
  },

  searchTrack(query) {
    console.log('QUERY: ' + query)
    return this.request.get('/tracks?query=' + query, {withCredentials: true})
  }
}

export default api