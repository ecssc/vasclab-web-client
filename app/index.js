import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import reducers from './state/reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Default from './layouts/Default'

injectTapEventPlugin()

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Default}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
