import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { clientID } from "../../JS/API";
import { gapi } from "gapi-script";
import "./GGbutton.css";
import axios from "axios";

function GGLogin({ openLogIn }) {
  // Client
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        // save Data
        localStorage.setItem("userData", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
      // Save
      localStorage.setItem("isLoggedIn", "true");
      window.location.reload();
    },
  });

  return (
    <div
      onClick={() => login()}
      className={`w-[8.3em] opacity-0 transition-opacity duration-[500ms] ${
        openLogIn ? "opacity-100" : "opacity-0 z-[-1]"
      }`}
    >
      <div className="neonbutton ml-4 h-[5em] cursor-pointer ">
        <div className="neon" href="neon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="flex flex-row justify-center items-center">
            Sign in with Google
            <img
              className="w-[10%] ml-2"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GGLogin;
