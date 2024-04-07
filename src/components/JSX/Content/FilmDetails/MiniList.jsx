import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../../../JS/API";
export default function MiniList({ index, Title, originalTitle, Year, Image }) {
  // Flip Card Status
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`content__list--wrap relative ${isFlipped ? "flipped" : ""}`}>
      <div
        className="content__list--icon w-[88.479vw] h-[70vw] md:w-[43.8vw] md:h-[26vw] lg:w-[28.76vw] lg:h-[15.5vw]"
        style={{ backgroundImage: `url('${IMG_URL}${Image}')` }}
      >
        <div className="flip-card-front">
          <div className="content__list__title--name">{Title}</div>
          <div className="play-icon">
            <Link
              to={`/FilmDetails/${index}`}
            >
              <FontAwesomeIcon icon={faPlayCircle} />
            </Link>
          </div>
          <div className="content__list__title--details" onClick={toggleFlip}>
            Details
          </div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-icon">
            <FontAwesomeIcon icon={faXmarkCircle} onClick={toggleFlip} />
          </div>

          <div className="content__list__title--infor">
            <div className="content__list__title--nation">
              {originalTitle}
            </div>
            <div className="content__list__title--year">REALISE: {Year}</div>
          </div>

          <div className="content__list__title--more">
            <Link to={`/FilmDetails/${index}`}>More</Link>
          </div>
        </div>

        <div className="content__list--overlay"></div>
      </div>
    </div>
  );
}
