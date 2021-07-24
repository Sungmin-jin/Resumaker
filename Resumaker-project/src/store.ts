import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import setAuthToken from "./util/setAuthToken";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

sagaMiddleware.run(rootSaga);
