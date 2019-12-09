import React from 'react'
import { Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import validate from 'component/login/controller/controller_form'
import auth from 'component/login/controller/auth'
import LoginForm from 'component/login/Form'
import avatar from '../../icons/doctor-svgrepo-com.svg'

import { useSelector, useDispatch } from 'react-redux'
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

export default function LoginPage() {
    const [credentials, setCredentials] = React.useState({
	email: '',
	password: '',
	})
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    
    const notify = variant => {
        enqueueSnackbar(variant.msg, {...variant, autoHideDuration: 3000})
    }
    const handleInput = (e) => {
        var state = {
        value: e.target.value,
        target: e.target.name
            }
        setCredentials({...credentials,[state.target]:state.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password){
            validate.checkLogin(credentials)
        }
        auth.login(credentials)
        .then(response => {
            notify(response.notif)
           
        }).then(()=>dispatch(sign_in()))
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

