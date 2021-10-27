import React from "react";

import "resources/reset.scss";
import "resources/main.scss";
import "resources/vars.scss";

import Toggle from "components/elements/Toggle";

const App = () => {
  return (
    <div className="app">
      <div className="toggleWrapper">
        <Toggle />
      </div>
    </div>
  );
};

export default App;
