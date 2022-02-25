<template>
  <div id="container">
    <section class="section">
      <nav class="nav">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input type="text" class="input is-large" placeholder="Buscar canciones" v-model="searchQuery">
          </p>
          <p class="control">
            <a class="button is-info is-large" @click="search">Buscar</a>
          </p>
          <p class="control">
            <a href="" class="button is-danger is-large">&times;</a>
          </p>
        </div>
      </nav>
      <div class="container">
        <p>
          <small>{{searchMessage}}</small>
        </p>
      </div>

      <pm-notification name="body" v-show="showNotification" :notification-type="notificationType">
        <p slot="body">{{notificationText}}</p>
      </pm-notification>

      <pm-loader v-show="isLoading" />

      <div class="container results" v-show="!isLoading">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(track, index) in tracks" :key="index">
            <pm-track
              :class="{ 'is-active': track.id === selectedTrack }"
              :track="track"
              @select="setSelectedTrack"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'
import PmNotification from '@/components/shared/Notifications.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'Search',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      notificationType: '',
      notificationText: '',
      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) return

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.isLoading = false
          this.showNotification = true
          if (res.tracks.total === 0) {
            this.notificationType = 'is-danger'
            this.notificationText = 'No se encontraron resultados :)'
          } else {
            this.notificationType = 'is-success'
            this.notificationText = 'Se encontraron resultados :D'
          }
          this.tracks = res.tracks?.items
        })
    },
    setSelectedTrack (selectedTrack) {
      this.selectedTrack = selectedTrack
    }
  }
}
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
