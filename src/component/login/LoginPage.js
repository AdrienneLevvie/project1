import React from 'react'
import { Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import validate from 'component/login/controller/controller_form'
import auth from 'component/login/controller/auth'
import LoginForm from 'component/login/Form'
import avatar from '../../icons/doctor-svgrepo-com.svg'
//import { useForm } from './controller/useForm'
import { useDispatch } from 'react-redux'
import { sign_in } from 'redx/actions'

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
        return 'hi'
    }

}

export default function LoginPage(props) {

    const [credentials, setCredentials] = React.useReducer(loginReducer, initialCredentials)
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    
    const notify = variant => {
        enqueueSnackbar(variant.msg, {...variant, autoHideDuration: 3000})
    }

    const handleInput = (e) => {
        setCredentials({action: 'handleInput', field: e.target.name, value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password){
            validate.checkLogin(credentials)
        }
        auth.login(credentials)
        .then(response => {
            notify(response.notif)
            if (!response.err){
                dispatch(sign_in())
                props.history.push('/home')
            }
        })
    }

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

