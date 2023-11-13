import React, { useState } from "react";
import NavList from "./NavList";
import NavSign from "./NavSign";
import LoginPage from "./LoginPage";
import { showInfor } from "../../JS/Action";
import User from "./User";

export default function Nav() {
  const [userData, updateUserData] = useState({});

  const receiveUserData = (userData) => {
    updateUserData(userData);
  };

  return (
    <>
      <div className="navbar bg-dark bg-opacity-70">
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[1.5em] bg-gradient-to-b from-black to-main blur opacity-70"></div>
        <img src="assets/images/Logo.jpg" className="navbar-logo" alt="#" />

        <NavList />

        <NavSign />

        <LoginPage putUserData={receiveUserData} />

        <User
          name={userData.given_name}
          show={showInfor}
          avatar={userData.picture}
        />
        
      </div>
    </>
  );
}
