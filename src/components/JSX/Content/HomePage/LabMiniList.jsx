import {
  faMinusCircle,
  faPenSquare,
  faPlusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { addFilm, openEditFilm } from "../../../JS/Action";

function LabMiniList({
  id,
  background,
  title,
  release,
  rate,
  overview,
  deleteFilm,
  onEditClick,
}) {
  return (
    <div className="">
      {/* Image */}
      <div className="w-[89em] float-right">
        <img
          className="object-cover object-center w-full h-full"
          src={`${background}`}
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
          <div className="text-[2em]">{rate}</div>
          <FontAwesomeIcon
            className="ml-2 mt-3 text-[1.8em] text-yellow-300 "
            icon={faStar}
          />
        </div>
        <div className="">{overview}</div>
      </div>

      {/* Control */}
      <div className="absolute w-[13em] h-[5em] bottom-[5em] right-[5em] flex justify-between items-end z-10">
        {/* Add film Button */}
        <FontAwesomeIcon
          className="control-button text-[3em] opacity-60 hover:opacity-100 hover:text-main cursor-pointer select-none"
          onClick={addFilm}
          icon={faPlusCircle}
          style={{ pointerEvents: "none" }}
        />
        {/* Edit film Button */}
        <FontAwesomeIcon
          className="control-button text-[3em] opacity-60 hover:opacity-100 hover:text-main cursor-pointer"
          onClick={() => {
            openEditFilm();
            onEditClick();
          }}
          icon={faPenSquare}
          style={{ pointerEvents: "none" }}
        />
        {/* Delete film Button */}
        <FontAwesomeIcon
          className="control-button text-[3em] opacity-60 hover:opacity-100 hover:text-main cursor-pointer"
          onClick={() => deleteFilm(id)}
          icon={faMinusCircle}
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Overlay */}
      <div className=" absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-50  "></div>
      <div className=" absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-80 blur "></div>
      <div className=" absolute top-0 bg-gradient-to-r from-black w-[55em] h-[70em] opacity-100 blur "></div>
    </div>
  );
}

export default LabMiniList;

