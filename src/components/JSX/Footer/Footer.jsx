import React from "react";
import DarkModeButton from "./DarkModeButton";
import FooterInfor from "./FooterInfor";
import FooterContact from "./FooterContact";
import FooterIntro from "./FooterIntro";

export default function Footer() {
  return (
    <div className="footer bg-white dark:bg-dark">
      <div className="footer__infor">
        <div className="footer__infor--wrap block md:flex">
          <FooterIntro />
          <FooterInfor />
        </div>
      </div>
      <div className="dark__mode pb-10">
        <DarkModeButton />
        <FooterContact />
      </div>
    </div>
  );
}
