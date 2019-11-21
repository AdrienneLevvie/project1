class formValidation {
    constructor(){
        this.validated = {
            username: false,
            password: false
        }
    }

    handleInput(credentials){
       if (!credentials.target.value){
        this.validated = {
            ...this.validated,
            [`${credentials.target.name}`]: true
        }
        return this.validated[`${credentials.target.name}`]
       }
       try {
           if (credentials.target.value !== ''){
               this.validated = {
                   ...this.validated,
                   [`${credentials.target.name}`]: false
               }
               return this.validated[`${credentials.target.name}`]
           }
       }catch(err){
           return err
       }
    }

    checkLogin(credentials){
      if (!credentials.username){
          this.validated = {
              ...this.validated,
              username: true
          }
      }
      if (!credentials.password){
          this.validated = {
              ...this.validated,
              password: true
          }
      }
    }

    isValidated(){
       return this.validated
    }
}

export default new formValidation()