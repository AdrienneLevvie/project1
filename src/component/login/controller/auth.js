import Axios from "axios";


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
    }

    async login(credentials){
        const result = await this.api.loginController(credentials, 'login');
        return result
    }

    isAuth(){
        return this.authenticated
    }

}

export default new auth()