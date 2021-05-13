import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

import ChangePasswordForm from "../components/profile/ChangePasswordForm";

import { userProvider } from "../store/user/auth";
import { enable2Fa } from "../store/actions/user";

function Profile() {
  const [code, setCode] = useState("");
  const { currentUser } = userProvider();
  const { addToast } = useToasts();

  const handleSubmit = () => {
    enable2Fa(code, addToast);
  };

  return (
    <section id="profile" className="container">
      <h1>Profile</h1>
      {currentUser.isAuthenticated && (
        <div className="content-wrapper">
          <div className="col col-1">
            <div className="name">
              {currentUser.user.name[0].toUpperCase() +
                currentUser.user.name.slice(1) +
                " " +
                currentUser.user.surname[0].toUpperCase() +
                currentUser.user.surname.slice(1)}
            </div>
            <div className="id">ID: {currentUser.user.id}</div>
            <div className="status">
              {currentUser.user.status || "Under Review"}
            </div>
          </div>
          <div className="col col-2">
            <ChangePasswordForm />
            <div className="req-wrapper">
              <div>
                <div>A minimum of 1 lower case letter [a-z] and</div>
                <div>A minimum of 1 upper case letter [A-Z] and</div>
              </div>
              <div>
                <div>A minimum of 1 numeric character [0-9] and</div>
                <div>Passwords must be at least 8 characters in length.</div>
              </div>
            </div>

            <div className="twofa-wrapper">
              <img src={currentUser.user.qr_image} alt="twofa-qr" />
              <div className="inner-wrapper">
                <h3>
                  Use your Google Authenticator app to scan this QR code and
                  enter the one time password below.
                </h3>
                <div className="input-wrapper">
                  <input
                    placeholder="Manual Code"
                    type="text"
                    name="twofa"
                    id="twofa"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <span onClick={handleSubmit}>Enable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profile;
