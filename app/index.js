import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './state/store'
import injectTapEventPlugin from 'react-tap-event-plugin'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

import Router from './components/Router'

injectTapEventPlugin()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} />
    </Provider>,
    document.getElementById('root')
)
