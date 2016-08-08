import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from '../pages/HomePage';
import { userAuthCheck } from '../state/actions';

class App extends React.Component {
    /**
     * Component will mount event handler.
     *
     * Checks the authentication status of the current user.
     */
    componentWillMount() {
        this.props.dispatch(userAuthCheck());
    }

    /**
     * Renders the application.
     *
     * @return {XML}
     */
    render() {
        return (
            <MuiThemeProvider>
                {this.props.children || <HomePage />}
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    dispatch: React.PropTypes.any,
    children: React.PropTypes.any,
};

export default connect()(App);
