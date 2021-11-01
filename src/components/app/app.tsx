import React from "react";
import { Switch, Route } from "react-router";

import { compose } from "utils";

import withBackground from "components/hoc/withBackground";
import BG from "components/elements/Background/Background";

import RepoSearch from "components/RepoSearch";

const App = () => {
  return (
    <div className="app">
      {
        //Auth
        //Switch
        //Route - > RepoSearch
        //Route - > RepoCabinet
      }
      <Switch>
        <Route exact path="/">
          <RepoSearch />
        </Route>
      </Switch>
    </div>
  );
};

export default compose(withBackground(BG))(App);
