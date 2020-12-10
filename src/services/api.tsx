import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sofisticalle-server.herokuapp.com/',
})

export default api
