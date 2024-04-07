import React from "react";

export default function FooterIntro() {
  return (
    <div className="footer__infor--intro w-[50%] translate-x-64 md:translate-x-0 md:ml-[14em] md:w-[30%] lg:ml-[5em] lg:w-[40%]">
      <img
        src="assets/images/Logo.jpg"
        className="footer__infor--logo"
        alt="#"
      />
      <div className="footer__infor--intro--text dark:text-white">
        FakeFlict-Discover the world of cinema<br></br>excellence on our
        website. Dive into the<br></br> finest films from across the globe
        today!
      </div>
    </div>
  );
}
