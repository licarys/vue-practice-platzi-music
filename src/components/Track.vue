<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-1by1">
                <img :src="track.album.images[0].url" />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48"><img :src="track.album.images[0].url" /></figure>
                </div>
                <div class="media-content">
                    <p class="title is-6"><strong>{{track.name}}</strong></p>
                    <p class="subtitle is-6">{{ track.artists[0].name }}</p>
                </div>
            </div>
            <div class="content">
                <small> {{ track.duration_ms  | ms-to-mm}}  </small>
                <nav class="level">
                    <div class="level-left">
                        <button class="level-item has-text-centered button is-primary" @click="selectTrack">
                          <span class="icon is-small">▶️</span>
                        </button>
                        <button class="level-item has-text-centered button is-warning"  @click="goToTrack(track.id)">
                          <span class="icon is-small">🌍</span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)

      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>
