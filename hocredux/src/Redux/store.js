import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { todoReducer } from "./Reducers/todoReducer";
import { counterReducer } from "./Reducers/counterReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);

console.log(store);
