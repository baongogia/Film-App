import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSearch } from "@fortawesome/free-solid-svg-icons";
export default class Nav extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <img src="assets/images/Logo.jpg" className="navbar-logo" alt="#" />
          <ul className="nav__list">
            <li className="nav__list--unit">IN THEATERS</li>
            <li className="nav__list--unit">COMING SOON</li>
            <li className="nav__list--unit">CHARTS</li>
            <li className="nav__list--unit">TV SERIES</li>
            <li className="nav__list--unit">
              TRENDING
              <FontAwesomeIcon className="trending-icon" icon={faFire} />
            </li>
          </ul>

          <div class="navbar__sign">
            <FontAwesomeIcon
              className="navbar__sign--search--icon"
              icon={faSearch}
            />
            <div class="navbar__user--in">LOG IN</div>
            <div class="navbar__user--up">SIGN UP</div>
          </div>
        </div>
      </>
    );
  }
}
