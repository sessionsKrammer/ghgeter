import React from "react";

import { compose } from "utils";

import withBackground from "components/hoc/withBackground";
import BG from "components/elements/Background/Background";

//import Toggle from "components/elements/Toggle";

const App = () => {
  return (
    <div className="app">
      1
      {
        //Auth
        //Switch
        //Route - > RepoSearch
        //Route - > RepoCabinet
      }
    </div>
  );
};

export default compose(withBackground(BG))(App);
