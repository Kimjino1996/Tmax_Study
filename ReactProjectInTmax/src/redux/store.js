import{createStore} from 'redux'
import subscriberReducer from './reducer'

const store=createStore(subscriberReducer)
export default store;