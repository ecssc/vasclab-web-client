import 'babel-polyfill';
import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import configureStore from './state/store';
import { browserHistory } from 'react-router';

const store = configureStore();

import App from './components/App';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
