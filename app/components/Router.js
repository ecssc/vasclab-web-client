import React from 'react';

import { Router, Route } from 'react-router';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PatientsPage from '../pages/PatientsPage';
import SignUpPage from '../pages/SignUpPage';

const AppRouter = ({...props}) => {
    return (
        <Router history={props.history}>
            <Route path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/:organisationId" component={HomePage} />
            <Route path="/:organisationId/patients" component={PatientsPage} />
        </Router>
    )
}

export default AppRouter;
