import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers/reducer";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger));

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
registerServiceWorker();
