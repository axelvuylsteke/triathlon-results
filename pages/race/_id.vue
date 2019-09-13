<template>
  <div>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    race: (state) => state.races.race
  }),
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('races/fetchRace', params.id)
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch race #' + params.id
      })
    }
  }
}
</script>

<style></style>
