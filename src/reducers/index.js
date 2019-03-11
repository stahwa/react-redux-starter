import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import textReducer from './textReducer'

const rootReducer = (history) => combineReducers({
  text: textReducer,
  router: connectRouter(history)
})

export default rootReducer
