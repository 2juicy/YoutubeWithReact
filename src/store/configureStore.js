import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware;
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
}
