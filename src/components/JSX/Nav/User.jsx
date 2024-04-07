import React, { useEffect, useState } from "react";
import GGLogout from "./GGLogout";
import { Link } from "react-router-dom";

function User({ name, avatar }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className={`ml-[12em] ${isLoggedIn ? "block" : "hidden"}`}>
      <div className="absolute w-[14em] h-[5em] bottom-0 mb-3 right-2 flex items-center justify-around z-1">
        <div className="font-bold text-[1.4em] text-main">Hi {name} !</div>
        <img
          onClick={() => (showUser ? setShowUser(false) : setShowUser(true))}
          src={avatar}
          alt=""
          id="avatar"
          className="w-[2.8em] rounded-full  cursor-pointer"
        />
      </div>
      {/* Infor */}
      <div
        className={`absolute top-[5em] right-6 max-w-[9em] max-h-[10em] bg-dark z-10 will-change-transform duration-200 origin-top-right
                       rounded-lg border-solid border-main border-[0.1em] overflow-hidden  ${
                         showUser ? "opacity-1 scale-100" : "opacity-0 scale-0"
                       }`}
      >
        <div
          className="hover:bg-gray-600 cursor-pointer w-full pl-4 pr-4"
          onClick={() => setShowUser(false)}
        >
          <Link to={"/profile"} className="pr-10 text-white">
            Profile
          </Link>
        </div>
        <GGLogout />
      </div>
    </div>
  );
}

export default User;
