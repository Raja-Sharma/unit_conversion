import { combineReducers } from 'redux'
import ReducerRates from './ReducerRates'

const rootReducer = combineReducers({
  rates: ReducerRates
})

export default rootReducer
