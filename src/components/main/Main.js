import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import ProtectedRoute from "../../router/ProtectedRoute";

// import { userProvider } from "../../store/user/auth";

import Landing from "../../containers/Landing";
import Dashboard from "../../containers/Dashboard";
import About from "../../containers/About";
import Legal from "../../containers/Legal";
import Terms from "../../containers/Terms";
import Refund from "../../containers/Refund";
import Faq from "../../containers/Faq";
import Contact from "../../containers/Contact";
import Limits from "../../containers/Limits";
import Fees from "../../containers/Fees";
import Verification from "../../containers/Verification";
import Init from "../../containers/Init";
import Profile from "../../containers/Profile";
import Wallet from "../../containers/Wallet";
import Withdraw from "../../containers/Withdraw";

function Main() {
  // const { currentUser } = userProvider();
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
      <Route path="/limits" render={(props) => <Limits {...props} />} />
      <Route path="/fees" render={(props) => <Fees {...props} />} />
      <Route
        exact
        path="/verification"
        render={(props) => <Verification {...props} />}
      />
      <Route
        exact
        path="/verification/init"
        render={(props) => <Init {...props} />}
      />
      <Route path="/profile" render={(props) => <Profile {...props} />} />
      <Route path="/wallet" render={(props) => <Wallet {...props} />} />
      <Route path="/withdraw" render={(props) => <Withdraw {...props} />} />
    </Switch>
  );
}

export default withRouter(Main);
