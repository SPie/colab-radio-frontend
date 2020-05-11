<template>
  <h1>Authenticating</h1>
</template>

<script>
import api from '@/api'

export default {
  name: 'LoginCallback',
  created: function () {
    api.finishLogin(this.$route.query.code, this.$route.query.state, this.$store.getters.stateToken)
      .then(() => {
        this.$store.commit('setAuthenticated', true)

        this.$router.push({name: 'Home'})
      })
      .catch(() => {
        this.$router.push({name: 'AuthFailed'})
      })
  }
}
</script>