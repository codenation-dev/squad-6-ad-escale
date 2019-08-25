import axios from 'axios'

const api = axios.create({ baseURL: 'https://desafio2019.herokuapp.com/api' })

export const getAllAnimals = async () => {
  try {
    const response = await api.get('animals')
    return response.data
  } catch (err) {
    return null
  }
}

export const getAnimalDetails = async (animalId) => {
  try {
    const response = await api.get(`animals/${animalId}`)
    return response.data
  } catch (err) {
    return null
  }
}

export const createAnimal = async (animal) => {
  try {
    const response = api.post('animals', { ...animal })
    return response.data
  } catch (err) {
    return err
  }
}
