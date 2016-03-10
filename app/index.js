import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import { addResponsiveHandlers } from 'redux-responsive'
import DocumentTitle from 'react-document-title'
import injectTapEventPlugin from 'react-tap-event-plugin'
import reducers from './state/reducers'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

injectTapEventPlugin()

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

addResponsiveHandlers(store)

reduxRouterMiddleware.listenForReplays(store)

if (store.getState().user.id === null) {
    browserHistory.replace('/login')
}

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
