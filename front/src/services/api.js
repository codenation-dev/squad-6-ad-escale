import axios from 'axios'

const api = axios.create({ baseURL: 'http://nineth2019.pythonanywhere.com/api/' })

export const getAllAnimals = async () => {
  try {
    const response = await api.get('animals/')
    return response.data
  } catch (err) {
    return []
  }
}

export const getAnimalDetails = async (animalId) => {
  try {
    const response = await api.get(`animals/${animalId}`)
    return response.data
  } catch (err) {
    return []
  }
}

export const createAnimal = async (animal) => {
  try {
    const formData = new FormData()
    for (const key in animal) {

      if (key === 'image') {

        formData.append(key, animal[key])
      } else {
        formData.set(key, animal[key])
      }
    }

    const config = {
      headers: {
        "key": "7ac9c7650af11b2c5584af58466d8664fad7cddb",
        'Content-type': 'application/json'
      }
    }
    const response = await api.post(`animals/create`, formData, config)
    console.log('post', response)
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
