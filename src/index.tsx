import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ErrorBoundry from "components/helpers/ErrorBoundry";
import App from "components/app";

import store from "store";

import "resources/reset.scss";
import "resources/main.scss";
import "resources/vars.scss";

const history = createBrowserHistory({
  basename: "/",
});

ReactDom.render(
  <ErrorBoundry>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ErrorBoundry>,

  document.getElementById("root")
);
