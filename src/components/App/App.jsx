import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import createStore from '../../state/store';

import Home from '../../views/Home';
import NoMatch from '../../views/NoMatch';
import SignIn from '../../views/SignIn';

const store = createStore();

const App = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="*" component={NoMatch} />
        </Router>
    </Provider>
);

export default App;
