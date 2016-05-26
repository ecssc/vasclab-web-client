import rootSaga from './sagas'
import reducers from './reducers'

import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { addResponsiveHandlers } from 'redux-responsive'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware(rootSaga)

export default () => {
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware, loggerMiddleware)
    )

    addResponsiveHandlers(store)

    return store
}
