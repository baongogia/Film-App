import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { clientID } from "../../JS/API";
import { gapi } from "gapi-script";

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

  const onSuccess = () => {
    console.log("Log out!");
    const log = document.querySelector(".navbar__sign");
    log.style.display = "flex";
    const loginBox = document.getElementById("LoginPage");
    loginBox.style.display = "block";
    const userprofile = document.querySelector(".user-profile");
    userprofile.style.display = "none";
    const controls = document.querySelectorAll('.control-button');
    controls.forEach((control) => {
      control.style.pointerEvents = 'none';
    });
  };

  return (
    <div className="GGLogOut">
      <GoogleLogout
        clientId={clientID}
        buttonText={"Log Out!"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default GGLogout;
