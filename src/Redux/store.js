
import { reducer } from "./reducer";
import {
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;



const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
