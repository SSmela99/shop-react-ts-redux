// @ts-nocheck
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./state/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.module.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
