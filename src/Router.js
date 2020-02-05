import React from 'react'

import { Route, Switch } from 'react-router-dom'
import ProtectedRoutes from 'component/common-components/ProtectedRoutes'
import LoginPage from 'component/login/LoginPage'
import HomePage from 'component/homepage'
import Patient from 'component/patient'

export default () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoutes path="/home" component={HomePage} />
        <ProtectedRoutes path="/patient" component={Patient} />
        <Route path="*" component={() => "404 Not Found"} />
    </Switch>
)

