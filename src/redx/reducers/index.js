import { combineReducers } from 'redux'
import current_user from './user_data'

const rootReducer = combineReducers({
    user: current_user
})

export default rootReducer