import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import { Reducer } from "./reducers/Reducer.js";
import thunk from "redux-thunk";


const store = createStore(Reducer,applyMiddleware(thunk))

ReactDOM.render( 
<Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));
