import React from "react";
import { BrwoserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";
import configRouting from "./configRouting";

function Routing(props) {
  return (
    <Router>
      <Switch>
        {map(configRouting, (route, index) => {
          <Route key={index} path={route.path} exact={route.exact}>
            <route.page />
          </Route>
        })}
      </Switch>
    </Router>
  );
}

export default Routing;
