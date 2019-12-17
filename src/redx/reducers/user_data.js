import auth from 'controllers/login/auth'
const current_user = (state = [], action) => {
    switch(action.type){
        case 'SIGN_IN':
            return auth.curr_user
        case 'LOG_OUT':
            return false
        default:
            return false
            
    }
}

export default current_user