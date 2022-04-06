import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducer";

const middlewares = [thunk];

const appReducers = combineReducers({
    authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducers);

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(
//     applyMiddleware(...middlewares)
//     // other store enhancers if any
//   )
// );
// const persistor = persistStore(store)

// store.subscribe(() => {
//   store.getState();
// });

// export {store,persistor};
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares)
      // other store enhancers if any
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
