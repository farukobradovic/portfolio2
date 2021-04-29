import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
// import "./css/icons.css";
import "./css/style.css";
import App from "./App";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
