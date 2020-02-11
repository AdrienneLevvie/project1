import { combineReducers } from 'redux'
import current_user from './user_data'
import patient_data from './patient_data'
const rootReducer = combineReducers({
    user: current_user,
    patient: patient_data
})

export default rootReducer