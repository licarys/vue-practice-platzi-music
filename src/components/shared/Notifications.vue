<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification" :class="notificationType">
          <slot name="body">
            Algo anduvo mal 🙁
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notification',

  props: {
    notificationType: {
      type: String,
      default: 'is-danger'
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
