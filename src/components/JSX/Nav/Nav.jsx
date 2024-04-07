import React, { useState } from "react";
import NavList from "./NavList";
import NavSign from "./NavSign";
import LoginPage from "./LoginPage";
import User from "./User";

export default function Nav() {
  // Get user data
  const userData = JSON.parse(localStorage.getItem("userData"));
  // Open login page
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
      <div className="navbar bg-dark bg-opacity-70">
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[1.5em] bg-gradient-to-b from-black to-main blur opacity-70"></div>
        <a href="/" className="navbar-logo">
          <img src="assets/images/Logo.jpg" className="" alt="home" />
        </a>

        <NavList />

        <NavSign
          openLogIn={openLogIn}
          setOpenLogIn={setOpenLogIn}
          setOpenSignUp={setOpenSignUp}
        />

        <LoginPage
          openLogIn={openLogIn}
          setOpenLogIn={setOpenLogIn}
          setOpenSignUp={setOpenSignUp}
          openSignUp={openSignUp}
        />

        <User
          name={userData ? userData.data.given_name : "Name"}
          avatar={
            userData
              ? userData.data.picture
              : "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
          }
        />
      </div>
    </>
  );
}
