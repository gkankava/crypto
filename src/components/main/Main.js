import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { userProvider } from "../../store/user/auth";

import Landing from "../../containers/Landing";
import Dashboard from "../../containers/Dashboard";

function Main({ history }) {
  const { currentUser } = userProvider();

  useEffect(() => {
    if (currentUser.isAuthenticated) {
      history.push("/dashboard");
    } else history.push("/");
    // eslint-disable-next-line
  }, [currentUser.isAuthenticated]);

  return (
    <Switch>
      <Route exact path="/" render={(props) => <Landing {...props} />} />
      <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
    </Switch>
  );
}

export default withRouter(Main);
