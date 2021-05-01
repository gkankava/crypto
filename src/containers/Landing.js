import React, { useEffect } from "react";
import { userProvider } from "../store/user/auth";
import Exland from "../components/landing/Exland";

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
      sda
    </div>
  );
}

export default Landing;
