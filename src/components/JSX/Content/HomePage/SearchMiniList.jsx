import React from "react";
import { ERROR_IMG, IMG_URL } from "../../../JS/API";
import { Link } from "react-router-dom";

function SearchMiniList({id, poster, title, release, rate}) {
  return (
    <div className="group hover:bg-tx cursor-pointer mt-[0.5em] rounded-[0.2em] ml-[0.5em]">
      <div className="flex relative">
        <img
          src={
           poster
              ? `${IMG_URL}${poster}`
              : `${ERROR_IMG}`
          }
          className="w-[5em] h-[5em] rounded-[0.2em] object-cover object-center "
          alt=""
        />
        <Link
          className="absolute w-full h-full "
          to={`/FilmDetails/${id}`}
        ></Link>
        <div className="flex flex-col justify-between w-[20em] ml-8 flex-nowrap">
          <div className="text-[1.5em] font-medium text-main h-9 w-[full] truncate">
            {title}
          </div>
          <div className="text-[1.5em] font-[3em] w-full">
            Released: {release}
          </div>
        </div>
        <div className="Rate mt-3 bg-tx ml-6 p-[1em] h-full rounded-[0.2em] font-bold mr-[0.5em] dark:bg-slate-700 group-hover:bg-white">
          {rate}
        </div>
      </div>
    </div>
  );
}

export default SearchMiniList;
