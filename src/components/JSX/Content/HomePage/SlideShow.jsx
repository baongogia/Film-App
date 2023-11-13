import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMG_URL } from "../../../JS/API";

function SlideShow({index, background, title, release, vote, overview}) {
  return (
    <div className="" key={index}>
      {/* Image */}
      <div className="w-[89em] float-right">
        <img
          className="object-cover object-center"
          src={`${IMG_URL}${background}`}
          alt="/"
        />
      </div>
      {/* Slider content */}
      <div className="absolute bottom-[5em] w-[40em] ml-[5em] z-10 text-white">
        <div className=" font-bold text-[2.5em] h-[1.5em] text-main truncate ">
          {title}
        </div>
        <div className="flex ">
          <div className="text-[2em] mr-[2.5em] ">{release}</div>
          <div className="text-[2em]">{vote.toFixed(1)}</div>
          <FontAwesomeIcon
            className="ml-2 mt-3 text-[1.8em] text-yellow-300 "
            icon={faStar}
          />
        </div>
        <div className="">{overview}</div>
      </div>
      {/* Overlay */}
      <div className=" absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-50  "></div>
      <div className=" absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-80 blur "></div>
      <div className=" absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-100 blur "></div>
    </div>
  );
}

export default SlideShow;
