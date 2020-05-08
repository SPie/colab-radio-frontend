import axios from 'axios'

const api = {
  request: axios.create({
    baseURL: 'http://localhost:8000/api/'
  }),

  login() {
    return this.request.get('/auth')
  }
}

export default api