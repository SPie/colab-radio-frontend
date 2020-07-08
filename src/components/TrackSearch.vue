<template>
    <div>
        <input type="text" v-model="query" @keyup="search"/>

        <ul>
          <li v-for="track in tracks" :key="track.trackId">
            {{ track.name }}
          </li>
        </ul>
    </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'TrackSearch',
  data() {
    return {
      timeout: null,
      query: '',
      tracks: []
    }
  },
  methods: {
    search () {
      clearTimeout(this.timeout)

      this.timeout = setTimeout(
        () => {
          this.tracks = []

          if (this.query == '') {
            return
          }

          api.searchTrack(this.query).then((response) => {
            this.tracks = response.data.tracks
            console.log(this.tracks)
          })
        },
        1000
      )
    }
  }
}
</script>