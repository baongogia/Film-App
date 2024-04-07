import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMG_URL } from "../../../JS/API";
import { Link } from "react-router-dom";
import { Star } from "@mui/icons-material";

function SlideShow({
  index,
  background,
  title,
  release,
  vote,
  overview,
  filmID,
}) {
  return (
    <div className="" key={index}>
      {/* Click on mobile */}
      <Link to={`/FilmDetails/${filmID}`}>
        <button className="w-full h-full absolute top-0 z-[99] md:hidden"></button>
      </Link>
      {/* Image */}
      <div className="w-[89em] float-right">
        <img
          className="object-cover object-center w-full h-max"
          src={`${IMG_URL}${background}`}
          alt="/"
        />
      </div>

      {/* Slider content */}
      <div className="absolute bottom-[5em] w-[40em] ml-[5em] z-10 text-white">
        <div className=" font-bold text-[2.5em] h-[1.7em] text-main truncate tracking-wide hidden md:block">
          {title}
        </div>

        <div className="flex">
          <div className="text-[2em] mr-[2.5em] font-bold text-tx">
            {release}
          </div>

          <div className="text-[2em] font-bold text-tx">{vote.toFixed(1)}</div>

          <div className="">
            <Star fontSize="large" className="ml-2 mt-2 text-yellow-400" />
          </div>

          <div className="bg-gradient-to-b from-main to-black ml-[5em] rounded-3xl w-[12em] opacity-80 hover:opacity-100 hidden md:block">
            <Link to={`/FilmDetails/${filmID}`}>
              <button className="text-white text-center mt-3 ml-4 font-bold">
                WATCH TRAILER
              </button>
              <FontAwesomeIcon className="ml-2 text-[1.2em]" icon={faFilm} />
            </Link>
          </div>
        </div>

        <div
          className="text-left max-w-[23em] mt-1
                       md:w-full md:max-w-[98.7%]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {overview}
        </div>
      </div>
      {/* Overlay */}
      <div className="hidden lg:block absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-50  "></div>
      <div className="hidden lg:block absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-80 blur "></div>
      <div className="hidden lg:block absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-100 blur "></div>
      <div className="hidden lg:block absolute top-0 bg-gradient-to-r from-black w-[45em] h-[70em] opacity-100 blur "></div>
      <div className="hidden lg:block absolute top-0 bg-gradient-to-r from-black w-[45em] h-[70em] opacity-100 blur "></div>
    </div>
  );
}

export default SlideShow;
