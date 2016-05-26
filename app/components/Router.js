import React from 'react'

import { Router, Route, browserHistory } from 'react-router'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'

const AppRouter = ({...props}) => {
    return (
        <Router history={props.history}>
            <Route path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/sign-up" component={SignUpPage} />
        </Router>
    )
}

export default AppRouter;
