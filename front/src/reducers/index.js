import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import animals from './animals'
import animal from './animal'

export default combineReducers({
  animals,
  animal,
  form: formReducer
})
