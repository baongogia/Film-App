import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./control.css";

export default function ContentMenu({ Name }) {
  function scrollRight() {
    const rightButtons = document.querySelectorAll(".icon--control-right");

    rightButtons.forEach(function (element) {
      element.onclick = () => {
        const contentList = element.closest(".content__films");
        contentList.scrollLeft += 470 * 3;
      };
    });
  }

  function scrollLeft() {
    const leftButtons = document.querySelectorAll(".icon--control-left");

    leftButtons.forEach(function (element) {
      element.onclick = () => {
        const contentList = element.closest(".content__films");
        contentList.scrollLeft -= 470 * 3;
      };
    });
  }
  return (
    <div className="content__container--menu dark:bg-dark">
      <div className="content__container--menu-control flex justify-between items-start w-full h-full">
        {/* Back */}
        <button
          className="custom-btn btn-2 relative icon--control-left "
          onMouseDown={scrollLeft}
        >
          <FontAwesomeIcon
            className="content__container--menu--control--icon  absolute top-[10%] left-[35%] dark:text-dark"
            icon={faChevronLeft}
          />
        </button>
        {/* Title */}
        <div className="custom-btn btn-11 w-[5em] ">
          <div
            className="content__container--menu--title text-dark flex leading-9 
                       rounded-3xl max-w-[10em] pl-3 pr-3 dark:text-dark"
          >
            {Name}
          </div>
        </div>
        {/* Forward */}
        <button
          className="custom-btn btn-2 relative icon--control-right"
          onMouseDown={scrollRight}
        >
          <FontAwesomeIcon
            className="content__container--menu--control--icon  absolute top-[10%] left-[35%] dark:text-dark"
            icon={faChevronRight}
          />
        </button>
      </div>
    </div>
  );
}
