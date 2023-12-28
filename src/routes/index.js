import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({ match }) => {
  return (
    <div
      style={{ fontFamily: "CPAC_MODERN_MEDIUM" }}
      className="gx-main-content-wrapper"
    >
      <Switch>
        <Route
          path={`${match.url}main`}
          exact
          component={asyncComponent(() => import("./Profile/index"))}
        />
        <Route
          path={`${match.url}estimate`}
          exact
          component={asyncComponent(() => import("./Estimate/index"))}
        />
      </Switch>
    </div>
  );
};

export default App;
