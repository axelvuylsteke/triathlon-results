<template>
  <div>
    <AddRace />
    <RaceCard
      v-for="(race, index) in races"
      :key="race.id"
      :race="race"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddRace from '~/components/AddRace.vue'
import RaceCard from '~/components/RaceCard.vue'
export default {
  components: {
    AddRace,
    RaceCard
  },
  computed: mapState({
    races: (state) => state.races.races
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('races/fetchRaces')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the races'
      })
    }
  }
}
</script>

<style></style>
