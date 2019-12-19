import Axios from "axios"

import * as ls from 'local-storage'
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

    clearup(){
        console.clear()
    }

    async login(credentials){
        const result = await this.api.loginController(credentials, 'login');
        this.curr_user = result
        if (!result.err){    
            ls.set('isAuth', true) 
        }
        ls.set('user', JSON.stringify(this.curr_user))
        return this.curr_user
    }

    logout(){
        ls.clear()
        return {msg: `Goodbye `, variant: 'success'}
    }
    
    isAuth(){
        ls.get('user')?this.authenticated = true:this.authenticated = false
        return this.authenticated
    }

}

export default new auth()