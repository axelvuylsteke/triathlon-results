<template>
  <div>
    <AddAthlete />
    <AthleteCard
      v-for="(athlete, index) in athletes"
      :key="athlete.id"
      :athlete="athlete"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddAthlete from '@/components/AddAthlete.vue'
import AthleteCard from '@/components/AthleteCard.vue'
export default {
  head() {
    return {
      title: 'Index'
    }
  },
  components: {
    AddAthlete,
    AthleteCard
  },
  computed: mapState({
    athletes: (state) => state.athletes.athletes
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('athletes/fetchAthletes')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the athletes'
      })
    }
  }
}
</script>
