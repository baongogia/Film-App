import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { scrollLeft } from "../../../JS/Action";
import { scrollRight } from "../../../JS/Action";

export default function ContentMenu({Name}) {
  return (
    <div className="content__container--menu dark:bg-dark">
    <div id={Name} className="content__container--menu--title">
      {Name}
    </div>

    <div className="content__container--menu-control">
      <FontAwesomeIcon
        className="content__container--menu--control--icon icon--control-left dark:text-dark"
        onMouseDown={scrollLeft}
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        className="content__container--menu--control--icon icon--control-right dark:text-dark"
        onMouseDown={scrollRight}
        icon={faChevronRight}
      />
    </div>
  </div>
  )
}
