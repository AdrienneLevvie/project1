import React from 'react'
import { Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import validate from 'component/login/controller/controller_form'
import auth from 'controllers/login/auth'
import LoginForm from 'component/login/Form'
import avatar from '../../icons/doctor-svgrepo-com.svg'
import { Redirect } from '@reach/router'

const useStyles = makeStyles(theme=>({
    mainContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
	height: '100vh',
    },
    loginCont: {
        height: 'auto',
        width: '75%',   
        margin: 'auto',
        boxShadow: '-7px 6px 21px 0px rgba(0,0,0,0.75)',
        padding: '25px'
    }
}))



const initialCredentials = {
    email:'', 
    password:''
}

function loginReducer(state, {action, field, value}){
    switch(action){
    case 'handleInput':
        return {
            ...state,
            [field]:value
        }
    default:
        return state
    }
}

export default function LoginPage(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [credentials, setCredentials] = React.useReducer(loginReducer, initialCredentials)
    
    const notify = variant => {
        enqueueSnackbar(variant.msg, {...variant, autoHideDuration: 3000})
    }
    const handleInput = (e) => {
        setCredentials({action: 'handleInput', field: e.target.name, value: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        !(credentials.username || !credentials.password) && validate.checkLogin(credentials)
        const response = await auth.login(credentials)
        notify(response.notif)
        !response.err && props.history.push('/home')
    }
    
    React.useEffect(()=>{
        auth.isAuth() && props.history.push('/home')
    },[])

    const classes = useStyles()
    return (
        <Container component="div" maxWidth="sm" className={classes.mainContainer}>    
            <Paper className={classes.loginCont}>
                <img alt="doctorAvatar" src={avatar} height="150" width="150" />
                <LoginForm  loginFn={handleInput} submitFn={handleSubmit} />
            </Paper>
        </Container>
    )
}

