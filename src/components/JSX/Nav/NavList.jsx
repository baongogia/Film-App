import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function NavList() {
  return (
    <ul className="justify-center font-bold z-10 hidden md:flex ">
      <li className="nav__list--unit">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="nav__list--unit">
        <NavLink to="/GenresPage">GENRES</NavLink>
      </li>
      <li className="nav__list--unit">
        <NavLink to="/aboutPage">TOP RATED</NavLink>
      </li>
      <li className="nav__list--unit">
        <NavLink to="/ContactPage">CONTACT</NavLink>
      </li>
      <li className="nav__list--unit">
        <NavLink to="/newPage">
          NEWS
          <FontAwesomeIcon className="trending-icon" icon={faFire} />
        </NavLink>
      </li>
    </ul>
  );
}
