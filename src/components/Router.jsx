import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PatientPage from '../pages/PatientPage';
import PatientsPage from '../pages/PatientsPage';
import SignUpPage from '../pages/SignUpPage';

import * as actions from '../state/actions';

const AppRouter = ({ history, dispatch }) => (
    <Router history={history}>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/:organisationId" component={HomePage} />
        <Route
            path="/:organisationId/patients"
            component={PatientsPage}
            onEnter={(state) => {
                dispatch(actions.patientsFetch(
                    state.params.organisationId,
                    state.location.query
                ));
            }}
            onChange={(state) => {
                dispatch(actions.patientsFetch(
                    state.params.organisationId,
                    state.location.query
                ));
            }}
        />
        <Route
            path="/:organisationId/patients/:patientId"
            component={PatientPage}
            onEnter={(state) => {
                dispatch(actions.patientFetch(
                    state.params.patientId,
                    state.location.query
                ));
                dispatch(actions.reportsFetch(
                    state.params.patientId,
                    null,
                    { include: 'user' },
                ));
            }}
        />
    </Router>
);

AppRouter.propTypes = {
    dispatch: React.PropTypes.any,
    history: React.PropTypes.any,
};

export default connect()(AppRouter);
