<template>
  <div class="content" v-if="track.album">
    <p class="is-128x128">
      <img v-if="track.album && track.album.images && track.album.images.length > 0" :src="track.album.images[0].url" :alt="track.name">
    </p>
    <p>
      <strong>{{track.name}}</strong>
      <small> [ {{track.duration_ms | ms-to-mm}} ]</small>
    </p>
    <p>
      <audio controls :src="track.preview_url"></audio>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
