import auth from 'component/login/controller/auth'

const current_user = (state = [], action) => {
    switch(action.type){
        case 'SIGN_IN':
            return auth.curr_user
        default:
            return state = false
            
    }
}

export default current_user