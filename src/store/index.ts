import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'reducers';
import { reduxLogger } from 'store/middleware';

const dev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

if (dev) middleware.push(reduxLogger);

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

// sagaMiddleware.run();

export { store };
