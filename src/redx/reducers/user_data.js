import auth from 'component/login/controller/auth'
import * as ls from 'local-storage'
const current_user = (state = [], action) => {
    switch(action.type){
        case 'SIGN_IN':
            ls.set('isAuth', true)
            ls.set('user', JSON.stringify(auth.curr_user))
            return auth.curr_user
        case 'LOG_OUT':
            ls.remove('isAuth')
            ls.remove('user')
            return false
        default:
            return state = false
            
    }
}

export default current_user