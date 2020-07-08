<template>
    <div>
        <h1>ColabR</h1>

        <div><track-search /></div>
    </div>
</template>

<script>
import TrackSearch from '@/components/TrackSearch'

export default {
  name: 'Home',
  components: {
    TrackSearch
  }
}
</script>