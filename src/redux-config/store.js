import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createRootReducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  name: "React Redux Sagas Starter",
});

const store = createStore(
  createRootReducer(),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default () => ({ store });
