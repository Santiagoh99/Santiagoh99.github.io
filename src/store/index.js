import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export default createStore(
    composeWithDevTools(applyMiddleware(...middleware))
);
