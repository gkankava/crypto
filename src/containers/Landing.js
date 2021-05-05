import React, { useEffect } from "react";
import { userProvider } from "../store/user/auth";

import Exland from "../components/landing/Exland";
import Description from "../components/landing/Description";
import Roadmap from "../components/landing/Roadmap";
import Payment from "../components/landing/Payment";

function Landing({ history }) {
  const { currentUser } = userProvider();

  useEffect(() => {
    if (currentUser.isAuthenticated) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [currentUser.isAuthenticated]);

  return (
    <div className="container">
      <Exland />
      <Description />
      <Roadmap />
      <Payment />
    </div>
  );
}

export default Landing;
