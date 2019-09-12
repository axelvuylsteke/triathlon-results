<template>
  <v-form class="athleteForm">
    <v-text-field
      v-model="name"
      :counter="20"
      label="Name"
      required
      placeholder="Enter your Name"
    />
    <v-text-field
      v-model="email"
      :counter="50"
      label="Email"
      required
      placeholder="Enter your email-address"
    />
    <v-text-field
      v-model="country"
      :counter="20"
      label="Country"
      required
      placeholder="Enter your Country"
    />
    <v-btn color="success" class="mr-4" @click="submit">
      SUBMIT
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      name: '',
      email: '',
      country: ''
    }
  },
  methods: {
    async submit({ store, error }) {
      const athlete = {
        name: this.name,
        email: this.email,
        country: this.country
      }
      try {
        await this.$store.dispatch(
          'athletes/createAthlete',
          JSON.stringify(athlete)
        )
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
.athleteForm {
  max-width: 10rem;
}
</style>
