import React from "react";
import "./CSS/control.css";
import "./CSS/title.scss";

export default function ContentMenu({ Name }) {
  return (
    <div className="content__container--menu dark:bg-dark">
      <div className="content__container--menu-control flex justify-center items-start h-0 md:w-full lg:w-[95%]">
        {/* Title */}

        <div className="title-wrap overflow-hidden border-main border-solid border-[0.05em] bg-gradient-to-t from-main to-black">
          <p className="title min-w-[87.5vw] md:max-w-[30em] md:min-w-[10em] ">
            <span className="title-name">{Name}</span>
          </p>
        </div>

      </div>
    </div>
  );
}
