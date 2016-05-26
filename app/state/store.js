import rootSaga from './sagas'
import reducers from './reducers'

import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { addResponsiveHandlers } from 'redux-responsive'

export default () => {
    let loggerMiddleware = createLogger()
    let sagaMiddleware = createSagaMiddleware()

    let store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware, loggerMiddleware)
    )

    addResponsiveHandlers(store)

    sagaMiddleware.run(rootSaga)

    return store
}
