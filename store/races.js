import RaceService from '@/services/RaceService'

export const state = () => ({
  races: [],
  race: {}
})

export const mutations = {
  SET_RACES(state, races) {
    state.races = races
  },
  SET_RACE(state, race) {
    state.race = race
  },
  CREATE_RACE(state, race) {
    state.races.push(race)
  }
}

export const actions = {
  fetchRaces({ commit }) {
    return RaceService.getRaces().then((response) => {
      commit('SET_RACES', response.data)
    })
  },
  fetchRace({ commit }, id) {
    return RaceService.getRace(id).then((response) => {
      commit('SET_RACE', response.data)
    })
  },
  createRace({ commit }, body) {
    return RaceService.postRace(body).then((response) => {
      commit('CREATE_RACE', response.data)
    })
  },
  updateRace({ commit }, id, body) {
    return RaceService.putRace(id, body).then((response) => {
      commit('SET_RACE', response.data)
    })
  },
  deleteRace({ commit }, id, body) {
    return RaceService.delRace(id).then((response) => {
      commit('SET_RACE', response.data)
    })
  }
}
