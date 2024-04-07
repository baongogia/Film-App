import React, { useState } from "react";
import NavList from "./NavList";
import NavSign from "./NavSign";
import LoginPage from "./LoginPage";
import User from "./User";
import Hambuger from "./Hambuger";

export default function Nav() {
  // Get user data
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log(userData);
  // Open login page
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
      <div
        className="flex flex-row relative justify-around items-center bg-opacity-70
       lg:bg-dark lg:flex-row
        md:flex-col"
      >
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[1.5em] bg-gradient-to-b from-black to-main blur opacity-70"></div>

        <Hambuger/>

        <a href="/" className="w-[30%] lg:w-[12%] md:w-[25%] z-[1]">
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
