// import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './sagas';
import reducers from './reducers';

export default () => {
    // const loggerMiddleware = createLogger()
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducers,
        // applyMiddleware(sagaMiddleware, loggerMiddleware),
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
