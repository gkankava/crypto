import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Landing from "../../containers/Landing";
import Dashboard from "../../containers/Dashboard";
import About from "../../containers/About";
import Legal from "../../containers/Legal";
import Terms from "../../containers/Terms";
import Refund from "../../containers/Refund";
import Faq from "../../containers/Faq";
import Contact from "../../containers/Contact";

function Main() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Landing {...props} />} />
      <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
      <Route path="/about" render={(props) => <About {...props} />} />
      <Route path="/iex-ou" render={(props) => <Legal {...props} />} />
      <Route path="/terms" render={(props) => <Terms {...props} />} />
      <Route path="/refund" render={(props) => <Refund {...props} />} />
      <Route path="/faq" render={(props) => <Faq {...props} />} />
      <Route path="/contact" render={(props) => <Contact {...props} />} />
    </Switch>
  );
}

export default withRouter(Main);
