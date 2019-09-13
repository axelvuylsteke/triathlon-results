<template>
  <nuxt-link :to="'/race/' + race.id">
    <v-card>
      <ul>
        <li>{{ race.name }}</li>
        <li>{{ race.city }}</li>
        <li>{{ race.country }}</li>
        <li>{{ race.distance }}</li>
        <li>{{ race.swim }}</li>
        <li>{{ race.bike }}</li>
        <li>{{ race.run }}</li>
        <li>{{ race.website }}</li>
      </ul>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    race: Object
  }
}
</script>

<style></style>
