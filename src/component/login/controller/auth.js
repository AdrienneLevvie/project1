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
            return response
        }catch(err){
            return 'Invalid username and password !! '
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