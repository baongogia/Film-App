import React, { useEffect, useState } from "react";

export default function NavSign({ openLogIn, setOpenLogIn, setOpenSignUp }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className={`navbar__sign w-13 md:w-[15em] lg:mb-0 md:mb-8 ${isLoggedIn ? "hidden" : "flex"}`}>
      <div
        onClick={() => setOpenLogIn(true)}
        className={`navbar__user--in uppercase font-bold ${
          openLogIn ? "bg-main p-[0.7em] rounded-md" : ""
        }`}
      >
        log in
      </div>
      <div
        onClick={() => {
          setOpenSignUp(true);
          setOpenLogIn(false);
        }}
        className={`navbar__user--up uppercase font-bold  ${
          openLogIn ? "bg-black p-0" : "bg-main p-[0.7em] rounded-md"
        }`}
      >
        sign up
      </div>
    </div>
  );
}
