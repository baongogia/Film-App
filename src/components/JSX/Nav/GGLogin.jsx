import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { clientID } from "../../JS/API";
import { gapi } from "gapi-script";
import jwt_decode from "jwt-decode";

function GGLogin({ getUserData }) {

  const sendData = (userData) => {
    getUserData(userData);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  // Success
  const onSuccess = (res) => {
    // get user data
    var userData = jwt_decode(res.credential);
    console.log("LOGIN SUCCESS! Current user: ", userData);
    sendData(userData);
    
    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    // Other
    const log = document.querySelector(".navbar__sign");
    log.style.display = "none";
    const loginBox = document.getElementById("LoginPage");
    loginBox.style.display = "none";
    const userprofile = document.querySelector(".user-profile");
    userprofile.style.display = "block";
    const inforbox = document.querySelector('.infor-box')
    inforbox.style.opacity = "0";
    const controls = document.querySelectorAll('.control-button');
    controls.forEach((control) => {
      control.style.pointerEvents = 'auto';
    });
  };

  // Failure
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div id="GGSignIn" className="absolute bottom-[2.8em] left-[8%] w-[8.3em]">
      <GoogleLogin
        clientId={clientID}
        text={"signin"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single _host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default GGLogin;
