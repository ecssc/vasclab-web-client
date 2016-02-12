import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import { addResponsiveHandlers } from 'redux-responsive'
import injectTapEventPlugin from 'react-tap-event-plugin'
import reducers from './state/reducers'

import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'

injectTapEventPlugin()

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

addResponsiveHandlers(store)

reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
