import axios from 'axios'

const api = axios.create({ baseURL: 'https://desafio2019.herokuapp.com/api' })

export default api
