import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function ProtectedRoutes({component: Component, ...rest}) {
    const user = useSelector(state => state.user)
    return (
        <Route 
            {...rest}
            render={
                props => user.status === 200?<Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}
