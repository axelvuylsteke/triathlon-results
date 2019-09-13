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
  getRaces() {
    return apiClient.get(`getRaces`)
  },
  getRace(id) {
    return apiClient.get(`getRace/?id=${id}`)
  },
  postRace(body) {
    return apiClient.post(`postRace`, body)
  },
  putRace(id, body) {
    return apiClient.put(`putRace/?id=${id}`, body)
  },
  delRace(id) {
    return apiClient.delete(`delRace/?id=${id}`)
  }
}
