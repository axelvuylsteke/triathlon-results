import AthleteService from '@/services/AthleteService'

export const state = () => ({
  athletes: [],
  athlete: {}
})

export const mutations = {
  SET_ATHLETES(state, athletes) {
    state.athletes = athletes
  },
  SET_ATHLETE(state, athlete) {
    state.athlete = athlete
  },
  CREATE_ATHLETE(state, athlete) {
    state.athletes.push(athlete)
  }
}

export const actions = {
  fetchAthletes({ commit }) {
    return AthleteService.getAthletes().then((response) => {
      commit('SET_ATHLETES', response.data)
    })
  },
  fetchAthlete({ commit }, id) {
    return AthleteService.getAthlete(id).then((response) => {
      commit('SET_ATHLETE', response.data)
    })
  },
  createAthlete({ commit }, body) {
    return AthleteService.postAthlete(body).then((response) => {
      commit('CREATE_ATHLETE', response.data)
    })
  },
  updateAthlete({ commit }, id, body) {
    return AthleteService.putAthlete(id, body).then((response) => {
      commit('SET_ATHLETE', response.data)
    })
  },
  deleteAthlete({ commit }, id, body) {
    return AthleteService.delAthlete(id).then((response) => {
      commit('ATHLETE', response.data)
    })
  }
}
