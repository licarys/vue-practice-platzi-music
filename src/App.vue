<template>
  <div id="app">
    <pm-header />
    <section class="section">
      <nav class="nav has-shadow">
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

      <pm-loader v-show="isLoading" />

      <div class="container results" v-show="!isLoading">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(track, index) in tracks" :key="index">
            <pm-track :track="track" />
          </div>
        </div>
      </div>
    </section>

    <pm-footer />
  </div>
</template>

<script>
import trackService from './services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',

  components: { PmFooter, PmHeader, PmTrack, PmLoader },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: true
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) return

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res.tracks)
          this.isLoading = false
          this.tracks = res.tracks?.items
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
