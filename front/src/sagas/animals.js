import { takeEvery, put, call, all } from 'redux-saga/effects'

import * as types from '../types/animals'
import * as actions from '../actions/animals'

import { getAllAnimals, getAnimalDetails } from '../services/api'

function * asyncGetAllAnimals () {
  try {
    const response = yield call(getAllAnimals)

    yield put(actions.successGetAnimals(response))
  } catch (err) {
    yield put(actions.failedGetAnimals())
  }
}

function * asyncGetAnimalDetails (action) {
  try {
    const response = yield call(getAnimalDetails, action.payload)

    yield put(actions.successGetAnimalDetails(response))
  } catch (err) {
    yield put(actions.failedGetAnimalDetails())
  }
}

export default function * root () {
  yield all([
    takeEvery(types.GET_ALL_ANIMALS, asyncGetAllAnimals),
    takeEvery(types.GET_ANIMAL_DETAILS, asyncGetAnimalDetails)
  ])
}
