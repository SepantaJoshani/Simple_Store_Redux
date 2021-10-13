import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <ToastProvider autoDismissTimeout="3000">
     <App />
     </ToastProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
