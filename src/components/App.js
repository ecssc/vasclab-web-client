import React from 'react';
import { connect } from 'react-redux';
import { userAuthCheck } from '../state/actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Router from './Router';

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
                <Router history={this.props.history} />
            </MuiThemeProvider>
        );
    }
}

export default connect()(App);
