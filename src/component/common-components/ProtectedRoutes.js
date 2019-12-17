import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from 'controllers/login/auth'

export default function ProtectedRoutes({component: Component, ...rest}) {
    return (
        <Route 
            {...rest}
            render={
                props => auth.isAuth() === true ?<Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}
