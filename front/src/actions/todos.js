export function requestAllanimals () {
  return {
    type: 'REQUEST_ALL_ANIMALS'
  }
}

export function requestSingleAnimal (id) {
  return {
    type: 'REQUEST_SINGLE_ID',
    payload: id
  }
}
