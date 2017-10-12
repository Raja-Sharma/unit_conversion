import { combineReducers } from 'redux'
import ReducerRates from './ReducerRates'
import DollarInputReducer from './DollarInputReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  rates: ReducerRates,
  form: formReducer,
  usd: DollarInputReducer
})

export default rootReducer
