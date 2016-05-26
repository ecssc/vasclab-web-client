import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import DocumentTitle from 'react-document-title'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './state/store'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const store = configureStore();

injectTapEventPlugin()

ReactDOM.render(
    <Provider store={store}>
        <DocumentTitle title="VascLab">
            <Router history={browserHistory}>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sign-up" component={SignUpPage} />
            </Router>
        </DocumentTitle>
    </Provider>,
    document.getElementById('root')
)
