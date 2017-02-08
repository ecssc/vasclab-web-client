import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from '../../views/Home';
import NoMatch from '../../views/NoMatch';
import SignIn from '../../views/SignIn';

import { userAuthCheck } from '../../state/actions/user';

class App extends React.Component {
    componentWillMount() {
        this.props.dispatch(userAuthCheck());
    }

    render() {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="*" component={NoMatch} />
                </Router>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};

export default connect()(App);
