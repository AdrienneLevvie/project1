import Axios from "axios"

import * as ss from 'sessionstorage'
class api {
    constructor(){
        this.baseURL = 'http://localhost:3000'
    }

    async loginController(loginData, endpoint){
        try {
            const response = await Axios.post(`${this.baseURL}/${endpoint}`,{
                email: loginData.email,
                password: loginData.password
            })
            const data = {
                ...response,
                notif: {msg: 'Login succesfully',
                variant: 'success'}
            }
            return data
        }catch(err){
            const data = {
                err: err,
                notif: {msg: 'Invalid username and password',   
                variant: 'error'}
            }

            return data
        }
    }

}


class auth { 
    constructor(){
        this.api = new api()
        this.authenticated = false
        this.curr_user = []
    }

    async login(credentials){
        const result = await this.api.loginController(credentials, 'login');
        this.curr_user = result
        if (!result.err){    
            ss.setItem('isAuth', true) 
        }
        ss.setItem('user', JSON.stringify(this.curr_user))
        return this.curr_user
    }

    isAuth(){
        ss.getItem('user')?this.authenticated = true:this.authenticated = false
        return this.authenticated
    }

}

export default new auth()