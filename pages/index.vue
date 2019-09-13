<template>
  <div>
    <AddRace />
    <AddAthlete />
  </div>
</template>

<script>
import AddRace from '~/components/AddRace.vue'
import AddAthlete from '~/components/AddAthlete.vue'
export default {
  head() {
    return {
      title: 'Index'
    }
  },
  components: {
    AddRace,
    AddAthlete
  }
}
</script>
