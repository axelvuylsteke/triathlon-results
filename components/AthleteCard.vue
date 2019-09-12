<template>
  <nuxt-link :to="'/athlete/' + athlete.id">
    <v-card>
      <ul>
        <li>{{ athlete.name }}</li>
        <li>{{ athlete.email }}</li>
        <li>{{ athlete.country }}</li>
      </ul>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    athlete: Object
  }
}
</script>

<style></style>
