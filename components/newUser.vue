<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          Register
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Register User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="firstName"
                  label="First Name*"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="lastName" label="Last Name" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="userName" label="Club*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="country" label="Country*" required />>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="email" label="Email*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="birthDate"
                  label="Birth Date*"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="register">
            Register
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
      userName: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      country: '',
      dialog: false
    }
  },
  methods: {
    register: () => {
      return (this.dialog = false)
    }
  }
}
</script>

<style></style>
