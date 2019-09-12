import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://us-central1-triathlon-results-d6ec5.cloudfunctions.net/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
})

export default {
  getAthletes() {
    return apiClient.get(`getAthletes`)
  },
  getAthlete(id) {
    return apiClient.get(`getAthlete/?id=${id}`)
  },
  postAthlete(body) {
    return apiClient.post(`postAthlete`, body)
  },
  putAthlete(id, body) {
    return apiClient.put(`putAthlete/?id=${id}`, body)
  },
  delAthlete(id) {
    return apiClient.delete(`delAthlete/?id=${id}`)
  }
}
