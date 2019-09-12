<template>
  <div>
    <ul>
      <li>{{ athlete.id }}</li>
      <li>{{ athlete.name }}</li>
      <li>{{ athlete.email }}</li>
      <li>{{ athlete.country }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    athlete: (state) => state.athletes.athlete
  }),
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('athletes/fetchAthlete', params.id)
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch athlete #' + params.id
      })
    }
  }
}
</script>

<style></style>
