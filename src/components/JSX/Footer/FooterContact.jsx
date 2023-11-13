import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faInstagramSquare,
  faYoutubeSquare,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterContact() {
  return (
    <div className="footer__infor-contact">
      <div className="footer__infor-contact-page"></div>

      <div className="footer__infor-contact--list">
        <FontAwesomeIcon
          className="footer__infor-contact--list--icon hover:opacity-90"
          id="facebook"
          icon={faFacebookSquare}
        />
        <FontAwesomeIcon
          className="footer__infor-contact--list--icon hover:opacity-90"
          icon={faInstagramSquare}
        />
        <FontAwesomeIcon
          className="footer__infor-contact--list--icon hover:opacity-90"
          icon={faSquareXTwitter}
        />
        <FontAwesomeIcon
          className="footer__infor-contact--list--icon hover:opacity-90"
          icon={faYoutubeSquare}
        />
        <FontAwesomeIcon
          className="footer__infor-contact--list--icon hover:opacity-90"
          icon={faTiktok}
        />
      </div>
    </div>
  );
}
