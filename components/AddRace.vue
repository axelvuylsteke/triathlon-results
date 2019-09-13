<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          Create Race
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Race Creation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="name" label="Race Name*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="distance"
                  :items="['Full', 'Half', 'Olympic', 'Custom']"
                  label="Distance*"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="swim" label="Swim**" required />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="bike" label="Bike**" required />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="run" label="Run**" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="city" label="City*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="country" label="Country*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="website" label="Website*" required />
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
          <small>**Distances in km</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      name: '',
      distance: '',
      swim: '',
      bike: '',
      run: '',
      country: '',
      city: '',
      website: '',
      dialog: false
    }
  },
  methods: {
    async submit({ store, error }) {
      const race = {
        name: this.name,
        distance: this.distance,
        swim: this.swim,
        bike: this.bike,
        run: this.run,
        country: this.country,
        city: this.city,
        website: this.website
      }
      try {
        await this.$store.dispatch('races/createRace', JSON.stringify(race))
      } catch (err) {
        console.log(err)
      }
      return (this.dialog = false)
    }
  }
}
</script>

<style></style>
