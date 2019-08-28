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
    const formData = new FormData()
    for (const key in animal) {
      console.log(key)
      if (key === 'image') {
        console.log('found image')
        formData.append(key, animal[key])
      } else {
        formData.set(key, animal[key])
      }
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const response = await api.post('animals', formData, config)
    console.log(response)
  } catch (err) {
    return null
  }
  // try {
  //   const response = api.post('animals', { ...animal })
  //   return response.data
  // } catch (err) {
  //   return err
  // }
}
