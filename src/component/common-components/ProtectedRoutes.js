import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as ls from 'local-storage'
export default function ProtectedRoutes({component: Component, ...rest}) {
    const user = useSelector(state => state.user)
    return (
        <Route 
            {...rest}
            render={
                props => ls.get('isAuth') === true ?<Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}
