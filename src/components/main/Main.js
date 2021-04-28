import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { userProvider } from "../../store/user/auth";

import Landing from "../../containers/Landing";
import Dashboard from "../../containers/Dashboard";
import About from "../../containers/About";
import Legal from "../../containers/Legal";
import Terms from "../../containers/Terms";
import Refund from "../../containers/Refund";
import Faq from "../../containers/Faq";

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
      <Route path="/about" render={(props) => <About {...props} />} />
      <Route path="/iex-ou" render={(props) => <Legal {...props} />} />
      <Route path="/terms" render={(props) => <Terms {...props} />} />
      <Route path="/refund" render={(props) => <Refund {...props} />} />
      <Route path="/faq" render={(props) => <Faq {...props} />} />
    </Switch>
  );
}

export default withRouter(Main);
