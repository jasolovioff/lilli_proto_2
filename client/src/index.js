import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import reducers from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/settings.css";
import "./static/css/animations.css";
import "./static/css/icon.css";
import "./static/css/system.css";
//import "./static/css/special.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
