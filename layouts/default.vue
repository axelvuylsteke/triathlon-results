<template>
  <v-app dark>
    <NavBar />
    <nuxt />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  head() {
    return {
      titleTemplate: '%s - Triathlon Results',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Looking for triathlon Results... omg you found them'
        }
      ]
    }
  }
}
</script>
