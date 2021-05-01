import React, { useEffect } from "react";
import { userProvider } from "../store/user/auth";
function Landing({ history }) {
  const { currentUser } = userProvider();
  useEffect(() => {
    if (currentUser.isAuthenticated) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [currentUser.isAuthenticated]);
  return <div className="container"></div>;
}

export default Landing;
