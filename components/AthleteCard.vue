<template>
  <nuxt-link :to="'/athlete/' + athlete.id">
    <v-card>
      <ul>
        <li>{{ athlete.firstName }}</li>
        <li>{{ athlete.lastName }}</li>
        <li>{{ athlete.country }}</li>
        <li>{{ athlete.club }}</li>
        <li>{{ athlete.email }}</li>
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
