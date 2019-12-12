import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleWare from 'redux-saga';
import apiSaga from '../sagas/api-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
  rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(apiSaga);

export default store;
