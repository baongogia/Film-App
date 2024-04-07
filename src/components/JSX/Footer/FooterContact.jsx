import React from "react";
import "./CSS/social.css";

export default function FooterContact() {
  return (
    <div className="">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

        <h1 className="social-title dark:bg-dark">FOLLOW US ON SOCIAL MEDIA</h1>

        <div className="social-media w-[24em] md:w-full dark:bg-dark">
          <div className="social-icon" href="#">
            <i className="fab fa-facebook "></i>
          </div>
          <div className="social-icon" href="#">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="social-icon" href="#">
            <i className="fab fa-github"></i>
          </div>
          <div className="social-icon" href="#">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="social-icon" href="#">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
    </div>
  );
}
