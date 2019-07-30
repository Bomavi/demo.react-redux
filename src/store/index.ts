/* npm imports: common */
import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* root imports: common */
import { reduxLogger } from 'config/middleware';
import { rootReducer } from 'reducers';
import { saga } from 'sagas';

const dev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

if (dev) middleware.push(reduxLogger);

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);

export { store };
