import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../../routes';
import configureStore from '../../state/store';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
);
