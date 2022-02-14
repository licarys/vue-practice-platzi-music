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
          <p>
            <small>{{searchMessage}}</small>
          </p>
        </div>
      </nav>

      <div class="container">
        <div class="colums">
          <div class="column" v-for="(track, index) in tracks" :key="index">
            {{track.name}} - {{track.artist}}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Hoy aca en el baile', artist: 'El Pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
]

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
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
