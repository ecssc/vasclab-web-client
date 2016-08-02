import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { patientsFetch } from '../state/actions';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PatientsPage from '../pages/PatientsPage';
import SignUpPage from '../pages/SignUpPage';

class AppRouter extends React.Component{
    /**
     * Returns the application router.
     *
     * @return {XML}
     */
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/:organisationId" component={HomePage} />
                <Route path="/:organisationId/patients"
                       component={PatientsPage}
                       onEnter={(state) => {
                           this.props.dispatch(patientsFetch(
                               state.params.organisationId,
                               state.location.query
                           ));
                       }}
                />
            </Router>
        )
    }
}

export default connect()(AppRouter);
