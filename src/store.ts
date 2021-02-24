import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './modules';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare const window: ExtendedWindow;
const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  composeReduxDevToolsEnhancers(applyMiddleware(sagaMiddleware))
);
/* eslint-enable */

sagaMiddleware.run(rootSaga);
export default store;
