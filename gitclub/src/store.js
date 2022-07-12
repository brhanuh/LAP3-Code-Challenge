import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import { RepoReducer } from "./reducer";

const store = createStore(
  RepoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
