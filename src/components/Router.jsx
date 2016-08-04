import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { patientFetch, patientsFetch, reportsFetch } from '../state/actions';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PatientsPage from '../pages/PatientsPage';
import PatientPage from '../pages/PatientPage';
import SignUpPage from '../pages/SignUpPage';

class AppRouter extends React.Component {
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
                <Route
                    path="/:organisationId/patients"
                    component={PatientsPage}
                    onEnter={(state) => {
                        this.props.dispatch(patientsFetch(
                            state.params.organisationId,
                            state.location.query
                        ));
                    }}
                    onChange={(state) => {
                        this.props.dispatch(patientsFetch(
                            state.params.organisationId,
                            state.location.query
                        ));
                    }}
                />
                <Route
                    path="/:organisationId/patients/:patientId"
                    component={PatientPage}
                    onEnter={(state) => {
                        this.props.dispatch(patientFetch(
                            state.params.patientId,
                            state.location.query
                        ));
                        this.props.dispatch(reportsFetch(
                            state.params.patientId,
                            null,
                            { include: 'user' },
                        ));
                    }}
                />
            </Router>
        );
    }
}

AppRouter.propTypes = {
    dispatch: React.PropTypes.any,
    history: React.PropTypes.any,
};

export default connect()(AppRouter);
