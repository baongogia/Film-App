import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import "./login.css";
import "./GGbutton.css";
import GGLogin from "./GGLogin";

export default function LoginPage({
  openLogIn,
  setOpenLogIn,
  setOpenSignUp,
  openSignUp,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div
      className={`signup absolute top-[150%] left-[32%] bg-dark h-[40em] w-[35em] z-[-1] opacity-0 will-change-transform 
                     rounded-[1em] border-double border-main border-[0.3em] transition-all duration-700
                     scale-0 ${isLoggedIn ? "hidden" : "block"} ${
        openLogIn ? "opacity-100 z-[15] scale-100" : ""
      }  ${openSignUp ? "opacity-100 z-[10]  scale-100" : ""}`}
    >
      <FontAwesomeIcon
        onClick={() => {
          setOpenLogIn(false);
          setOpenSignUp(false);
        }}
        className="absolute top-3 right-3 cursor-pointer text-main z-10"
        icon={faXmarkCircle}
      ></FontAwesomeIcon>

      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span
                    className={`cursor-pointer ${openLogIn ? "text-main" : ""}`}
                  >
                    Log In{" "}
                  </span>
                  <span
                    className={`cursor-pointer ${openLogIn ? "" : "text-main"}`}
                  >
                    Sign Up
                  </span>
                </h6>
                <input
                  className="checkbox input"
                  type="checkbox"
                  checked={openLogIn ? false : true}
                  onChange={() => console.log("openLogIn")}
                  id="reg-log"
                  name="reg-log"
                />
                <label id="switchBtn" htmlFor="reg-log"></label>

                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style input"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style input"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>

                          <a href="submit" className="sign btn mt-4">
                            submit
                          </a>

                          <GGLogin openLogIn={openLogIn} />

                          <p className="mb-0 text-center pass">
                            <a href="#0" className=" sign link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style input"
                              placeholder="Your Full Name"
                              id="logname"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style input"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style input"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            ></input>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="neonbutton h-[4em] ml-4">
                            <a href="none" className="neon mt-4 p-[1.1em] ">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
