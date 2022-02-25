<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-item">🏪 Platzi Music</div>
          </div>
          <div class="nav-right nav-menu">
            <router-link class="py-4 pr-4" to="/">Buscar</router-link>
            <router-link class="p-4" to="about">Sobre nosotros</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones que estan Vue-nisimas</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: {
    PmPlayer
  }
}
</script>
