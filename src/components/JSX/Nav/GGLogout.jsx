import React, { useEffect } from "react";
import { clientID } from "../../JS/API";
import { gapi } from "gapi-script";
import { googleLogout } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function GGLogout() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const logOut = () => {
    localStorage.setItem("isLoggedIn", "false");
    googleLogout();
    goToHome();
    window.location.reload();
  };

  return (
    <div
      className="GGLogOut flex flex-row justify-center items-center cursor-pointer hover:bg-gray-600"
      onClick={() => logOut()}
    >
      <FontAwesomeIcon icon={faRightFromBracket} />
      <div className="ml-4 text-white">Log out!</div>
    </div>
  );
}

export default GGLogout;
