import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configRouting from "./configRouting";

function Routing() {
  return (
    <Router>
      <Switch>
        {configRouting.map((routing, index) => {
          return (
            <Route key={index} exact path={routing.path} component={routing.page}/>
          );
        })}
      </Switch>
    </Router>
  );
}

export default Routing;
