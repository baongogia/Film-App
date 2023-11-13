import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Login, SignUp } from "../../JS/Action";


export default function NavSign() {
  return (
    <div className="navbar__sign">
      <a href="#search">
        <FontAwesomeIcon
          className="navbar__sign--search--icon"
          icon={faSearch}
        />
      </a>
      <div onClick={Login} className="navbar__user--in">
        LOG IN
      </div>
      <div onClick={SignUp} className="navbar__user--up hovup">
        SIGN UP
      </div>

    </div>
  );
}
