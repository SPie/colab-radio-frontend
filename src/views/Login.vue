<template>
  <h1>Start Login</h1>
</template>

<script>
import api from '@/api'

export default {
  name: 'Login',
  created: function () {
    api.login().then((response) => {
      this.$store.commit('setStateToken', response.headers['x-authentication-state'])

      window.location.href = response.data.authUrl
    })
  }
}
</script>