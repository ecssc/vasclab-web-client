import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import DocumentTitle from 'react-document-title'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { addResponsiveHandlers } from 'redux-responsive'

import rootSaga from './state/sagas'
import reducers from './state/reducers'
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import injectTapEventPlugin from 'react-tap-event-plugin'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

injectTapEventPlugin()

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware(rootSaga)

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
)

addResponsiveHandlers(store)

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
