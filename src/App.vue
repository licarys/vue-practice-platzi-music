<template>
  <div id="app">
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

      <div class="container">
        <div class="colums">
          <div class="column" v-for="(track, index) in tracks" :key="index">
            {{track.name}} - {{track.artists[0].name}}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import trackService from './services/track'

export default {
  name: 'app',

  data () {
    return {
      searchQuery: '',
      tracks: []
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
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res.tracks)
          this.tracks = res.tracks?.items
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
