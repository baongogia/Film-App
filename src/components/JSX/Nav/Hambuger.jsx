import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/hambuger.css";

function Hambuger() {
  const [openMenu, setOpenMenu]  = useState(false)
  return (
    <div className="hambuger md:hidden bg-main">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" checked= {openMenu} onClick={() =>setOpenMenu(true)} />

          <span></span>
          <span></span>
          <span></span>

          <ul className="mini-menu justify-center font-bold" onClick={() =>setOpenMenu(false)}>
            <li className="nav__list--unit ">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav__list--unit">
              <Link to="/GenresPage">GENRES</Link>
            </li>
            <li className="nav__list--unit">
              <Link to="/aboutPage">TOP RATED</Link>
            </li>
            <li className="nav__list--unit">
              <Link to="/ContactPage">CONTACT</Link>
            </li>
            <li className="nav__list--unit">
              <Link to="/newPage">
                NEWS
                <FontAwesomeIcon className="trending-icon" icon={faFire} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Hambuger;
