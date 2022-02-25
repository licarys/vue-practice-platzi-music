<template>
  <div class="container mt-4">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <pm-track v-if="Object.keys(track).length > 0" :track="track" />
      </div>
    </div>
  </div>
</template>
<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track'

export default {
  components: {
    PmTrack
  },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id
    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>
