import * as types from '../types/animals'

export function getAllAnimals () {
  return {
    type: types.GET_ALL_ANIMALS
  }
}

export function successGetAnimals (animals) {
  return {
    type: types.SUCCESS_GET_ALL_ANIMALS,
    payload: animals
  }
}

export function failedGetAnimals () {
  return {
    type: types.FAILED_GET_ALL_ANIMALS
  }
}

export function getAnimalDetails (animalId) {
  return {
    type: types.GET_ANIMAL_DETAILS,
    payload: animalId
  }
}

export function successGetAnimalDetails (animalDetails) {
  return {
    type: types.SUCCESS_GET_ANIMAL_DETAILS,
    payload: animalDetails
  }
}

export function failedGetAnimalDetails () {
  return {
    type: types.FAILED_GET_ALL_ANIMALS
  }
}
