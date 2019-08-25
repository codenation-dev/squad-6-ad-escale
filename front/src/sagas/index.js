import { fork } from 'redux-saga/effects'

import animals from './animals'

export default function * rootSaga () {
  yield [
    fork(animals)
  ]
}
