import { all, fork } from 'redux-saga/effects'

import animals from './animals'

export default function * rootSaga () {
  yield all([
    fork(animals)
  ])
}
