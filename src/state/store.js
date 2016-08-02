import rootSaga from './sagas';
import reducers from './reducers';

//import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

export default () => {
    //let loggerMiddleware = createLogger()
    let sagaMiddleware = createSagaMiddleware()

    let store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware/*, loggerMiddleware*/)
    )

    sagaMiddleware.run(rootSaga)

    return store
}
