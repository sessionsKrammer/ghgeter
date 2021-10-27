import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";
//import { createBrowserHistory } from "history";

import ErrorBoundry from "components/helpers/ErrorBoundry";
import App from "components/app";

ReactDom.render(
  <ErrorBoundry>
    <Provider store={null}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ErrorBoundry>,

  document.getElementById("root")
);
